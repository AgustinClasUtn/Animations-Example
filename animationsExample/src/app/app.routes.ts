import { Routes } from '@angular/router';
import { AnimationComponent } from './components/animation/animation.component';
import { AnimationListComponent } from './components/animation-list/animation-list.component';
import { Routing1Component } from './components/routing1/routing1.component';
import { Routing2Component } from './components/routing2/routing2.component';

export const routes: Routes = [
    { path: "animation", component: AnimationComponent, data: { animation: 'animation' }},
    { path: "listAnimation", component: AnimationListComponent, data: { animation: 'listAnimation' } },
    { path: "routingUno", component: Routing1Component, data: { animation: 'routingUno' } },
    { path: "routingDos", component: Routing2Component, data: { animation: 'routingDos' } },
];
