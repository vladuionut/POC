import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DataModelService } from './data-model.service';
import { BroadcasterService } from './broadcaster.service';

@NgModule({ 
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [DataModelService,BroadcasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
