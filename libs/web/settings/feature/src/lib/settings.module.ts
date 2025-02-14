import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  SETTINGS_FEATURE_KEY,
  settingsReducer,
  SettingsEffects,
  SettingsFacade,
  initSettingsFromLocalStorage
} from '@angular-spotify/web/settings/data-access';

@NgModule({
  imports: [
    StoreModule.forFeature(SETTINGS_FEATURE_KEY, settingsReducer, {
      metaReducers: [initSettingsFromLocalStorage]
    }),
    EffectsModule.forFeature([SettingsEffects])
  ],
  providers: [SettingsFacade]
})
export class SettingsModule {}
