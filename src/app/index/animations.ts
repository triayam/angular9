import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [

    trigger('slideInOut', [
      state('in', style({
			width: '60px'
          // transform:  'translateX(0)' /*'translate3d(0, 0, 0)' */
		 ,'visibility': 'visible',
		 opacity: 1
      })),
      state('out', style({
	      width: '2px'
         //transform: 'translateX(100%)'  /*'translate3d(100%, 0, 0)' */
		,'visibility': 'hidden',
		opacity: 0
      })),
       transition('in => out',  animate('250ms ease-in-out')),
      transition('out => in', animate('250ms ease-in-out')),
    ])
  
]



/*
 ---- woring 
 transition('in => out', [group([
            animate('400ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('600ms ease-in-out', style({
                'max-width': '0px'
            })),
            animate('700ms ease-in-out', style({
                'visibility': 'hidden'
            }))
        ]
        )]), 
	   
      transition('out => in',  [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('600ms ease-in-out', style({
                'max-width': '50px'
            })),
            animate('800ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
------ working ----- 
transition('in => out',[ style ({ transform : 'translateX(-100%)' , opacity: 1, 'visibility': 'hidden' }), 
	  animate('500ms', style({transform: 'translateX(100%)', opacity: 0}) )]), 
	   
      transition('out => in', [ style ({ transform : 'translateX(100%)' , opacity: 0,  'visibility': 'visible'}),
   	  animate('500ms', style({transform: 'translateX(0)', opacity: 1} ))])

--------------------------

transition('in => out',[ style ({ transform : 'translateX(-100%)' , opacity: 1, 'visibility': 'visible' }), 
	  animate('500ms', style({transform: 'translateX(100%)', opacity: 0}) )]), 
	   
      transition('out => in', [ style ({ transform : 'translateX(100%)' , opacity: 0,  'visibility': 'hidden'}),
   	  animate('500ms', style({transform: 'translateX(0)', opacity: 1} ))])
	  

https://www.thecodecampus.de/blog/angular-2-animate-creating-sliding-side-navigation/
trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
	
 trigger('slideInOut', [
	    state('in', style({
            'max-width': '50px', 'opacity': '1', 'visibility': 'visible',
        })),
        state('out', style({
            'max-width': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        transition('in => out', [group([
            animate('400ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('600ms ease-in-out', style({
                'max-width': '0px'
            })),
            animate('700ms ease-in-out', style({
                'visibility': 'hidden'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('600ms ease-in-out', style({
                'max-width': '50px'
            })),
            animate('800ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ])


 trigger('slideInOut', [
	 
	
        state('in', style({
            'max-width': '50px', 'opacity': '1', 'visibility': 'visible',
        })),
        state('out', style({
            'max-width': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        transition('in => out', [group([
            animate('400ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('600ms ease-in-out', style({
                'max-width': '0px'
            })),
            animate('700ms ease-in-out', style({
                'visibility': 'hidden'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('600ms ease-in-out', style({
                'max-width': '50px'
            })),
            animate('800ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ])




trigger('slideInOut', [
        state('in', style({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
        })),
        state('out', style({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        transition('in => out', [group([
            animate('400ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '0px'
            })),
            animate('700ms ease-in-out', style({
                'visibility': 'hidden'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '500px'
            })),
            animate('800ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ]),
--------------------------
 [group([
            animate('400ms ease-in-out', style({
                'width': '40px'
            })),
            animate('600ms ease-in-out', style({
                'width': '20px'
            })),
            animate('700ms ease-in-out', style({
			    'width': '20px', 
                'visibility': 'hidden'
            }))
        ]
	
	
*/