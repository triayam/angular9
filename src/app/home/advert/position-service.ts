import { Injectable } from '@angular/core'

import {PositionItem } from '../../common/adcomp/position-item'

import { JobPositionComponent } from './job-position.component'

 @Injectable({
    providedIn :"root"
 })
 export class PositionService {

    getPositions () {

        return [ 
            new PositionItem (JobPositionComponent, {
                 title : 'Spring Boot Closure ', 
                 client : 'Broadridge', 
                 experience : '4-3 years', 
                 payment : 'Not disclosed', 
                 location : 'Anywhere', 
                 posted : '1 day ago',  date : '21-01-2021', 
                        
                 tagged : 'none' , 
                    applicants : '12'  
             }), 

             new PositionItem (JobPositionComponent, {
                title : 'React Senior  ', 
                client : 'Gold Flims', 
                experience : '4-3 years', 
                payment : 'Not disclosed', 
                location : 'Calcutta', 
                posted : '3 day ago',  date : '11-01-2021', 
                tagged : 'none' , 
                   applicants : '12'  
            })


        ]
    }
 }

 /*
{{data.title}}
{{data.client}}
{{data.experience}}
{{data.payment}}
{{data.location}}
{{data.posted}}  {{data.date}}

{{data.tagged}}  {{data.applicants}} 



 */