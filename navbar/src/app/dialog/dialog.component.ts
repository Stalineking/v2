import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  onClick: boolean = false;
  isDialogVisible = true; 

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  toggleClick(){
    this.onClick=!this.onClick;
  }

  onCancel(): void {
    console.log('Cancelled!');
    this.dialogRef.close(); 
  }
  
}
