import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { environment as env } from '@env/environment';
import { APIResponse, Game } from '@shared/models';
import { map } from 'rxjs/operators';

type HttpServiceParams = {
  ordering: string;
  search?: string;
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly _http: HttpClient) {}

  public getGameList({
    ordering,
    search,
  }: HttpServiceParams): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this._http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params,
    });
  }

  public getGameDetails(id: string): Observable<Game> {
    const gameInfoRequest = this._http.get(`${env.BASE_URL}/games/${id}`);
    const gameTrailerRequest = this._http.get(
      `${env.BASE_URL}/games/${id}/movies`
    );
    const gameScreenshotsRequest = this._http.get(
      `${env.BASE_URL}/games/${id}/screenshots`
    );

    return forkJoin({
      gameInfoRequest,
      gameScreenshotsRequest,
      gameTrailerRequest,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenshotsRequest']?.results,
          trailers: resp['gameTrailerRequest']?.results,
        };
      })
    );
  }
}