import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { FormsComponent } from './forms/forms.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './shared/summary.pipe';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    FormsComponent,
    ProjectComponent,
    HomeComponent,
    SummaryPipe,
    ViewcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
