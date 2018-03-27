import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'excerciseName' })
export class ExcerciseNamePipe implements PipeTransform {
    transform(excerciseId: any, listofExcercises: any): string {
        if (excerciseId == null) return '';
        if (listofExcercises) {
            
            let excercise = listofExcercises.filter((filter) => {
                return filter.id == excerciseId;
            });
            if (excercise.length > 0) {
                return excercise[0].name;
            }
        }
        return '';

    }
}