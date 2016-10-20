import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf }       from '@angular/core';

import {UserService} from "./user.service";
import {TitleComponent} from "./title.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ TitleComponent ],
    exports: [ TitleComponent ],
    providers: [ UserService ]
})
export class CoreModule {}