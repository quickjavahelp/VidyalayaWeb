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

constructor(country:Country){
    this.country_uid = country.country_uid;
    this.dia = country.dia;
    this.country_name = country.country_name;
    this.country_short_name = country.country_short_name;
    this.two_digitCode = country.two_digitCode;
    this.three_digit_code = country.three_digit_code;
    this.currency_name = country.currency_name;
    this.currency_alphabetic_code = country.currency_alphabetic_code;
    this.formal_name = country.formal_name;
    this.region_name = country.region_name;
    this.sub_region_name = country.sub_region_name;
    this.capital = country.capital;
    this.continent = country.continent;
    this.language = country.language;
    this.geoname_id = country.geoname_id;
    this.cldr_display_name = country.cldr_display_name;
    this.is_deleted = country.is_deleted;
    this.is_active = country.is_active;
    this.created_by = country.created_by;
    this.created_date = country.created_date;
    this.updated_by = country.updated_by;
    this.updated_date = country.updated_date;
}


}
