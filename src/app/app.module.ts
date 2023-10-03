import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { SocialsComponent } from './components/socials/socials.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NgOptimizedImage } from "@angular/common";
import { NgxCursorModule } from "ngx-cursor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    KnowledgeComponent,
    SocialsComponent,
    ProjectsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    NgxCursorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
