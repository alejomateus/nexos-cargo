import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoHeaderModule } from './info-header/info-header.module';
import { NavMenuModule } from './nav-menu/nav-menu.module';
import { FooterModule } from './footer/footer.module';
const MODULOS_COMPONENTES = [InfoHeaderModule, NavMenuModule, FooterModule];
@NgModule({
  declarations: [],
  imports: [CommonModule, ...MODULOS_COMPONENTES],
  exports: [...MODULOS_COMPONENTES],
})
export class ComponentsModule {}
