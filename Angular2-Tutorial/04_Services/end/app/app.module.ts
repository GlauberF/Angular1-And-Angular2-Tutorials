import { CalculatorService } from './shared/services/calculator.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule
    ],

    declarations: [
        AppComponent,
        NavigationComponent
    ],

    providers: [
        CalculatorService
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
