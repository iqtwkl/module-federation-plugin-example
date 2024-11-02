// Di shell - home.component.ts
import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('mfe1Container', { read: ViewContainerRef, static: true }) mfe1Container!: ViewContainerRef;
  @ViewChild('mfe3Container', { read: ViewContainerRef, static: true }) mfe3Container!: ViewContainerRef;

  private sharedData = '';

  async ngAfterViewInit() {
    // Load and attach mfe1
    const mfe1 = await loadRemoteModule({
      type: 'manifest',
      remoteName: 'mfe1',
      exposedModule: './FlightsSearchComponent'
    });
    const flightSearchComponent = this.mfe1Container.createComponent(mfe1.FlightsSearchComponent) as any;
    flightSearchComponent.instance.defaultFrom = "CGK";
    flightSearchComponent.instance.defaultTo = "BDO";

    // Load and attach mfe3
    const mfe3 = await loadRemoteModule({
      type: 'manifest',
      remoteName: 'mfe3',
      exposedModule: './BusSearchComponent'
    });
    this.mfe3Container.createComponent(mfe3.BusSearchComponent) as any;
  }
}
