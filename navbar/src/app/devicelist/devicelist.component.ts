import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { CardComponent } from '../card/card.component';
import { SwapDeviceComponent } from '../swap-device/swap-device.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-devicelist',
  standalone: true,
  imports: [CommonModule,
            InputComponent,
            PaginationComponent,
            CardComponent,
            PaginationComponent,
            CommonModule,FormsModule
            ],
  templateUrl: './devicelist.component.html',
  styleUrl: './devicelist.component.scss'
})
export class DevicelistComponent {
  Avalaible: boolean = true;
  Used: boolean = false
  openTable: number | null = null;
  menuIndex: number =-1
  selectedButton: number | null = null;
  isDialogOpen: boolean = false;
  showConfirmation: boolean = false;

  
  constructor(private dialog: MatDialog) {}

openSwapDevice(): void {
  const dialogRef: MatDialogRef<SwapDeviceComponent> = this.dialog.open(SwapDeviceComponent, {
    width: '999px',
    height: '490px',
  });

dialogRef.afterClosed().subscribe(() => {
  this.isDialogOpen = false;
});
}

  toggleNewTable(tableNumber: number): void {
    if (this.isDialogOpen) {
      return;
    }
    this.menuIndex = - 1
    if (this.openTable === tableNumber) {
      this.openTable = null;
    } else {
      this.openTable = tableNumber;
    }
  }


  toggleAvalaible(): void{
    this.Avalaible=!this.Avalaible;
  }
}

