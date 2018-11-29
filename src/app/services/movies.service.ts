import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  private movies: Array<any>;
  private movieData: Array<{
    name: string;
    image: string;
    overview: string;
  }> = new Array();
  private moviesUpdated = new Subject<any>();

  constructor(private http: HttpClient) {}

  getTopMovies() {
    this.http
      .get<any>(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=a717575ad580b55684a6ab1b55b0b84a&language=en-US&page=1"
      )
      .subscribe(data => {
        this.movieData = new Array;

        this.movies = data.results;
        this.movies.forEach(movie => {
          let image;
          if(!movie.backdrop_path){
            image = "https://via.placeholder.com/300x170";
          } else{
            image = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
          }

          this.movieData.push({
            name: movie.title,
            image: image,
            overview: movie.overview
          });
        });

        this.moviesUpdated.next(this.movieData);
      });
  }

  getMoviesUpdateListener() {
    return this.moviesUpdated.asObservable();
  }

  searchMovies(key: string){
    this.http
      .get<any>(
        "https://api.themoviedb.org/3/search/movie?api_key=a717575ad580b55684a6ab1b55b0b84a&language=en-US&query=" + key + "&page=1"
      )
      .subscribe(data => {
        this.movieData = new Array;

        this.movies = data.results;
        this.movies.forEach(movie => {
          let image;
          if(!movie.backdrop_path){
            image = "https://via.placeholder.com/300x170";
          } else{
            image = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
          }
          console.log(image);
          this.movieData.push({
            name: movie.title,
            image: image,
            overview: movie.overview
          });
        });

        console.log(this.movieData);
        this.moviesUpdated.next(this.movieData);
      });
  }
}
