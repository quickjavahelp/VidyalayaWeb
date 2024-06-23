import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-schoolsetup',
  standalone: true,
  imports: [MatExpansionModule,MatInputModule,MatSelectModule],
  templateUrl: './schoolsetup.component.html',
  styleUrl: './schoolsetup.component.css'
})
export class SchoolsetupComponent {
  readonly panelOpenState = signal(false);

}
