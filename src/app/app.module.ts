import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { CancelService } from './cancelservices/cancel.service';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        AnimationComponent
    ],
    providers: [
        CancelService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
