import { Routes } from "@angular/router";
import { ShuttleSearchComponent } from "./shuttle-search/shuttle-search.component";


export const SHUTTLE_ROUTES: Routes = [
    {
        path: 'shuttle-search',
        component: ShuttleSearchComponent,
    }
]