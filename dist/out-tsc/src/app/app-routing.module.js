import { __decorate } from "tslib";
import { NowaWycieczkaComponent } from './nowa-wycieczka/nowa-wycieczka.component';
import { ListaWycieczekComponent } from './lista-wycieczek/lista-wycieczek.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    { path: 'dodaj', component: NowaWycieczkaComponent },
    { path: 'historia', component: ListaWycieczekComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map