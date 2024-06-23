import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SetupWindowComponent } from './setup/setup-window/setup-window.component';
import { MainheaderComponent } from './common/mainheader/mainheader.component';
import { MainfooterComponent } from './common/mainfooter/mainfooter.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainheaderComponent,MainfooterComponent,SetupWindowComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VidyalayaWebFront';
}
