import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import {
  CreateEventComponent,
  EventsListComponent,
  EventRouteActivator,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,

} from './events/index'
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivator,
    ToastrService, 
    {
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) {
    return window.confirm(`You have not saved this event, 
    do you really want to cancel`)
  } else {
    return true
  }
}
