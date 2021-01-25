import { Zdjecia } from './../interface2/cos2';
import { ListaWycieczekComponent } from './../lista-wycieczek/lista-wycieczek.component';
import { Wycieczki } from '../interface/cos';
import { HttpService } from './../services/http.service';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';


@Component({
  selector: 'app-nowa-wycieczka',
  templateUrl: './nowa-wycieczka.component.html',
  styleUrls: ['./nowa-wycieczka.component.css']
})
export class NowaWycieczkaComponent {
  [x: string]: any;
  public wycieczka: Wycieczki;
  public zdjecia: Zdjecia;

  imageUrl: string;
  constructor(private httpService: HttpService) {
    this.wycieczka ={
      data:"",
      miejsce_Start:"",
      miejsce_Docelowe:"",
      ilosc_Km: 1,
      liczba_Dni: 1,
      Url_Zdj: "",
      Url_Filmu: ""
    };
    this.zdjecia ={
      urlzdjecia:[],
    }
   }
   public dodajWycieczke = () =>{
     let route: string = "https://localhost:44348/api/WycieczkaInfo"
     this.httpService.dodajWycieczke(route,this.wycieczka)
     .subscribe((result)=>{
       console.log(this.wycieczka);
     },
      (error)=>{
        console.error(error);
      });
   }
   Zdjecia = ["dsdas","asdasd"]
   public dodajZdj = () =>{
    let route: string = "https://localhost:44348/api/zdjecia"
    this.httpService.dodajZdj(route, this.zdjecia)
    .subscribe((result)=>{
      console.log(this.zdjecia);
    },
     (error)=>{
       console.error(error);
     });
  }
   onSubmit(){
     this.dodajWycieczke();
     console.log("dodajwycieczke")
     this.dodajZdj();
     console.log("dodajzdjecie")
   }

   urls=[];
   videoUrl: string;
   widac:boolean;
   widac = true;
   licz = 0;

  onPhotoChange(event){
    if (event.target.files && event.target.files[0]){
      var filesAmount =event.target.files.length;
      for(let i=0;i<filesAmount;i++){
        var reader = new FileReader();

        reader.onload = (event:any) =>{
          console.log(event.target.result);
          this.urls.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
        this.licz++
        if(this.licz>5)
        {
          this.widac=false;
        }

      }
    }
  }





}
