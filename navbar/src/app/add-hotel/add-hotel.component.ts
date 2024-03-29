import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-add-hotel',
  standalone: true,
  imports: [CommonModule,FormsModule,CardComponent,NavbarComponent],
  templateUrl: './add-hotel.component.html',
  styleUrl: './add-hotel.component.scss',
})
export class AddHotelComponent {

  showBasicInformationForm = true;
  showSocialLinks = false;
  showAdminCredentials = false;

  password: string = '';
  //showPassword: boolean = false;

/*   togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  } */
  profiles: any[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ];

  
  editProfile(profileId: number) {
    console.log(`Editing profile with ID ${profileId}`);

  }

  addProfile() {
    console.log('Adding profile...');
  }
  viewProfile(profileId: number) {
    console.log(`Viewing profile with ID ${profileId}`);
  }
  deleteProfile(profileId: number) {
    console.log(`Deleting profile with ID ${profileId}`);
    const confirmDelete = confirm(`Are you sure you want to delete profile with ID ${profileId}?`);
    
    if (confirmDelete) {
      this.profiles = this.profiles.filter(profile => profile.id !== profileId);
    }}
  toggleBasicInformationForm() {
    this.showBasicInformationForm = true;
    this.showSocialLinks = false;
    this.showAdminCredentials = false;
/*     this.router.navigate(['/basic-information']); */
  }

  toggleSocialLink() {
    this.showSocialLinks = true;
    this.showBasicInformationForm = false;
    this.showAdminCredentials = false;
/*     this.router.navigate(['/social-links']); */
 
  }

  toggleAdminCredentials() {
    this.showAdminCredentials = true;
    this.showBasicInformationForm = false;
    this.showSocialLinks = false;
/*     this.router.navigate(['/admin-credentials']); */
  }
}
