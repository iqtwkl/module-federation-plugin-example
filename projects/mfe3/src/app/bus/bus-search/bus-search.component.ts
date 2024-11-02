import {Component, Input} from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { SharedLibService } from 'shared-lib';


@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html'
})
export class BusSearchComponent {
  sharedData!: string;

  constructor(private service: AuthLibService, private sharedDataService: SharedLibService) {
    console.log('User Name', this.service.user);
  }

  ngOnInit() {
    this.sharedDataService.sharedData$.subscribe((data) => {
      this.sharedData = data;
      console.log('Received data in BusSearchComponent:', data);
    });
  }
}
