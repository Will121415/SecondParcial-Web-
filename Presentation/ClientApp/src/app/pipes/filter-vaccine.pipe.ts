import { Pipe, PipeTransform } from '@angular/core';
import { Vaccine } from '../Models/vaccine.model';

@Pipe({
  name: 'filterVaccine'
})
export class FilterVaccinePipe implements PipeTransform {

  transform(vaccines: Vaccine[], searchText: string): any {
    if (searchText == null) { return vaccines; }
     return vaccines.filter(v =>  v.idVaccine.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      v.vaccineType.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    }

}
