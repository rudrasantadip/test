import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events = [
    {
      date: '2024-01-01',
      title: 'New Year',
      description: 'Celebration of the New Year.',
      image: 'assets/images/flutter.jpeg',
    },
    {
      date: '2024-02-14',
      title: "Valentine's Day",
      description: 'Day of love and friendship.',
      image: 'assets/images/poster.jpeg',
    },
    {
      date: '2024-12-25',
      title: 'Christmas',
      description: 'Celebration of Christmas.',
      image: 'assets/images/quiz.jpeg',
    },
    {
      date: '2024-12-25',
      title: 'Christmas',
      description: 'Celebration of Christmas.',
      image: 'assets/images/ui_ux.jpeg',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
