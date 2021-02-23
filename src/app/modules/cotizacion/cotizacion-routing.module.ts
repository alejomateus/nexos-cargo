import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotizacionComponent } from './cotizacion.component';

export const serviciosRoot = '';
const routes: Routes = [
  {
    component: CotizacionComponent,
    path: serviciosRoot,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizacionRoutingModule { }
