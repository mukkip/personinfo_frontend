import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Person{
  constructor(
    public FirstName:string,
    public SecondName:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor( private httpClient:HttpClient) { 
  }

  getPersons()
  {
    console.log("test call");
    return this.httpClient.get<Person[]>('https://personinfo.herokuapp.com/');
  }
}
