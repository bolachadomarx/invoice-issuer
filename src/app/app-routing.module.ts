import { IssuerComponent } from './issuer/issuer.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'

const routes: Routes = [
  {
    component: IssuerComponent,
    path: 'issuer',
  },
]
@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
