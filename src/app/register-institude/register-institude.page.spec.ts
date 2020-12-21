import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterInstitudePage } from './register-institude.page';

describe('RegisterInstitudePage', () => {
  let component: RegisterInstitudePage;
  let fixture: ComponentFixture<RegisterInstitudePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterInstitudePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterInstitudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
