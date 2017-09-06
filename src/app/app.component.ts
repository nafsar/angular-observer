import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CancelService } from './cancelservices/cancel.service';

@Component({
   
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {
    animation: any;
    subscription: Subscription;

    constructor(private cancelService: CancelService) {
        
        this.subscription = this.cancelService.locateAnimation().subscribe(animation => { this.animation = animation; });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
