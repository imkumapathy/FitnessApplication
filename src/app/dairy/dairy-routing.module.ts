import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DairyComponent} from './dairy.component'

export const dairyRoute: Routes = [
    {
        path: '', component: DairyComponent      
    }
];

@NgModule({
exports: [RouterModule],
imports: [RouterModule.forChild(dairyRoute)]
})

export class DairyRoutingModule{};

export const DairyRoutableComponents= [
    DairyComponent
];