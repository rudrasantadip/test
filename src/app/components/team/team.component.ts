import { Component } from '@angular/core';

export interface Member{
  name:string;
  desig:string;
  image:string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {


  coreMembers:Member[]=[
    {
      name: 'Diptadip Biswas',
      desig: '',
      image: 'assets/images/members/diptadip_biswas.jpg'
    },
    {
      name: 'Diptayan Manna',
      desig: '',
      image: 'assets/images/members/diptayan.jpeg'
    },
    {
      name: 'Soumik Das',
      desig: '',
      image: 'assets/images/members/soumik.jpg'
    },
    {
      name: 'Priyam Dutta',
      desig: '',
      image: 'assets/images/members/priyam_dutta.jpg'
    },
    {
      name: 'Puyabrata Guchhait',
      desig: '',
      image: 'assets/images/members/punyabrata_guchait.jpg'
    },
    {
      name: 'Sayan Das',
      desig: '',
      image: 'assets/images/members/sayan.jpg'
    },
    {
      name: 'Sayan Ghosh',
      desig: '',
      image: 'assets/images/members/sayan_ghosh.jpg'
    },
    {
      name: 'Samiran Jana',
      desig: '',
      image: 'assets/images/members/samiran.jpeg'
    },
    {
      name: 'Saikat Das',
      desig: '',
      image: 'assets/images/members/saikat.jpg'
    },
    {
      name: 'Sagar Bera',
      desig: '',
      image: 'assets/images/members/sagar_bera.jpg'
    },
    {
      name: 'Santadip Rudra',
      desig: '',
      image: 'assets/images/members/santadip.jpeg'
    },
    {
      name: 'Subhajit Dutta',
      desig: '',
      image: 'assets/images/members/subhajit_dutta.JPG'
    },
    {
      name: 'Sarbojit Poddar',
      desig: '',
      image: 'assets/images/members/sarbojit_poddar.jpg'
    },
    {
      name: 'Ayan Chaterjee',
      desig: '',
      image: 'assets/images/members/r.jpg'
    },
  ]

 
  coordinators:Member[]=[
   
    {
      name: 'Samrat Das',
      desig: '',
      image: 'assets/images/members/samrat_das.JPG'
    },
    {
      name: 'Prattay Chaterjee',
      desig: '',
      image: 'assets/images/members/pratay_chaterjee.jpeg'
    },
    {
      name: 'Chirag Gupta',
      desig: '',
      image: 'assets/images/members/chi.jpeg'
    },
    {
      name: 'Shayak Karan',
      desig: '',
      image: 'assets/images/members/sayak.jpeg'
    },
    {
      name: 'Anuran Bhowmik',
      desig: '',
      image: 'assets/images/members/anuran.jpeg'
    },
  ]

  taskForce:Member[]=[
    {
      name:'Saswata Mukherjee',
      desig:'Task Force',

      image:'/assets/images/members/saswata.jpeg'
    },
    {
      name:'Ayan Koley',
      desig:'Task Force',
      image:'/assets/images/members/joy_koley.jpg'
    },
    {
      name:'Mohit Sarkar',
      desig:'Task Force',
      image:'/assets/images/members/mohit_sarkar.jpeg'
    },
    {
      name:'Drisha Jana',
      desig:'Task Force',
      image:'/assets/images/members/drisha_jana.jpeg'
    },
    {
      name:'Reek Banerjee	',
      desig:'Task Force',
      image:'/assets/images/members/rik_banerjee.png'
    },
    {
      name:'Rajdeep Mondal',
      desig:'Task Force',
      image:'/assets/images/members/rajdeep_mondal.jpg'
    }
  ]


  volunteers:Member[]=[
    {
      name:'Ishita Mondal',
      desig:'Volunteer',
      image:'/assets/images/members/ishita_mondal.jpg'
    },
    {
      name:'Rishab Deb Paul',
      desig:'Volunteer',
      image:'/assets/images/members/rishab_deb_pal.png'
    },
    {
      name:'Anuja Roy',
      desig:'Volunteer',
      image:'/assets/images/members/anuja_roy.jpg'
    },
    {
      name:'Pratik Saha',
      desig:'Volunteer',
      image:'/assets/images/members/pratik_saha.jpg'
    },
    {
      name:'Ritika Das',
      desig:'Volunteer',
      image:'/assets/images/members/ritika_das.jpeg'
    },
    {
      name:'Diya Maji',
      desig:'Volunteer',
      image:'/assets/images/members/diya_maji.jpeg'
    },
    {
      name:'Disha Basak',
      desig:'Volunteer',
      image:'/assets/images/members/disha_basak.jpeg'
    },
  ]
}
