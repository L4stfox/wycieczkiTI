import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NowaWycieczkaComponent = class NowaWycieczkaComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.dodajWycieczke = () => {
            let route = "https://localhost:44348/api/WycieczkaInfo";
            this.httpService.dodajWycieczke(route, this.wycieczka)
                .subscribe((result) => {
                console.log(this.wycieczka);
            }, (error) => {
                console.error(error);
            });
        };
        this.Zdjecia = ["dsdas", "asdasd"];
        this.dodajZdj = () => {
            let route = "https://localhost:44348/api/zdjecia";
            this.httpService.dodajZdj(route, this.zdjecia)
                .subscribe((result) => {
                console.log(this.zdjecia);
            }, (error) => {
                console.error(error);
            });
        };
        this.urls = [];
        this.widac = true;
        this.licz = 0;
        this.wycieczka = {
            data: "",
            miejsce_Start: "",
            miejsce_Docelowe: "",
            ilosc_Km: 1,
            liczba_Dni: 1,
            Url_Zdj: "",
            Url_Filmu: ""
        };
        this.zdjecia = {
            urlzdjecia: [],
        };
    }
    onSubmit() {
        this.dodajWycieczke();
        console.log("dodajwycieczke");
        this.dodajZdj();
        console.log("dodajzdjecie");
    }
    onPhotoChange(event) {
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event) => {
                    console.log(event.target.result);
                    this.urls.push(event.target.result);
                };
                reader.readAsDataURL(event.target.files[i]);
                this.licz++;
                if (this.licz > 5) {
                    this.widac = false;
                }
            }
        }
    }
    onVideoChange(event) {
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event) => {
                    console.log(event.target.result);
                    this.urls.push(event.target.result);
                };
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    }
};
NowaWycieczkaComponent = __decorate([
    Component({
        selector: 'app-nowa-wycieczka',
        templateUrl: './nowa-wycieczka.component.html',
        styleUrls: ['./nowa-wycieczka.component.css']
    })
], NowaWycieczkaComponent);
export { NowaWycieczkaComponent };
//# sourceMappingURL=nowa-wycieczka.component.js.map