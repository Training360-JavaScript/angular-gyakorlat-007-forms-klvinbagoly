import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  event: Event = new Event();
  
  constructor(private eventService: EventService,
    private route: ActivatedRoute
    ) {
      console.log(this.event)
    }
    
    ngOnInit(): void {
    this.route.params.subscribe({
      next: params => {console.log(params);
        this.eventService.get(params['id']).subscribe({
        next: ev => {console.log(ev);
          this.event = ev || new Event()}
      })}
    })


  }

  onUpdate(eventForm: NgForm): void {
    this.eventService.update(eventForm.value).subscribe(
      event => console.log(event)
    )
  }

}
