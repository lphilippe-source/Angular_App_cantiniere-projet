import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { EmailUtils } from '../utils/EmailUtils';
import { ToastUtils } from '../utils/ToastUtils';
import { NumberUtils } from '../utils/NumberUtils';
import { User } from '../model/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private service: CantiniereAPIService, private toastController: ToastController, private route: ActivatedRoute, private navController: NavController) {}

  token: string
  user: User
  userForm: FormGroup
  isValidateEnabled: boolean = false
  isImageImported: boolean = false
  image64: string

  ngOnInit() {

    // User et Token recupéré depuis la sessionStorage
    // ils existent forcement car on ne peut acceder à cette page que si on est connecté
    this.user = JSON.parse(sessionStorage.getItem("User"))
    this.token = sessionStorage.getItem("JWT")

    //let userId = this.route.snapshot.paramMap.get("id")

    this.userForm = this.formBuilder.group({
      email: this.user.email,
      verifyEmail: this.user.email,
      address: this.user.address,
      phone: this.user.phone
    })

    this.userForm.valueChanges.subscribe(values => {

      if(values.email != "" && values.verifyEmail != "" || values.adress != "" || values.phone != null){
        
        this.isValidateEnabled = true
        
      } else this.isValidateEnabled = false

    })
  }

  // executée quand l'image est importée par l'utilisateur
  onImageUploaded(event: any) {
    const image = event.target.files[0]

    let sizeMB = image.size / 1000000

    if(sizeMB < 5){

      this.getImage64(image)
      this.isImageImported = true

    } else ToastUtils.presentToast("Veuillez importer une image inférieure à 5MB", "danger", this.toastController)

  }

  getImage64(file :any){
    let reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = (result) => {
        this.image64 = String(result.target.result)
    }

    reader.onerror = (error) => {
        ToastUtils.presentToast("Une erreur s'est produite lors de l'import de l'image", "danger", this.toastController)
    }
  }

  // executée quand l'utilisateur clique sur modifier avatar
  uploadImage(){
    
    // desactivation du bouton au click 
    this.isImageImported = false

    this.service.updateUserImg(this.user.id, this.image64, this.token).subscribe((response) => {
      
      console.log(response)

      this.service.findImg(this.user.id, this.token).subscribe((response) => {
        console.log(response)
        //this.user.image.imagePath = response.body.imagePath
      })

      //this.navController.pop()
    }, (error) => {
      console.log(error)
      ToastUtils.presentToast("Une erreur s'est produire lors de la modification de l'avatar", "danger", this.toastController)
    })

  }

  onValidate(){
    let values = this.userForm.value

    if(values.email.toLowerCase() == values.verifyEmail.toLowerCase()){
      if(EmailUtils.verifyEmail(values.email) && NumberUtils.isNumber(values.phone)){

        this.user.email = values.email.toLowerCase()
        this.user.address = values.address
        this.user.phone = values.phone

        // this.user.password = null
        this.service.updateUser(this.user, this.token).subscribe((response) => {
          console.log(response)
          ToastUtils.presentToast("Informations modifées avec succès", "success", this.toastController)

          // mise à jour de l'utilisateur en sessionStorage
          sessionStorage.setItem("User", JSON.stringify(this.user))
          
          // retour en arrière
          this.navController.pop()
          
        }, (error) => {
          console.log(error)
          ToastUtils.presentToast("Une erreur s'est produite", "danger", this.toastController)
        })

      } else {
        ToastUtils.presentToast("Veuillez saisir un email ou un téléphone valide", "danger", this.toastController)
      }
    } else {
      ToastUtils.presentToast("Les emails ne sont pas identiques", "danger", this.toastController)
    }
  }
}