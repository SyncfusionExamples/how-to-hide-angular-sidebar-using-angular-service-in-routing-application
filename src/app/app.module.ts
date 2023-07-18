import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './firstPage/firstPage.component';
import { SecondPageComponent } from './secondPage/secondPage.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule
  ],
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }