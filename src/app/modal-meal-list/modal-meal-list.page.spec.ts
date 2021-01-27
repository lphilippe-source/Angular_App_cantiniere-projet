import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalMealListPage } from './modal-meal-list.page';

describe('ModalMealListPage', () => {
  let component: ModalMealListPage;
  let fixture: ComponentFixture<ModalMealListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMealListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalMealListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
