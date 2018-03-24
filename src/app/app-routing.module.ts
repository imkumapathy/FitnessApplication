import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutUsComponent} from './aboutus/aboutus.component'
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';

export const route:Routes = [
{path:'',pathMatch:'full', redirectTo:'home'},
{path:'home',component: HomeComponent},
{path:'aboutus',component: AboutUsComponent},
{path:'workout',loadChildren:'./workouts/workouts.module#WorkoutsModule'},
{path:'dairy',loadChildren:'./dairy/dairy.module#DairyModule'},

{path:'history', component:HistoryComponent}
];

@NgModule({
exports: [RouterModule],
imports: [RouterModule.forRoot(route)]
})

export class AppRoutingModule{};

export const RoutableComponents= [
AboutUsComponent,
HomeComponent,
HistoryComponent
];