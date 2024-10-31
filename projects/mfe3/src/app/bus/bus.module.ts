import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { RouterModule } from '@angular/router';
import { BUS_ROUTES } from './bus.routes';
import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    SharedLibModule,
    RouterModule.forChild(BUS_ROUTES)
  ],
  declarations: [
    BusSearchComponent
  ]
})
export class BusModule { }
