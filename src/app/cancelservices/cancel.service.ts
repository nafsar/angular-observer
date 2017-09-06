import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CancelService {
    private subject = new Subject<any>();

    startAnimation(animation: any) {
     this.subject.next({ text: animation });
    }

    cancelAnimation() {
        this.subject.next();
    }

    locateAnimation(): Observable<any> {
        return this.subject.asObservable();
    }
}