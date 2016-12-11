import { LazyComponent } from './components/lazy/lazy.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutes } from './app.routes';
import { SharedModule } from './modules/shared.module';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        RouterModule.forRoot(AppRoutes),
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
