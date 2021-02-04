import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto.component';

export const contactoRoot = '';
const routes: Routes = [
  {
    component: ContactoComponent,
    path: contactoRoot,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactoRoutingModule {}
