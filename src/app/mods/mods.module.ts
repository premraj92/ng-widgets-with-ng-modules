import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [ModsHomeComponent, ModalComponent, AccordionComponent],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModuleModule
  ]
})
export class ModsModule { }
