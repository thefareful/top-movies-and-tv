import { Component, OnInit, OnChanges } from '@angular/core';
import { ShowsService } from '../services/shows.service';
import { Subscription } from 'rxjs';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private mode = 2;
  private searchText: string;

  private showSub: Subscription;
  private shows: Array<any>;

  private movieSub: Subscription;
  private movies: Array<any>;

  constructor(private showService: ShowsService, private movieService: MoviesService) { }

  ngOnInit() {
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
    if(this.searchText.length > 2) {
      this.showService.searchShows(this.searchText);
      this.movieService.searchMovies(this.searchText);
    } else if (this.searchText.length === 0){
      this.showService.getTopShows();
      this.movieService.getTopMovies();
    }
  }

}
