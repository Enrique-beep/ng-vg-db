import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptors implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': '96ba75f1demsh343ad09ac04fe65p16b19ejsnc2e3b12d9af7',
      },
      setParams: {
        key: '1cbda7d99c9c4bfbb7a06603171b6f85',
      },
    });
    return next.handle(req);
  }
}
