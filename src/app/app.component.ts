import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import data from '../assets/input.json';
import { CalendarOptions } from '@fullcalendar/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin],
    initialView: 'timeGridWeek',
    slotMinTime: '09:00', // Heure de début
    slotMaxTime: '22:00', // Heure de fin
  };

  viewDate:Date=new Date();

  events:any[]=[]
  constructor(){

    this.events = data.map((event: any) => {
      const startTimeParts = event.start.split(':');
      const startHour = parseInt(startTimeParts[0], 10);
      const startMinute = parseInt(startTimeParts[1], 10);
      const startDate = new Date();
      startDate.setHours(startHour, startMinute, 0, 0);

      const endDate = new Date(startDate.getTime() + event.duration * 60000);

      return {
        id: event.id.toString(),
        start: startDate,
        end: endDate,
        title: 'Événement',
        color: 'blue', // Couleur de fond de l'événement
          border: '1px solid black' // Bordure de l'événement
      };
    }); 
  }
  
}
