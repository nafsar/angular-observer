import { Component } from '@angular/core';

import { CancelService } from '../cancelservices/cancel.service';

@Component({
   
    templateUrl: 'animation.component.html',
    styleUrls: ['./animation.cmponent.css']
    
})

export class AnimationComponent {
    demo: string ='Angular Observable demo';
    cancel: string ='Click cancel to remove animation';
    constructor(private cancelService: CancelService) {}
    
    playAnimation() {
        
       let rt = document.getElementById('notification').className += ' active';
       console.log('rt='+rt);
       
        this.cancelService.startAnimation(this.cancel);
    }

    cancelAnimation() {

        let io= document.getElementById('notification').classList.remove('active');
        console.log(io);
        this.cancelService.cancelAnimation();
    }
}