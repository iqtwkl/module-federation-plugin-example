import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('mfe1Container', { read: ViewContainerRef, static: true }) mfe1Container!: ViewContainerRef;
  @ViewChild('mfe3Container', { read: ViewContainerRef, static: true }) mfe3Container!: ViewContainerRef;

  async ngAfterViewInit() {
    // Load and attach mfe1 module
    const mfe1 = await loadRemoteModule({
      type: 'manifest',
      remoteName: 'mfe1',
      exposedModule: './FlightsSearchComponent'
    });
    const mfe1Component = mfe1['FlightsSearchComponent'];
    this.mfe1Container.createComponent(mfe1Component);

    // Load and attach mfe3 module
    const mfe3 = await loadRemoteModule({
      type: 'manifest',
      remoteName: 'mfe3',
      exposedModule: './BusSearchComponent'
    });
    const mfe3Component = mfe3['BusSearchComponent'];
    this.mfe3Container.createComponent(mfe3Component);
  }
}
