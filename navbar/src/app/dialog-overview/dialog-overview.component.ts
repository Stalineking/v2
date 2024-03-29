import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-overview.component.html',
  styleUrl: './dialog-overview.component.scss'
})
export class DialogOverviewComponent {
  Name=[];
  onClick: boolean = false;
  showConfirmation: boolean = false;


  onDelete() {
    this.onClick = true;

    //this.dialogRef.close(); 
    this.showConfirmation = true;
    setTimeout(() => {
      this.showConfirmation = false;
    }, 5000);
  }

  toggleClick(){
    this.onClick=!this.onClick;
  }

  
  constructor(public dialogRef: MatDialogRef<DialogOverviewComponent>,
    private snackBar: MatSnackBar
    ) {}

/*     onDelete(): void {
      console.log('Archived!');
      this.snackBar.open('Momo Ressort has been successfully archived', 'Undo', {
        panelClass: ['bg-green-500', 'text-white'],
        duration: 3000,
      });
    
      this.dialogRef.close();
    } */


  onCancel(): void {
    console.log('Cancelled!');
    this.showConfirmation = false;
    this.dialogRef.close(); 
  }
}
