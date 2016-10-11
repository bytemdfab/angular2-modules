import {Component, Input} from "@angular/core";

@Component({
    selector: 'app-title',
    template: '<h1 myHighlight>{{title}} {{subtitle}}</h1>'
})
export class TitleComponent {
    @Input() subtitle = '';
    title = 'Angular Modules'
}