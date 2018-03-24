import { Component, OnInit } from '@angular/core';
import { WorkoutSetsService } from './workoutSets.services';
import { Set } from '../shared/objectDefinitions';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html'
})
export class DairyComponent implements OnInit {
  private sets: Array<Set>= new Array<Set>();
  private selectedDate;
  private selectedSets;

  constructor(private workoutSetsService: WorkoutSetsService) { }

  ngOnInit() {
    this.selectedDate = new Date();
    let today = new Date();

    var dd = today.getDate();
    var mm = today.getMonth();

    console.log(today);
    console.log(dd + ":::" + mm)
    this.getMySets();
  }

  getMySets() {
    this.workoutSetsService.getMySets().subscribe((sets) => {
      this.sets = sets;
      this.selectSetsBasedOnDate();
    },
      (error => console.log(error)));
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

      console.log("selected:" + this.selectedSets);
    }
  }

}
