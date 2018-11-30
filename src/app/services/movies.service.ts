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
    id: string;
    overview: string
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
            image = "https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path;
          }

          this.movieData.push({
            name: movie.title,
            image: image,
            id: movie.id,
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
            image = "https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path;
          }
          this.movieData.push({
            name: movie.title,
            image: image,
            id: movie.id,
            overview: movie.overview
          });
        });

        this.moviesUpdated.next(this.movieData);
      });
  }

  
  getMovie(id: string) {
    let movie = this.movieData.find(movie => movie.id == id);
    console.log(movie)
    if (movie) {
      localStorage.setItem("name", movie.name);
      localStorage.setItem("image", movie.image);
      localStorage.setItem("id", movie.id);
      localStorage.setItem("overview", movie.overview);
    } else {
      movie = {
        name: localStorage.getItem("name"),
        image: localStorage.getItem("image"),
        id: localStorage.getItem("id"),
        overview: localStorage.getItem("overview")
      };
    }
    return movie;
  }
  
}
