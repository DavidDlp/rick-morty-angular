import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `Home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `About`, loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule)
  },{
    path: `Chapters`, loadChildren: () =>
      import('./pages/chapters/chapters.module').then(m => m.ChaptersModule)
  },{
    path: `Location`, loadChildren: () =>
      import('./pages/location/location.module').then(m => m.LocationModule)
  },{
    path: `Personajes`, loadChildren: () =>
      import('./pages/personajes/personajes.module').then(m => m.PersonajesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
