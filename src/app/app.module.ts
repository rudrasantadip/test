import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { TeamComponent } from './components/team/team.component';
import { PartnersComponent } from './components/partners/partners.component';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    TeamComponent,
    PartnersComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
