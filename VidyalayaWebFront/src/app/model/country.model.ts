export class Country {
public country_uid: Number = 0;
public dia: String = "";
public country_name: String = "";
public country_short_name: String = "";
public two_digitCode: String = "";
public three_digit_code: String = "";
public currency_name: String = "";
public currency_alphabetic_code: String = "";
public formal_name: String = "";
public region_name: String = "";
public sub_region_name: String = "";
public capital: String = "";
public continent: String = "";
public language: String = "";
public geoname_id: String = "";
public cldr_display_name: String = "";
public is_deleted: String = "";
public is_active: String = "";
public created_by: String  = "";
public created_date: String  = "";
public updated_by: String  = "";
public updated_date: String  = "";

constructor(country:any){
    this.country_uid = country.country_uid;
    this.capital = country.capital;
    this.country_name = country.country_name;
    this.two_digitCode = country.two_digitCode;
    this.three_digit_code = country.three_digit_code;
}


}
