import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component';
import { AlertComponent } from './alert/alert.component';
import { TictaktoeModule } from './tictaktoe/tictaktoe.module';

@NgModule({
  declarations: [
    AppComponent,
    WidgetOneComponent,
    WidgetTwoComponent,
    AlertComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, TictaktoeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
