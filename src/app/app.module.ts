import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/PageComponents/footer/footer.component';
import { HeaderComponent } from './components/PageComponents/header/header.component';
import { BackButtonComponent } from './components/PageComponents/back-button/back-button.component';

@NgModule({
  declarations: [
  
    MainComponent,
       FooterComponent,
       HeaderComponent,
       BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
