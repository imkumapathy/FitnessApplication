import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkoutSetsService } from './workoutSets.services';
import { Set, Excercise } from '../shared/objectDefinitions';
import { GroupByPipe } from '../shared/groupBy.pipe';
import { ExcerciseService } from '../shared-services/excercise.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html'
})
export class DairyComponent implements OnInit {
  private sets: Array<Set> = new Array<Set>();
  private selectedDate;
  private selectedSets = new Array<Set>();
  private allExcercies = new Array<Excercise>();
  private selectedItems;
  constructor(private workoutSetsService: WorkoutSetsService, private excerciseService: ExcerciseService) { }

  @ViewChild(GroupByPipe) filterComponent: GroupByPipe;
  ngOnInit() {
    this.selectedDate = new Date();
    this.getMySets();

  }

  getMySets() {
    this.workoutSetsService.getMySets().subscribe((sets) => {
      this.sets = sets;
      this.selectSetsBasedOnDate();
      this.getAllExcercises();
    },
      (error => console.log(error)));
  }

  private getAllExcercises() {
    this.excerciseService.getAllExcercises().subscribe(
      (response => {
        this.allExcercies = response;
        this.updateSelectedDropItems();
        console.log(response);
      }),
      (error => console.log(error)));
  }

  updateSelectedDropItems() {
    this.selectedItems = this.allExcercies.filter(e => this.selectedSets.map(m => m.excerciseId).includes(e.id));
  }

  isDateSelected(date) {
    if (this.selectSetsBasedOnDateTime(date.day, date.month, date.year).length > 0) { return true };
    return false;
  }

  onDateSelected() {
    console.log("date selected: " + this.selectedDate);
    this.selectSetsBasedOnDate();
  }

  selectSetsBasedOnDateTime(dayOfMonth, month, year) {


    let filteredSets = this.sets.filter(set => {
      let setDate = new Date(set.date);
      if (setDate.getDate() == dayOfMonth &&
        setDate.getMonth() == month &&
        setDate.getFullYear() == year) {
        return set;
      }
    });

    return filteredSets;
  }

  selectSetsBasedOnDate() {
    if (this.selectedDate) {

      let selectedDayOfMonth = this.selectedDate.getDate();
      let selectedMonth = this.selectedDate.getMonth();
      let selectedYear = this.selectedDate.getFullYear();

      this.selectedSets = this.selectSetsBasedOnDateTime(selectedDayOfMonth, selectedMonth, selectedYear);
      this.updateSelectedDropItems();
      console.log("selected:" + this.selectedSets);
    }
  }

  onClicked(value){
    console.log("clciked:" + value);
  }

}
