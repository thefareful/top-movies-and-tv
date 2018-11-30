import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShowsService {
  private shows: Array<any>;
  private showData: Array<{
    name: string;
    image: string;
    id: string;
    overview: string;
  }> = new Array();
  private showsUpdated = new Subject<any>();

  constructor(private http: HttpClient) {}

  getTopShows() {
    this.http
      .get<any>(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=a717575ad580b55684a6ab1b55b0b84a&language=en-US&page=1"
      )
      .subscribe(data => {
        this.showData = new Array();

        this.shows = data.results;
        this.shows.forEach(show => {
          let image;
          if (!show.backdrop_path) {
            image = "https://via.placeholder.com/500";
          } else {
            image = "https://image.tmdb.org/t/p/w1280/" + show.backdrop_path;
          }

          this.showData.push({
            name: show.name,
            image: image,
            id: show.id,
            overview: show.overview
          });
        });

        this.showsUpdated.next(this.showData);
      });
  }

  getShowsUpdateListener() {
    return this.showsUpdated.asObservable();
  }

  searchShows(key: string) {
    this.http
      .get<any>(
        "https://api.themoviedb.org/3/search/tv?api_key=a717575ad580b55684a6ab1b55b0b84a&language=en-US&query=" +
          key +
          "&page=1"
      )
      .subscribe(data => {
        this.showData = new Array();

        this.shows = data.results;
        this.shows.forEach(show => {
          let image;
          if (!show.backdrop_path) {
            image = "https://via.placeholder.com/300x170";
          } else {
            image = "https://image.tmdb.org/t/p/w1280/" + show.backdrop_path;
          }

          this.showData.push({
            name: show.name,
            image: image,
            id: show.id,
            overview: show.overview
          });
        });

        this.showsUpdated.next(this.showData);
      });
  }

  getShow(id: string) {
    let show = this.showData.find(show => show.id == id);

    if (show) {
      localStorage.setItem("name", show.name);
      localStorage.setItem("image", show.image);
      localStorage.setItem("id", show.id);
      localStorage.setItem("overview", show.overview);
    } else {
      show = {
        name: localStorage.getItem("name"),
        image: localStorage.getItem("image"),
        id: localStorage.getItem("id"),
        overview: localStorage.getItem("overview")
      };
    }
    return show;
  }
}
