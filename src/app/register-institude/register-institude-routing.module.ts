import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterInstitudePage } from './register-institude.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterInstitudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterInstitudePageRoutingModule {}
