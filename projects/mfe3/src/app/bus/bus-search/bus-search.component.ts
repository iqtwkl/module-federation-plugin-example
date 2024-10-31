import {Component} from '@angular/core';
import { AuthLibService } from 'auth-lib';


@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html'
})
export class BusSearchComponent {
  constructor(private service: AuthLibService) {
    console.log('User Name', this.service.user);
  }
}
