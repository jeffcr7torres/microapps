import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {KSecurityModule, UserService} from '@ec.com.smx/kng-components-v2/k-security'
import { CorpService } from '@ec.com.smx/kng-components-v2/k-common/k-services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KSecurityModule,
  ],
  providers: [UserService, CorpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
