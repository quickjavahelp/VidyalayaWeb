import { Routes } from '@angular/router';
import { SetupWindowComponent } from './setup/setup-window/setup-window.component';
import { SchoolsetupComponent } from './setup/schoolsetup/schoolsetup.component';

export const routes: Routes = [
    {path: 'setupwindow',component: SetupWindowComponent, 
      children: [
           {path: 'schoolsetup',component: SchoolsetupComponent},
      ]}
    
   
];
