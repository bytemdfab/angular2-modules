import { NgModule } from '@angular/core';
import {HighlightDirective} from "./highlight.directive";
import {FormsModule} from "@angular/forms";
import {AwesomePipe} from "./awesome.pipe";
import {ContactComponent} from "./contact.component";
import {ContactService} from "./contact.service";
import {CommonModule} from "@angular/common";
import {ContactRoutingModule} from "./contact-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ContactRoutingModule
    ],
    declarations: [
        AwesomePipe,
        ContactComponent,
        HighlightDirective
    ],
    providers: [ ContactService ]
})
export class ContactModule {}