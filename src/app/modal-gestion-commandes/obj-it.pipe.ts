import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objIt'
})
export class ObjItPipe implements PipeTransform {

  transform(value: any, ...args: any): any[] {
//peut prendre comme argument key pour retourner les keys, ou un argument "x" qui permet d'echapper "x"
  if(value){
    if(args[0]){
      if(args[0]==='key'){
        return Object.keys(value)
      }else{
        let [...res] = Object.entries(value)
        let result = res.filter((el)=>{
          if(el[0]!==args[0])return el
        })
        return result
      }
    }
      return Object.entries(value)
    }
  }
}
