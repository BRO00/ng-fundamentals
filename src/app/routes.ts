import { Routes } from '@angular/router';
import {
    CreateEventComponent,
    EventDetailsComponent,
    EventsListComponent,
    EventRouteActivator,
} from './events/index';
import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, 
        canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent,
        canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]