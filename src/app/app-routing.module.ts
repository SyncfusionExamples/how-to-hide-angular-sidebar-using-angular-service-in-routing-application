import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent }   from './firstPage/firstPage.component';
import { SecondPageComponent }      from './secondPage/secondPage.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'firstPage', component: FirstPageComponent },
  { path: 'secondPage', component: SecondPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}