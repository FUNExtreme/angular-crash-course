import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ConfiguratorComponent } from './components/configurator/configurator.component';
import { ConfiguratorStartComponent } from './components/configurator-start/configurator-start.component';
import { ConfiguratorOptionsComponent } from './components/configurator-options/configurator-options.component';
import { ConfiguratorSummaryComponent } from './components/configurator-summary/configurator-summary.component';
import { ConfiguratorItemComponent } from './components/configurator-item/configurator-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ConfiguratorComponent,
    ConfiguratorStartComponent,
    ConfiguratorOptionsComponent,
    ConfiguratorSummaryComponent,
    ConfiguratorItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
