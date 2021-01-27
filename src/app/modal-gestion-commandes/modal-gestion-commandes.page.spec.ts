import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalGestionCommandesPage } from './modal-gestion-commandes.page';

describe('ModalGestionCommandesPage', () => {
  let component: ModalGestionCommandesPage;
  let fixture: ComponentFixture<ModalGestionCommandesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGestionCommandesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalGestionCommandesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
