import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AutoComponent } from './auto/auto.component';
import { ConcessionariaComponent } from './concessionaria/concessionaria.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AutoComponent, ConcessionariaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
