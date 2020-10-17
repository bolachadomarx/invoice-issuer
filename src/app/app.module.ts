import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { IssuerComponent } from './issuer/issuer.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [AppComponent, IssuerComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
