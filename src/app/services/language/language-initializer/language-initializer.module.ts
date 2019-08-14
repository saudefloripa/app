import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { languageLocaleIdFactory } from '../functions';
import { LanguageService } from '../language.service';
import { LanguageInitializerService } from './language-initializer.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    LanguageInitializerService,
    {
      provide: LOCALE_ID,
      useFactory: languageLocaleIdFactory,
      deps: [LanguageService]
    }
  ]
})
export class LanguageInitializerModule { }
