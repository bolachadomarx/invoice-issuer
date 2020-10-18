import { IssuerService } from './_service/issuer.service'
import { MaterialModule } from './material.module'
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { IssuerComponent } from './issuer/issuer.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent, IssuerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [IssuerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
