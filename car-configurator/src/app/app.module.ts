import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyPipePipe } from './my-pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyInpurePipePipe } from './my-inpure-pipe.pipe';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyInputComponentComponent } from './my-input-component/my-input-component.component';
import { MyOutputComponentComponent } from './my-output-component/my-output-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MyPipePipe,
    MyInpurePipePipe,
    MyComponentComponent,
    MyInputComponentComponent,
    MyOutputComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
