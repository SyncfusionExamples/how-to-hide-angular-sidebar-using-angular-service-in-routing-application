import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './secondPage.component.html'
})
export class SecondPageComponent {
  @ViewChild('secondsidebar')
  public secondsidebar: SidebarComponent;
  onCreated() {
    if (this.secondsidebar.element.classList.contains("e-hidden")) {
      this.secondsidebar.element.classList.remove("e-hidden");
    }
  }
  closeClick() {
    this.secondsidebar.hide();
  
  }
}