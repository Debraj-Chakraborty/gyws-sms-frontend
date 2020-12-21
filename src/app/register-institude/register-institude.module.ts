import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterInstitudePageRoutingModule } from './register-institude-routing.module';

import { RegisterInstitudePage } from './register-institude.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterInstitudePageRoutingModule
  ],
  declarations: [RegisterInstitudePage]
})
export class RegisterInstitudePageModule {}
