import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import {KSecurityModule, UserService} from '@ec.com.smx/kng-components-v2/k-security'
import { CorpService } from '@ec.com.smx/kng-components-v2/k-common/k-services';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    KSecurityModule
    
  ],
  providers: [UserService, CorpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
