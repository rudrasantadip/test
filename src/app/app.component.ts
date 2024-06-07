import { Component } from '@angular/core';
import { SideNavtoggle } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adcomsys-home';
  isNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data:SideNavtoggle)
  {
    this.screenWidth=data.screenWidth;
    this.isNavCollapsed= data.collapsed;
  }
}
