import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];
