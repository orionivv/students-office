import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';
import {CookieService} from 'ngx-cookie-service';
import {OfficeModule} from './office/office.module';
import {SubjectSelectionModule} from './subject-selection/subject-selection.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AppRoutingModule,

    CoreModule,
    AuthModule,
    OfficeModule,
    SubjectSelectionModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
