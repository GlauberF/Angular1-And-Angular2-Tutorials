import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [ HTTP_PROVIDERS, Configuration ]);
