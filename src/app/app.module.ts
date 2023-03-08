import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select'
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ClockComponent } from './pages/home/features/clock/clock.component';
import {HttpClientModule} from '@angular/common/http';
import { MultiSelectComponent } from './pages/home/features/multi-select/multi-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClockComponent,
    MultiSelectComponent
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatSelectModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
