import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, InicioRoutingModule, ComponentsModule],
})
export class InicioModule {}
