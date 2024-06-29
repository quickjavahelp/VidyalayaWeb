import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country, Country as cont } from '../../model/country.model';
import { environment } from '../../../environments/environment.development';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class SchoolSetupServiceService {
   
  httpClient:HttpClient;
  country: Array<Country> = [] ;
  constructor(httpClient:HttpClient) {
      this.httpClient = httpClient;
   }

  getCountryList(){ 
    this.httpClient.get(environment.baseUrls+"/master/country").subscribe((res:any)=>{
      this.country = res.response;
    });    
    return this.country;
   }
   
  
}
