import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from '@what3words/angular-components';
const loadConfig = () => {
  return () => {};
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: loadConfig,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
