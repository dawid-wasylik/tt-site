import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SocialBarComponent } from './components/social-bar/social-bar.component';
import { ToKnowComponent } from './components/to-know/to-know.component';
import { StructureComponent } from './components/structure/structure.component';
import { AboutPresidentComponent } from './components/about-president/about-president.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { BestProjectsComponent } from './components/best-projects/best-projects.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { LocationComponent } from './components/location/location.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    SocialBarComponent,
    ToKnowComponent,
    StructureComponent,
    AboutPresidentComponent,
    WhatWeDoComponent,
    BestProjectsComponent,
    SponsorsComponent,
    LocationComponent,
    ContactComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
