import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeyboardComponent } from './keyboard/keyboard.component';
import {MatIconModule} from '@angular/material/icon';
import { MatIconRegistryModule } from './mat-icon.registry.module';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatIconRegistryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
