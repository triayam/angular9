import { PositionComponent } from './adcomp/position.component'
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        PositionComponent
    ],
    exports:  [ PositionComponent
    ]
})
export class SharedModule { };