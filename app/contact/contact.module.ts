import { NgModule } from '@angular/core';
import {HighlightDirective} from "./highlight.directive";
import {FormsModule} from "@angular/forms";
import {AwesomePipe} from "./awesome.pipe";
import {ContactComponent} from "./contact.component";
import {ContactService} from "./contact.service";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [
        AwesomePipe,
        ContactComponent,
        HighlightDirective
    ],
    exports: [ContactComponent],
    providers: [ ContactService ]
})
export class ContactModule {}