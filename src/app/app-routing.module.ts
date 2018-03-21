import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutUsComponent} from './aboutus/aboutus.component'
import {WorkoutsComponent} from './workouts/workouts.component';
import { HomeComponent } from './home/home.component';

export const route:Routes = [
{path:'',pathMatch:'full', redirectTo:'home'},
{path:'home',component: HomeComponent},
{path:'aboutus',component: AboutUsComponent},
{path:'workout',component: WorkoutsComponent},
];

@NgModule({
exports: [RouterModule],
imports: [RouterModule.forRoot(route)]
})

export class AppRoutingModule{};

export const RoutableComponents= [
AboutUsComponent,
WorkoutsComponent,
HomeComponent,
];