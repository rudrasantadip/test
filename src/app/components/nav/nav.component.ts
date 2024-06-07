import { Component, EventEmitter, Output } from '@angular/core';

export const navBarData =[
  {
    routerLink:'home',
    icon: 'home',
    label:'Home'
  },
  {
    routerLink:'about',
    icon: 'info',
    label:'About'
  },
  {
    routerLink:'events',
    icon: 'trophy',
    label:'Events'
  },
  {
    routerLink:'team',
    icon: 'diversity_3',
    label:'Team'
  },
  {
    routerLink:'partners',
    icon: 'handshake',
    label:'Partners'
  }
]
export interface SideNavtoggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {



  @Output() onToggleSideNav:EventEmitter<SideNavtoggle> = new EventEmitter();
  collapsed:boolean=true;
  navData =navBarData;
  screenWidth:number=0;

closeSideNav() {
this.collapsed=false;
this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
}


toggleCollapse() 
{
  this.collapsed=!this.collapsed;
  this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});

}

}
