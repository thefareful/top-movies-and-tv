import { Component, OnInit, OnChanges } from '@angular/core';
import { ShowsService } from '../services/shows.service';
import { Subscription } from 'rxjs';
import { MoviesService } from '../services/movies.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mode = 2;
  searchText: string;

  private showing = "top"; //can be top or searched

  private showSub: Subscription;
  private shows: Array<any>;

  private movieSub: Subscription;
  private movies: Array<any>;

  private prevState: {mode: number, searchText: string};

  constructor(private showService: ShowsService, private movieService: MoviesService, private stateService: StateService) { }

  ngOnInit() {
    this.prevState = this.stateService.getState();

    if(this.prevState.mode !== 0){
      this.mode = this.prevState.mode;
    }

    if(this.prevState.searchText !== "" && this.prevState.searchText !== undefined){
      if(this.prevState.searchText.length > 2){
        this.searchText = this.prevState.searchText;
        this.getSearched();
      }
    } else {
      this.getTop();
    }
  }

  getSearched(){
    this.showService.searchShows(this.searchText);
    this.showSub = this.showService
      .getShowsUpdateListener()
      .subscribe((showData) => {
        this.shows = showData;
      });

    this.movieService.searchMovies(this.searchText);
    this.movieSub = this.movieService
      .getMoviesUpdateListener()
      .subscribe((movieData) => {
        this.movies = movieData;
      });
  }

  getTop(){
    this.showService.getTopShows();
    this.showSub = this.showService
      .getShowsUpdateListener()
      .subscribe((showData) => {
        this.shows = showData;
      });

    this.movieService.getTopMovies();
    this.movieSub = this.movieService
      .getMoviesUpdateListener()
      .subscribe((movieData) => {
        this.movies = movieData;
      });
  }

  setMode(newMode){
    this.mode = newMode;
  }

  onSearchInput(){
    setTimeout(() => {
      if(this.searchText.length > 2) {
        this.showService.searchShows(this.searchText);
        this.movieService.searchMovies(this.searchText);
        this.showing = "searched";
      } else if (this.showing == "searched") {
        this.showService.getTopShows();
        this.movieService.getTopMovies();
        this.showing = "top";
      }
    }, 500);
  }

  saveState(){
    this.stateService.saveState(this.mode, this.searchText);
  }

}
