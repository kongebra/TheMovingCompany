import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewComponent } from './order/new/new.component';
import { UpdateComponent } from './order/update/update.component';
import { AllComponent } from './order/all/all.component';
import { SingleComponent } from './order/single/single.component';
import { AppRoutingModule } from './app-routing.module';
import { EnumToArrayPipe } from './order/enum-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    UpdateComponent,
    AllComponent,
    SingleComponent,
    EnumToArrayPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
