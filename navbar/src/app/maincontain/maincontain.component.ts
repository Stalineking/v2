import { CommonModule } from '@angular/common';
import { Component,Input,Renderer2 } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import { MatDialog } from '@angular/material/dialog';
import { InputComponent } from '../input/input.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { CardComponent } from '../card/card.component';
 
@Component({
  selector: 'app-maincontain',
  standalone: true,
  imports: [CommonModule,  
            MatMenuModule,
            MatIconModule,
            InputComponent,
            PaginationComponent,
            CardComponent
            
  ],
  templateUrl: './maincontain.component.html',
  styleUrl: './maincontain.component.scss'
})
export class MaincontainComponent {
  a: number = 0.259;
  today: number = Date.now();

  isActive: boolean = true;

  menuIndex: number =-1
  openTable: number | null = null;


  openNotes: boolean = false; 
  openContact: boolean = false;
  openServices:boolean =false;
  openbilling : boolean =false;
  openHistory: boolean =false;



  activeStep: number = 0;
  isSvg2Visible: { [key: number]: boolean } = {};
  stepBorders: { [key: number]: boolean } = {};

  handleClick(step: number): void {
    // Reset visibility and border for all steps
    for (const key in this.isSvg2Visible) {
      if (this.isSvg2Visible.hasOwnProperty(key)) {
        this.isSvg2Visible[key] = false;
      }
    }
    // Set visibility and border for the clicked step
    this.activeStep = step;
    this.isSvg2Visible[step] = true;

  }
  


  constructor(public dialog: MatDialog) {}

  openArchiveDialog(): void {
    this.dialog.open(DialogOverviewComponent, {
      width: '400px', 
      
    });}
  toggleServices(){
    this.openServices = !this.openServices
    this.openContact=false
    this.openNotes =false
    this.openbilling =false
    this.openHistory =false
  }

  toggleContact(){
    this.openContact = !this.openContact
    this.openNotes =false
    this.openServices =false
    this.openbilling =false
    this.openHistory =false

  }
  toggleNotes() {
    this.openNotes = !this.openNotes;
    this.openContact=false
    this.openServices =false
    this.openbilling =false
    this.openHistory =false

  }
  toggleBilling() {
    this.openbilling = !this.openbilling;
    this.openContact=false
    this.openServices =false
    this.openNotes =false
    this.openHistory =false
  }
toggleHistory(){
  this.openHistory=!this.openHistory;
  this.openContact=false
  this.openServices =false
  this.openbilling =false
  this.openNotes =false

}

  toggleNewTable(tableNumber: number): void {
    this.menuIndex = - 1
    if (this.openTable === tableNumber) {
      this.openTable = null;
    } else {
      this.openTable = tableNumber;
    }
  }


menu(index :number , event : Event){
  this.menuIndex = index ;

  event.stopPropagation();
}
  toggleActive(): void {
    this.isActive = !this.isActive;
  }

}
