import { HttpErrorsInterceptors } from './http-errors.interceptor';
import { HttpHeadersInterceptors } from './http-headers.interceptor';

export const interceptors: any[] = [
  HttpErrorsInterceptors,
  HttpHeadersInterceptors,
];

export * from './http-headers.interceptor';
export * from './http-errors.interceptor';
