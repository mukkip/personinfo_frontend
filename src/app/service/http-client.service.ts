import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Person{
  constructor(
    public firstName:string,
    public lastName:string,
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
  
    return this.httpClient.get<Person[]>('https://personinfo.herokuapp.com/');
  }
}
