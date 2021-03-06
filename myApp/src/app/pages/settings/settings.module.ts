import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Page
import { SettingsPage } from './settings.page';

//Page Routing
import { SettingsPageRoutingModule } from './settings-routing.module';

//Custom Components
import { TextBlockComponentModule } from '../../components/text-block/text-block.module';
import { SettingFormComponentModule } from '../../components/setting-form/setting-form.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SettingsPageRoutingModule,
    SettingFormComponentModule,
    TextBlockComponentModule,
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
