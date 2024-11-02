import {Component, EventEmitter, Input, Output} from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { SharedLibService } from 'shared-lib';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {
  counter: number= 0;
  @Input() defaultFrom: string = '';
  @Input() defaultTo: string = '';

  constructor(private service: AuthLibService, private sharedLibService: SharedLibService) {
    console.log('User Name', this.service.user);
  }

  ngOnInit() {
    console.log("Received variable in FlightsSearchComponent:", this.defaultFrom);
    console.log("Received variable in FlightsSearchComponent:", this.defaultTo);
  }

  sendData() {
    this.sharedLibService.setData(`Hello from Flights! ${this.counter}`);
    this.counter++;
  }
}
