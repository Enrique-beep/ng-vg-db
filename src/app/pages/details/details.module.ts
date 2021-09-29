import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from './details-routing.module';

import { SharedModule } from '@shared/shared.module';

import { DetailsComponent } from './details.component';

import * as fromComponents from './components';

@NgModule({
  declarations: [DetailsComponent, ...fromComponents.components],
  imports: [CommonModule, DetailsRoutingModule, SharedModule],
})
export class DetailsModule {}
