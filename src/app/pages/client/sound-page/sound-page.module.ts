import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoundPagePageRoutingModule } from './sound-page-routing.module';

import { SoundPagePage } from './sound-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoundPagePageRoutingModule
  ],
  declarations: [SoundPagePage]
})
export class SoundPagePageModule {}
