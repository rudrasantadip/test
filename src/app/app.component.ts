import { Component, OnInit } from '@angular/core';
import { SideNavtoggle } from './components/nav/nav.component';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'adcomsys-home';
  isNavCollapsed = false;
  screenWidth = 0;

  constructor(private ngxService:NgxUiLoaderService){}

  onToggleSideNav(data:SideNavtoggle)
  {
    this.screenWidth=data.screenWidth;
    this.isNavCollapsed= data.collapsed;
  }

  ngOnInit() {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 3000);
}
}
