import { Component , Input, OnInit, ViewChild, ComponentFactoryResolver ,  AfterViewInit, OnDestroy } from '@angular/core'

import { PositionDirective } from '../../common/adcomp/position.directive'

import { PositionItem } from '../../common/adcomp/position-item'

import { JobPositionComponent } from '../advert/job-position.component'
import { PositionComponent } from '../../common/adcomp/position.component';
import { PositionService } from '../advert/position-service';

@Component({
 
selector : 'app-job-banner',
 template: ` <div class="job-banner-example">
            <h3> Positings </h3>
            <ng-template positionHost> </ng-template>
            </div>
            `,
 styleUrls: [ './job-banner.component.css'],
 
})
export class JobBannerComponent implements OnInit , OnDestroy ,  AfterViewInit{ 

    @Input() jobs : PositionItem[];

    currentJobIndex = -1 ;
    @ViewChild(PositionDirective, {static :false }) positionHost!: PositionDirective;
    interval : any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private adService: PositionService) {

      console.log("JobBanner Commponenet constructed")
    }

    ngOnInit() {
        this.jobs = this.adService.getPositions();
       
    }

    ngAfterViewInit() {
      console.log('on after view init', this.positionHost);

      this.loadComponent();

      this.getPosition();
      // this returns null
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

        const viewContainerRef = this.positionHost.viewContainerRef;

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