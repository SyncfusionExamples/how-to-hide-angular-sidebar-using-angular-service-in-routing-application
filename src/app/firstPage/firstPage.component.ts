import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './firstPage.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FirstPageComponent {
  @ViewChild('firstsidebar')
  public firstside: SidebarComponent;
  onCreated() {
    if (this.firstside.element.classList.contains("e-hidden")) {
      this.firstside.element.classList.remove("e-hidden");
    }
  }
  closeClick() {
    this.firstside.hide();
  }
}