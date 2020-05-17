import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { TimesDirective } from './times.directive';
import {SharedModuleModule} from '../shared-module/shared-module.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [ElementsHomeComponent, PlaceHolderComponent, TimesDirective, SegmentComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModuleModule
  ],
  exports: []
})
export class ElementsModule { }
