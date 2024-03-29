import { CommonModule } from '@angular/common';
import { AddHotelComponent } from '../add-hotel/add-hotel.component';
import { CardComponent } from '../card/card.component';
import { InputComponent } from '../input/input.component';
import { MaincontainComponent } from '../maincontain/maincontain.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { DevicelistComponent } from '../devicelist/devicelist.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router, RouterModule } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    
    CommonModule,InputComponent,MaincontainComponent,CardComponent,
    PaginationComponent,AddHotelComponent,DevicelistComponent,
    NavbarComponent,SidebarComponent,RouterModule   
    ],
    
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, AfterViewInit {
    title = 'home';
    isOpen: boolean = false;
    urlsPath: string[] = [];
  
  
  
  
    constructor(private router: Router) {
      this.router.events.subscribe((val: any) => {
        this.urlsPath = [];
        this.getPaths(val.url);
      });
    }
    ngAfterViewInit(): void {}
    ngOnInit(): void {}
    getPaths(url: string) {
      let elements = url ? url.split('/').slice(1) : null;
      if (elements && elements.length > 0) {
        // Check if the elements are already present in the array
        if (!this.urlsPath.includes(elements[0])) {
          this.urlsPath = this.urlsPath.concat(elements);
        }
      }
    }
    navigateToMain() {
      this.router.navigate(['/']);
    }
    changeSideBar(event: boolean) {
      this.isOpen = event;
    }
}
