import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PizzaComponent } from './pizza/pizza.component';
import { FormsModule } from '@angular/forms';
import { mapKVPipe } from './pipes/mapKVPipe.pipes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PizzaComponent,
    mapKVPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    mapKVPipe
  ]
})
export class AppModule { }
