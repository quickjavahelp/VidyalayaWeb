import { Component, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SchoolSetupServiceService } from '../../setup/schoolsetup/school-setup-service.service';
import { Country } from '../../model/country.model';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [MatExpansionModule,MatInputModule,MatSelectModule,MatButtonModule,MatDividerModule],
  providers:[SchoolSetupServiceService],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit{
  public cou:Country | undefined;
  public country: Array<Country> = [];
  readonly panelOpenState = signal(false);
  public schoolSetupService: SchoolSetupServiceService;
  constructor(schoolSetupService:SchoolSetupServiceService){
    this.schoolSetupService=schoolSetupService;
  }

  ngOnInit(): void {
    this.country = this.schoolSetupService.getCountryList();
  }

}
