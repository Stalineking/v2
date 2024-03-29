import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { DialogComponent } from './dialog/dialog.component';
import { DevicelistComponent } from './devicelist/devicelist.component';
import { MaincontainComponent } from './maincontain/maincontain.component';
import { InputComponent } from './input/input.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  
  { path: 'add-hotel', component: AddHotelComponent },
  { path: 'basic-information', component: AddHotelComponent },
  { path: 'social-links', component: AddHotelComponent },
  { path: 'admin-credentials', component: AddHotelComponent },
  { path: 'add-device', component: DialogComponent },
  { path: 'device-list', component: DevicelistComponent },
  { path: 'hotel-list', component: MainComponent},
  { path: 'search', component: InputComponent},


  
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(),  ]
};
