import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {DairyRoutableComponents,DairyRoutingModule} from './dairy-routing.module';
import { DairyComponent } from './dairy.component';
import { WorkoutSetsService } from './workoutSets.services';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  imports: [
    CommonModule,FormsModule,CalendarModule, DairyRoutingModule
  ],
  declarations: [DairyRoutableComponents],
  providers:[WorkoutSetsService]
})
export class DairyModule { }
