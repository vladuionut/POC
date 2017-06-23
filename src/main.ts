import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

import { COMPILER_PROVIDERS } from '@angular/compiler';

platformBrowserDynamic([...COMPILER_PROVIDERS]).bootstrapModule(AppModule)

//platformBrowserDynamic().bootstrapModule(AppModule);
