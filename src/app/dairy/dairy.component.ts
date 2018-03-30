import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { WorkoutSetsService } from '../shared-services/workoutSets.services';
import { Set, Excercise } from '../model/objectDefinitions';
import { GroupByPipe } from '../shared/groupBy.pipe';
import { ExcerciseNamePipe } from '../shared/excerciseName.pipe';

import { ExcerciseService } from '../shared-services/excercise.service';
import { MenuItem } from 'primeng/api';

import { AppState } from '../redux-state/appState';
import { MySetUpdateAction, CreateSetAction, UpdateSetAction, DeleteSetAction } from '../redux-state/actions/set.action';
import { UpdateExcercisesAction, GetExcercisesAction } from '../redux-state/actions/excercise.action';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../redux-state/appState';
import { stateReducer } from '../redux-state/reducers/set.reducers';
@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html'
})
export class DairyComponent implements OnInit, OnDestroy {
  private sets = new Array<Set>();

  private selectedDate;

  private selectedSets = new Array<Set>();
  private allExcercies = new Array<Excercise>();

  private selectedItems;

  private setsSubscription;
  private excerciseSubscription;

  //for editing set
  private displayDialog = false;
  private selectedSet: Set;
  private preModifiedSet: Set;

  //for adding set
  private displayAddNewDialog = false;
  private newSet: Set = new Set();
  private excerciseForAddingSet = 0;


  //dropdown setting for angular 2 multiselect
  private dropdownSettings: any;

  constructor(private workoutSetsService: WorkoutSetsService, private excerciseService: ExcerciseService,
    private store: Store<any>) {
  }
  @ViewChild(ExcerciseNamePipe) excerciseNameComponent: ExcerciseNamePipe;
  @ViewChild(GroupByPipe) filterComponent: GroupByPipe;
  ngOnInit() {
    this.subscribeRedux();
    this.selectedDate = new Date();
    this.getMySets();
    this.updateDropDownSettings();
  }

  ngOnDestroy() {
    this.setsSubscription.unsubscribe();
  }

  updateDropDownSettings() {
    this.dropdownSettings = {
      enableCheckAll: false,
      singleSelection: false,
      text: 'Select Excercise',
      maxHeight: 100,
      enableSearchFilter: true
    };
  }
  subscribeRedux() {

    this.setsSubscription = this.store.select('stateReducer').subscribe((state: any) => {
      this.sets = JSON.parse(JSON.stringify(state.sets));
      this.selectSetsBasedOnDate();
      this.updateSelectedDropItems();
    });

    this.excerciseSubscription = this.store.select('excerciseReducer').subscribe((state: any) => {
      this.allExcercies = state.excercises;
      this.selectSetsBasedOnDate();
      this.updateSelectedDropItems();
    })
  }

  getMySets() {
    this.store.dispatch(new MySetUpdateAction());
    this.store.dispatch(new UpdateExcercisesAction());
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
    }
  }

  onItemSelect(excercise: Excercise) {
    let set: Set = new Set();
    set.excerciseId = excercise.id;
    set.date = this.selectedDate.toDateString();
    this.sets.push(set);
    this.selectSetsBasedOnDate();
    console.log(excercise);
  }

  //Edit set
  editSet(set: Set) {
    this.displayDialog = true;
    this.selectedSet = set;
    this.preModifiedSet = JSON.parse(JSON.stringify(set));
  }
  onDialogHide() {
    this.displayDialog = false;
  }
  cancelSetChanges() {
    this.displayDialog = false;
    this.selectedSets.forEach(selectedSet => {
      if (selectedSet.id == this.selectedSet.id) {
        selectedSet.weight = this.preModifiedSet.weight;
        selectedSet.reps = this.preModifiedSet.reps;
      }
    });
  }

  saveSetChanges() {
    this.displayDialog = false;
    this.store.dispatch(new UpdateSetAction(this.selectedSet));
  }

  //Add set
  addSet(excerciseId: number) {
    this.excerciseForAddingSet = excerciseId;
    this.displayAddNewDialog = true;
    this.newSet = new Set();


  }

  onAddNewDialogHide() {
    this.displayAddNewDialog = false;
  }

  cancelNewSet() {
    this.displayAddNewDialog = false;
  }

  saveNewSet() {
    this.newSet.excerciseId = Number(this.excerciseForAddingSet);
    this.newSet.date = this.selectedDate.toDateString();
    this.displayAddNewDialog = false;
    this.store.dispatch(new CreateSetAction(this.newSet));
  }

  //delete set
  deleteSet(setId) {
    this.store.dispatch(new DeleteSetAction(setId));

  }
}
