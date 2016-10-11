import {Directive, Renderer, ElementRef} from "@angular/core";
@Directive({
    selector: '[myHighlight]' // The CSS selector for an **attribute** is the attribute name in square brackets.
})
export class HighlightDirective {

    constructor(renderer: Renderer, el: ElementRef) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gold');

        console.log(`* AppRoot highlight called for ${el.nativeElement.tagName}`);
    }

}