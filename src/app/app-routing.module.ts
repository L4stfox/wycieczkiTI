import { NowaWycieczkaComponent } from './nowa-wycieczka/nowa-wycieczka.component';
import { ListaWycieczekComponent } from './lista-wycieczek/lista-wycieczek.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'dodaj', component: NowaWycieczkaComponent},
  { path: 'historia', component: ListaWycieczekComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
