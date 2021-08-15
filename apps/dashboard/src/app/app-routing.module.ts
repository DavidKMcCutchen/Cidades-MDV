import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { CidadesComponent } from './cidades/cidades.component';
import { LoginComponent } from "@cidades/ui-login";

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'cidades', component: CidadesComponent},
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
