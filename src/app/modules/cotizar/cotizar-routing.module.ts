import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotizarComponent } from './cotizar.component';

export const sctizarRoot = '';
const routes: Routes = [
  {
    component: CotizarComponent,
    path: sctizarRoot,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CotizarRoutingModule {}
