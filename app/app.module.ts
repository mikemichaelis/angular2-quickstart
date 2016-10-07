import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import {XSDLibModule} from 'xsd-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2BootstrapModule,
    XSDLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}