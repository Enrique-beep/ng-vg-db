import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
import { DetailsModule } from './details/details.module';

@NgModule({
  imports: [PagesRoutingModule, HomeModule, DetailsModule],
})
export class PagesModule {}
