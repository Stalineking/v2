import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ImportDialogComponent } from '../import-dialog/import-dialog.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  deviceButton: boolean = false;

  constructor(private router: Router, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.deviceButton = this.router.url
      .toString()
      .toLocaleLowerCase()
      .includes('device');
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '450px',
      height: '800px',
    });
  }
  openImportDialog(): void {
    this.dialog.open(ImportDialogComponent, {
      width: '900px',
      height: '700px',
    });
  }
  onAddHotelClick() {
    this.router.navigate(['/add-hotel']);
  }
  onImportClick() {
    this.router.navigate(['/import-csv']);
  }
}
