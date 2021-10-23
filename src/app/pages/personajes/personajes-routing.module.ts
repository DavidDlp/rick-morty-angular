import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesDetailComponent } from './pages/personajes-detail/personajes-detail.component';
import { PersonajesComponent } from './personajes.component';

const routes: Routes = [
  {path: "" , component: PersonajesComponent},
  {path: ":id" , component: PersonajesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
