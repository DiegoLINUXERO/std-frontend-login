import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.config';
 
// Habilitar el modo de producción si la aplicación está en un entorno de producción
if (environment.production) {
  enableProdMode();
}
 
// Arrancar la aplicación con el módulo principal
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));