import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {TitleComponent} from "./title.component";
import {UserService} from "./user.service";
import {ContactModule} from "./contact/contact.module";
import { AppRoutingModule } from './app-routing.module'
import {SharedModule} from "./shared/shared.module";
// import {APP_BASE_HREF} from "@angular/common";

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        ContactModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        TitleComponent
    ],
    providers: [
        UserService
        // does not work for complex path, such as /crisis/list
        // ,{ provide: APP_BASE_HREF,  useValue: '/'}

    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}