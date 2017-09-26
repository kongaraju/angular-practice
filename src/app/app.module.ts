import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import {AppComponent} from './components/app-component/app-component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: []
})

export class AppModule { }