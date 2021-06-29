import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidationsModule } from '@ec.com.smx/kng-components-v2/k-common/k-validations';
import { DirectivesModule } from '@ec.com.smx/kng-components-v2/k-common/k-directives';
import { KMessageModule } from '@ec.com.smx/kng-components-v2/k-common/k-message';
import { KHttpInterceptorModule } from '@ec.com.smx/kng-components-v2/k-common/k-http-interceptor';
import { KSecurityModule, UserService } from '@ec.com.smx/kng-components-v2/k-security';
import { KLayoutModule } from '@ec.com.smx/kng-components-v2/k-layout';

import { SampleService } from './services/sample.service';

import { CorpService } from '@ec.com.smx/kng-components-v2/k-common/k-services';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { LifeCycles, registerApplication, start } from 'single-spa';

@NgModule({
  declarations: [AppComponent, AppSidebarComponent, AppHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    KSecurityModule.forRoot({
      appVersion: '1.0.0',
      systemId: 'BASE',
    }),
  ],
  providers: [SampleService, UserService, CorpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
start();

registerApplication({
  name: '@kruger/app-header',
  app: (): Promise<LifeCycles> => (window as any).System.import('@kruger/app-header'),
  activeWhen: ['/'],
});

registerApplication({
  name: '@kruger/app-content',
  app: (): Promise<LifeCycles> => (window as any).System.import('@kruger/app-content'),
  activeWhen: ['/'],
});


registerApplication({
  name: '@kruger/app-sidebar',
  app: (): Promise<LifeCycles> => (window as any).System.import('@kruger/app-sidebar'),
  activeWhen: ['/'],
});




