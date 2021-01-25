import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListaWycieczekComponent = class ListaWycieczekComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.getWycieczki = () => {
            this.httpService.listaWycieczek().subscribe(result => {
                this.Wycieczki = result;
            }, error => {
                console.error(error);
            });
        };
    }
    ngOnInit() {
        this.httpService.listaWycieczek().subscribe(result => {
            console.log(result);
            this.Wycieczki = result;
        }, error => {
            console.error(error);
        });
    }
};
ListaWycieczekComponent = __decorate([
    Component({
        selector: 'app-lista-wycieczek',
        templateUrl: './lista-wycieczek.component.html',
        styleUrls: ['./lista-wycieczek.component.css']
    })
], ListaWycieczekComponent);
export { ListaWycieczekComponent };
//# sourceMappingURL=lista-wycieczek.component.js.map