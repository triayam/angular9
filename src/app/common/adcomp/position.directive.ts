import { Directive, ViewContainerRef, TemplateRef , Input } from "@angular/core";
//import { Directive , ViewContainerRef  } from '@angular/core';

@Directive({

    selector: '[positionHost]',

})
export class PositionDirective {
	private hasView = false;
	
    constructor(private templateRef: TemplateRef<any> , public viewContainerRef: ViewContainerRef) {
		console.log("Position Directive:");
	}
	
   @Input() set positionHost(condition: boolean) {
    if (!condition && !this.hasView) {
       this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
      console.log("Position Directive: hasView true");
    } else if (condition && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
      console.log("Position Directive: hasView False");
    }
  }
}