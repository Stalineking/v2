import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-swap-device',
  standalone: true,
  imports: [],
  templateUrl: './swap-device.component.html',
  styleUrl: './swap-device.component.scss'
})
export class SwapDeviceComponent {  
  constructor(public dialogRef: MatDialogRef<SwapDeviceComponent>,  ) {}
  onCancel(): void {
    console.log('Cancelled!');
    this.dialogRef.close(); 
  }
}
