import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { PlayComponent } from './play/play.component';

export const routes:Routes=[

  
  {path:'',component:PlayComponent,pathMatch:'full'},
   {path:'success',component:SuccessComponent}


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports:[ RouterModule],

  declarations: []

})
export class AppRoutingModule { }




