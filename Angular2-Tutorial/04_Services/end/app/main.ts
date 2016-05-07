import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { MyFirstService } from './services/myfirst.service';

bootstrap(AppComponent, [MyFirstService]);
