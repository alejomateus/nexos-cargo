import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { ComponentsModule } from '../../components/components.module';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [InicioComponent, ServiciosComponent],
  imports: [CommonModule, InicioRoutingModule, ComponentsModule],
})
export class InicioModule {}
