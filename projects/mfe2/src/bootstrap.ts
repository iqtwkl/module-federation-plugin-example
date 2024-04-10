import { createCustomElement } from '@angular/elements';
import { createApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NgZone, booleanAttribute } from '@angular/core';
import { appConfig } from './app/app.config';

(async () => {

  const app = await createApplication({
    providers: [
      /* your global providers here */
      globalThis.ngZone ? { provide: NgZone, useValue: globalThis.ngZone } : [],
      ...appConfig.providers
    ],
  });

  const mfe2Root = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('mfe2-root', mfe2Root);
})();