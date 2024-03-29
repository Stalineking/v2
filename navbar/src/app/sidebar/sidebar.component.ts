import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output ,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule,CommonModule,MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  UserName: string = 'Admin';
  @Output() sideBarOpened = new EventEmitter<boolean>();
 openSideBar: boolean = false;

 constructor(private router: Router) {}

 navigateToDeviceList(): void {
  console.log('Button clicked');
   this.router.navigate(['/device-list']);


 }
  ngOnInit(){
 
  }
  toggleSidebar() {
    this.openSideBar = !this.openSideBar;
    this.sideBarOpened.emit(this.openSideBar);
    
  }

  
}
