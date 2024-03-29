import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-mains',
  standalone: true,
  imports: [NavbarComponent,SidebarComponent,CommonModule,LoginComponent],
  templateUrl: './mains.component.html',
  styleUrl: './mains.component.scss'
})
export class MainsComponent implements OnInit, AfterViewInit {
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
