import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-wycieczek',
  templateUrl: './lista-wycieczek.component.html',
  styleUrls: ['./lista-wycieczek.component.css']
})
export class ListaWycieczekComponent implements OnInit{

  constructor(private httpService: HttpService) { }
  Wycieczki;
  public getWycieczki = () => {
    this.httpService.listaWycieczek().subscribe(
      result => {
        this.Wycieczki = result;
      },
        error => {
          console.error(error);
        });

  }
  ngOnInit(): void {
    this.httpService.listaWycieczek().subscribe(
      result => {
        console.log(result);
        this.Wycieczki = result;
      },
        error => {
          console.error(error);
        });
  }
}
