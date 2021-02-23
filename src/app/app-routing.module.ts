import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./modules/inicio/inicio.module').then((m) => m.InicioModule),
  },
  {
    path: 'servicios',
    loadChildren: () =>
      import('./modules/servicios/servicios.module').then(
        (m) => m.ServiciosModule
      ),
  },
  {
    path: 'cotizar',
    loadChildren: () =>
      import('./modules/cotizar/cotizar.module').then((m) => m.CotizarModule),
  },
  {
    path: 'cotizar-bodega',
    loadChildren: () =>
      import('./modules/cotizacion/cotizacion.module').then((m) => m.CotizacionModule),
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./modules/contacto/contacto.module').then(
        (m) => m.ContactoModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
