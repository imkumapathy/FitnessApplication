import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {DairyRoutableComponents,DairyRoutingModule} from './dairy-routing.module';
import { DairyComponent } from './dairy.component';
import {CalendarModule} from 'primeng/calendar';
import {DataTableModule} from 'primeng/datatable';
import {DataGridModule} from 'primeng/datagrid';
import {PanelModule} from 'primeng/panel';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';


import {SharedModule} from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,FormsModule,CalendarModule, SharedModule,DataTableModule,DataGridModule,PanelModule,
    AngularMultiSelectModule,DairyRoutingModule
    
  ],
  declarations: [DairyRoutableComponents],
  providers:[]
})
export class DairyModule { }
