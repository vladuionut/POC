import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DataModelService } from './data-model.service';
import { BroadcasterService } from './broadcaster.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormValidationService } from './form-validation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule, ReactiveFormsModule
  ],
  providers: [DataModelService, BroadcasterService,FormValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
