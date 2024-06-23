import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-setup-window',
  standalone: true,
  imports: [ RouterOutlet, RouterLink],
  templateUrl: './setup-window.component.html',
  styleUrl: './setup-window.component.css'
})
export class SetupWindowComponent {

}
