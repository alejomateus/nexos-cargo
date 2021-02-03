import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiciosComponent } from './servicios.component';

export const serviciosRoot = '';
const routes: Routes = [
  {
    component: ServiciosComponent,
    path: serviciosRoot,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosRoutingModule {}
