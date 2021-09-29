import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GaugeModule } from 'angular-gauge';
import { MaterialModule } from './material.module';

import * as fromPipes from './pipes';

@NgModule({
  declarations: [...fromPipes.pipes],
  imports: [FormsModule, GaugeModule.forRoot(), MaterialModule],
  exports: [FormsModule, GaugeModule, MaterialModule, ...fromPipes.pipes],
})
export class SharedModule {}
