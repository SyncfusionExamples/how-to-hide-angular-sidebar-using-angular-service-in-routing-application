import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

// importing Sidebar components from the ej2-angular-navigations package
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
  @ViewChild('sidebar')
  // Instance of the Sidebar in the main page
  public sidebarInstance: SidebarComponent;

  // The below variable will hold the URL of the navigation page when router event is triggered
  public urlValue: String;

  constructor(router: Router) {

    // registering router module in the component
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.urlValue = event.url;

        //Based on the routed URL, Sidebar in the main page will expand or collapse. 
        this.checkURL();
      }
    });
  }

  onCreated() {
    // This event will trigger whenever a Sidebar in the main page is rendered.
    if (this.sidebarInstance.element.classList.contains("e-hidden")) {
      this.sidebarInstance.element.classList.remove("e-hidden");
      this.checkURL();
    }
  }

  checkURL() {
    //Based on the routed URL, Sidebar in the main page will expand or collapse.
    (!this.urlValue || this.urlValue !== "/") ? this.sidebarInstance.hide() : this.sidebarInstance.show();
  }

  closeClick() {
    //On clicking the close icon, Sidebar will get collapsed
    this.sidebarInstance.hide();
  }

  ngAfterViewInit() {
    if (!this.urlValue || this.urlValue !== "/") {
      this.sidebarInstance.hide();
    }
  }
}