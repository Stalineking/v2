import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [CommonModule],
})
export class NavbarComponent implements OnInit {
  showLanguageOptions: boolean = false;

  toggleLanguageOptions(){
    console.log('button Clicked')
    this.showLanguageOptions = !this.showLanguageOptions;
  }
  title: string = 'Home';
  constructor(private _router: Router) {
    this._router.events.subscribe((val: any) => {
      let elements = val.url ? val.url.split('/').slice(1) : [];
      console.log(elements);
      this.title =
        elements.length > 0 && elements[0]
          ? elements[elements.length - 1]
          : 'Home';
    });

  }


  navigateToMain() {
    this._router.navigate(['/']);
  }
  ngOnInit(): void {}
  @Input() isSideBarOpened: boolean = false;
  sideBarIsOpen: boolean = false;
  sidebarMaxWidth = '6rem';
  showData = false;

  toggleNotificationData() {
    this.showData = !this.showData;
  }
  toggleSidebar() {
    this.sidebarMaxWidth = this.sideBarIsOpen ? '' : '';
  }
}
