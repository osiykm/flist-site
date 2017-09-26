import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import {ROUTING} from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
