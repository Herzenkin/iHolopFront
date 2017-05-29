import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdInputModule, MdChipsModule, MdGridListModule, MdButtonModule, MdCardModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './services/inmemory.service';

import { AppComponent } from './app.component';
import { HolopComponent } from './holop/holop.component';
import { ListComponent } from './list/list.component';
import { CounterComponent } from './counter/counter.component';
import { HolopService } from './services/holop.service';

@NgModule({
  declarations: [
    AppComponent,
    HolopComponent,
    ListComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryService),
    //Material Design modules below
    MdInputModule,
    MdChipsModule,
    MdGridListModule,
    MdButtonModule,
    MdCardModule,
    NoopAnimationsModule
  ],
  providers: [HolopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
