import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let HttpService = class HttpService {
    constructor(httpService) {
        this.httpService = httpService;
        this.getData = (route) => {
            return this.httpService.get(route);
        };
        this.dodajWycieczke = (route, body) => {
            return this.httpService.post(route, body);
        };
        this.dodajZdj = (route, body) => {
            return this.httpService.post(route, body);
        };
    }
    listaWycieczek() {
        return this.httpService.get('https://localhost:44348/api/WycieczkaInfo');
    }
};
HttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HttpService);
export { HttpService };
//# sourceMappingURL=http.service.js.map