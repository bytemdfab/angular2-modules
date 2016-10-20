import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {ContactModule} from "./contact/contact.module";
import { AppRoutingModule } from './app-routing.module'
import {CoreModule} from "./core/core.module";
// import {APP_BASE_HREF} from "@angular/common";

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        ContactModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        // does not work for complex path, such as /crisis/list
        // ,{ provide: APP_BASE_HREF,  useValue: '/'}

    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}