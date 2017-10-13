import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddemployeePage } from './addemployee';

@NgModule({
  declarations: [
    AddemployeePage,
  ],
  imports: [
    IonicPageModule.forChild(AddemployeePage),
  ],
})
export class AddemployeePageModule {}
