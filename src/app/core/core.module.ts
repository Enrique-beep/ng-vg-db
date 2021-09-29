import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';

import * as fromComponents from './components';
import * as fromInterceptors from './interceptors';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, HttpClientModule, SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: fromInterceptors.HttpHeadersInterceptors,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: fromInterceptors.HttpErrorsInterceptors,
      multi: true,
    },
  ],
  exports: [...fromComponents.components],
})
export class CoreModule {}
