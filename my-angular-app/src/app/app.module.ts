import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { FormsComponent } from './forms/forms.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './shared/summary.pipe';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { DirectivesComponent } from './directives/directives.component';
import { TransformDirective } from './shared/directives/transform.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    FormsComponent,
    ProjectComponent,
    HomeComponent,
    SummaryPipe,
    ViewcontactComponent,
    DirectivesComponent,
    TransformDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
