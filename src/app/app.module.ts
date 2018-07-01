import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {TodoDataService} from './todo-data.service';
import { AgGridExampleComponent } from './ag-grid-example/ag-grid-example.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AgGridExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    FormsModule,
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
