import { Directive, ViewContainerRef } from "@angular/core";
//import { Directive , ViewContainerRef  } from '@angular/core';

@Directive({

    selector: '[positionHost]',

})
export class PositionDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}