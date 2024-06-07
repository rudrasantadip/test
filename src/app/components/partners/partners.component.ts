import { Component } from '@angular/core';


export interface Partner
{
  pId:number;
  logoUrl:string;
}

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
   //Add community partner images here
   communityPartners:Partner[]=[
    {
      pId:1,
      logoUrl:'/assets/images/csi.jpeg'
    },
    {
      pId:2,
      logoUrl:'/assets/images/gfg.jpeg'
    }
    , 
    {
      pId:3,
      logoUrl:'/assets/images/iete.jpeg'
    },
    {
      pId:4,
      logoUrl:'/assets/images/pragya.jpeg'
    }
  ]

  // add technical partner images here
  technicalPartners:Partner[] = [
    {
      pId:1,
      logoUrl:'/assets/images/gfg-bg-less.png'
    }
  ]
}
