import { Component, OnInit } from '@angular/core';
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
  
  constructor(private eService: EventService,
    private route: ActivatedRoute
    ) {
      console.log(this.event)
      this.route.params.subscribe({
        next: params => {console.log(params);
          this.eService.get(params['id']).subscribe({
          next: ev => {console.log(ev);
            this.event = ev || new Event()}
        })}
      })
     }

  ngOnInit(): void {
  }

  onUpdate(eventForm: NgForm){
    this.eService.update(eventForm.value)
  }

}
