import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideRouter, Route} from '@angular/router';
import {HomeComponent} from './app/home/home.component';

const routes: Route[] = [
  {path: '', component: HomeComponent}
]
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
