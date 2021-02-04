import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4Df19pGwD_cBXN0h-Yb0RQehg1cd1vZc',
    }),
    ReactiveFormsModule,
  ],
})
export class ContactoModule {}
