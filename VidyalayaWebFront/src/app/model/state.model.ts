export class State {
public uid: String = "";
public state_name: String = ""; 
public code: String = ""; 
public capital: String = ""; 
public country_code: String = ""; 
public json_details: String = ""; 
public is_deleted: String = ""; 
public is_active: String = ""; 
public created_by: String = ""; 
public created_date: String = ""; 
public updated_by: String = ""; 
public updated_date: String = ""; 

constructor(state:State){
    this.uid= state.uid;
    this.state_name= state.state_name; 
    this.code= state.code; 
    this.capital= state.capital; 
    this.country_code= state.country_code; 
    this.json_details= state.json_details; 
    this.is_deleted= state.is_deleted; 
    this.is_active= state.is_active; 
    this.created_by= state.created_by; 
    this.created_date= state.created_date; 
    this.updated_by= state.updated_by; 
    this.updated_date= state.updated_date;
}
}
