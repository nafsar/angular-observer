import { Routes, RouterModule } from '@angular/router';

import { AnimationComponent } from './animation/animation.component';

const appRoutes: Routes = [
    { path: '', component: AnimationComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);