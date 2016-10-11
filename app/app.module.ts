import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {HighlightDirective} from "./highlight.directive";
import {TitleComponent} from "./title.component";

@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        AppComponent,
        TitleComponent,
        HighlightDirective
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}