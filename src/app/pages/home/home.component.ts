import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '@core/services';
import { APIResponse, Game } from '@shared/models';
import { Subscription } from 'rxjs';

type SearchParams = {
  sort: string;
  search?: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string = '';
  public games: Array<Game> = [];
  private routeSub!: Subscription;
  private gameSub!: Subscription;

  constructor(
    private readonly _httpService: HttpService,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this._activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames({ sort: 'metacrit', search: params['game-search'] });
      } else {
        this.searchGames({ sort: 'metacrit' });
      }
    });
  }

  public searchGames({ sort, search }: SearchParams): void {
    this.gameSub = this._httpService
      .getGameList({ ordering: sort, search })
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList);
      });
  }

  public handleClickOpenDetail(id: number): void {
    this._router.navigate(['details', id]);
  }

  ngOnDestroy(): void {
    if (this.gameSub) this.gameSub.unsubscribe();
    if (this.routeSub) this.routeSub.unsubscribe();
  }
}
