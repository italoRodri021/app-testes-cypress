import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoundPagePage } from './sound-page.page';

const routes: Routes = [
  {
    path: '',
    component: SoundPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoundPagePageRoutingModule {}
