import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { SchoolSetupServiceService } from './school-setup-service.service';
import { Country } from '../../model/country.model';
import { AddressComponent } from '../../common/address/address.component';

@Component({
  selector: 'app-schoolsetup',
  standalone: true,
  imports: [MatExpansionModule,MatInputModule,MatSelectModule,MatButtonModule,MatDividerModule, AddressComponent],
  providers:[SchoolSetupServiceService],
  templateUrl: './schoolsetup.component.html',
  styleUrl: './schoolsetup.component.css'
})
export class SchoolsetupComponent implements OnInit{
  public cou:Country | undefined;
  public country: Array<Country> = [];
  public schoolSetupService: SchoolSetupServiceService;
  constructor(schoolSetupService:SchoolSetupServiceService){
    this.schoolSetupService=schoolSetupService;
  }

  ngOnInit(): void {
    this.country = this.schoolSetupService.getCountryList();
  }

  

  readonly panelOpenState = signal(false);
  

}
