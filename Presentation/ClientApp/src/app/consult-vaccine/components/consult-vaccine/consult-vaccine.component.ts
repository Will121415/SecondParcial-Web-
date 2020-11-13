import { Component, OnInit } from '@angular/core';
import { Vaccine } from 'src/app/Models/vaccine.model';
import { VaccineService } from 'src/app/services/vaccine.service';

@Component({
  selector: 'app-consult-vaccine',
  templateUrl: './consult-vaccine.component.html',
  styleUrls: ['./consult-vaccine.component.css']
})
export class ConsultVaccineComponent implements OnInit {

  vaccines: Vaccine[];
  searchText: string;
  constructor(private vaccineService: VaccineService) { }

  ngOnInit() {
    this.vaccineService.get().subscribe(result => {this.vaccines = result; });
  }

}
