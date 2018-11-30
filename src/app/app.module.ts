import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToggleButtonsComponent } from './toggle-buttons/toggle-buttons.component';
import { TitleComponent } from './title/title.component';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { DetailedComponent } from './detailed/detailed.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToggleButtonsComponent,
    TitleComponent,
    DetailedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
