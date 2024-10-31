import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SHUTTLE_ROUTES } from "./shuttle.router";
import { RouterModule } from "@angular/router";
import { ShuttleSearchComponent } from "./shuttle-search/shuttle-search.component";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SHUTTLE_ROUTES)
    ],
    declarations: [
        ShuttleSearchComponent
    ]
})
export class ShuttleModule {

}