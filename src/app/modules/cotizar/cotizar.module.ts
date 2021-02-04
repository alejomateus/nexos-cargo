import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotizarRoutingModule } from './cotizar-routing.module';
import { CotizarComponent } from './cotizar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CotizarComponent],
  imports: [CommonModule, CotizarRoutingModule, ReactiveFormsModule],
})
export class CotizarModule {}
