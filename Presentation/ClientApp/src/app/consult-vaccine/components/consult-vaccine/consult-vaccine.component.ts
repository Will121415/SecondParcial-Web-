import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from 'src/app/@base/alert-dialog/components/alert-dialog/alert-dialog.component';
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
  countStudent: number;
  constructor(
    private vaccineService: VaccineService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.vaccineService.get().subscribe(result => {
      if (result != null) {
        this.dialog.open(AlertDialogComponent, {
          width: '250px',
          data: 'Vacunas consultadas...!',
        });
        this.vaccines = result;
        this.countStudent = this.vaccines.length;
      } else {
        this.dialog.open(AlertDialogComponent, {
          width: '250px',
          data: 'No se encontraron vacunas registradas...!',
        });
      }
    });
  }

}
