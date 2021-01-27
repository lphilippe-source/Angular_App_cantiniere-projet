import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserCommandesPage } from './user-commandes.page';

describe('UserCommandesPage', () => {
  let component: UserCommandesPage;
  let fixture: ComponentFixture<UserCommandesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCommandesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserCommandesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
