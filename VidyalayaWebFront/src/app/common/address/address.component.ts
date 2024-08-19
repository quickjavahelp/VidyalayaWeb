import { Component, Input, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SchoolSetupServiceService } from '../../setup/schoolsetup/school-setup-service.service';
import { Country } from '../../model/country.model';
import { State } from '../../model/state.model';
import { ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [MatExpansionModule,MatInputModule,MatSelectModule,MatButtonModule,MatDividerModule, ReactiveFormsModule],
  providers:[SchoolSetupServiceService, Input],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})

export class AddressComponent implements OnInit{
  public cou!: Country;
  public countrys: Array<Country> = [];
  public states: Array<State> = [];

  @Input() sufixIdFromParent!: String;
  @Input() headerName!: String;
  
  readonly panelOpenState = signal(false);
  public schoolSetupService: SchoolSetupServiceService;
  constructor(schoolSetupService:SchoolSetupServiceService){
    this.schoolSetupService = schoolSetupService;
  }

  ngOnInit(): void {
    this.countrys = this.schoolSetupService.getCountryList();   
  }

  public getState(){
    debugger;
    this.states = this.schoolSetupService.getStateList(this.cou);
  }

}
