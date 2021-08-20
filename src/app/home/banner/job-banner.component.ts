import { Component , Input, OnInit, ViewChild, ComponentFactoryResolver ,  AfterViewInit, OnDestroy, TemplateRef, ViewChildren, QueryList } from '@angular/core'

import { PositionDirective } from '../../common/adcomp/position.directive'

import { PositionItem } from '../../common/adcomp/position-item'
import { Directive, ViewContainerRef } from "@angular/core";
import { JobPositionComponent } from '../advert/job-position.component'
import { PositionComponent } from '../../common/adcomp/position.component';
import { PositionService } from '../advert/position-service';

@Component({
 
selector : 'app-job-banner',
 template: ` <div class="job-banner-example">
            <h3> Positings </h3>
            <ng-template positionHost>
              <div #vRef>
			        <!-- dummy -->
              </div>
			   </ng-template>
            </div><!-- ng-template -->
			<ng-container *ngTemplateOutlet="positionHost"></ng-container>
            `,
 styleUrls: [ './job-banner.component.css'],
 
})
// https://www.w3schools.com/howto/howto_css_browser_window.asp
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_browser_window
// https://stackoverflow.com/questions/54783046/template-reference-variable-returns-undefined-inside-ng-template
// https://stackoverflow.com/questions/52446666/viewcontainerref-is-undefined-when-called-in-ngafterviewinit
export class JobBannerComponent implements OnInit , OnDestroy ,  AfterViewInit{ 

    @Input() jobs : PositionItem[];

    currentJobIndex = -1 ;
    @ViewChild(TemplateRef, {static :true }) positionHost!: PositionDirective;
    @ViewChild(ViewContainerRef, {static :true }) vRef!: PositionDirective;
    @ViewChildren('vRef', { read: ViewContainerRef }) containers: QueryList<ViewContainerRef>;
    interval : any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private adService: PositionService) {

      console.log("JobBanner Commponenet constructed")
    }

    ngOnInit() {
        this.jobs = this.adService.getPositions();
       
    }

    ngAfterViewInit() {
      console.log('on after view init', this.positionHost);
      if (this.containers.length > 0) {
        // The container already exists
        this.addComponent();
        console.log('container exists');
      };
      //this.loadComponent();

      this.getPosition();
      // this returns null
    }
    private addComponent() {
      const container = this.containers.first;
    
      const factory = this.componentFactoryResolver.resolveComponentFactory(PositionComponent);
      container.createComponent(factory);

    }

    ngOnDestroy(){
        clearInterval(this.interval)
        console.log("job banner component destroyed")
    }

    loadComponent () {
        if (this.jobs == undefined) return;
        this.currentJobIndex = (this.currentJobIndex +1) % this.jobs.length;
        const jobItem = this.jobs[this.currentJobIndex];

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(jobItem.component)

        const viewContainerRef = this.containers.first;
        //.clear()
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent<PositionComponent>(componentFactory);
  
        componentRef.instance.data = jobItem.data;

    }

    getPosition (){
      this.interval = setInterval( () => {
        this.loadComponent();
      }, 3000);

      console.log("loadcomponent invoked ")
    }


}