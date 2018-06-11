import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewListingComponent } from './new-listing/new-listing.component';
import { NewServiceService } from './services/new-service.service';
import { AddListingComponent } from './add-listing/add-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    NewListingComponent,
    AddListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
