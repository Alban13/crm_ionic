import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ModeleModule } from './modele/modele.module';


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ModeleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
