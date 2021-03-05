import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleProgressbarComponent } from './progress-bar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ExampleProgressbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/