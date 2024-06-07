import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  @Input() collapsed:boolean =false;
  @Input() screenWidth:number =0

getBodyClass():string {
let style = ''
if(this.collapsed && this.screenWidth > 768)
  {
    style='body-trimmed';
  }
  else if (this.collapsed && this.screenWidth <=768 && this.screenWidth >0)
  {
    style='body-md-screen';
  }

  return style;
}

}
