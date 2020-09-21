import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MegaMenuComponent } from './mega-menu.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [MegaMenuComponent],
  exports: [MegaMenuComponent]
})
export class MegaMenuComponentModule {}
