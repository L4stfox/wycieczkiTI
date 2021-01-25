import { Zdjecia } from './../interface2/cos2';
import { Wycieczki} from './../interface/cos';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpService: HttpClient) { }

  public getData = (route: string) => {
    return this.httpService.get(route);
  }
  public dodajWycieczke = (route: string,body: Wycieczki) => {
    return this.httpService.post(route, body);
  }
  public dodajZdj = (route: string,body: Zdjecia) => {
    return this.httpService.post(route, body);
  }
  listaWycieczek(){
    return this.httpService.get('https://localhost:44348/api/WycieczkaInfo');
  }
}
