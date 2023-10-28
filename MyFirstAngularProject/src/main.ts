import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MyAppModule } from './app/myapp.module';


platformBrowserDynamic().bootstrapModule(MyAppModule)
  .catch(err => console.error(err));
