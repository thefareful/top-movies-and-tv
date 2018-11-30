import { Component, OnInit, Input } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ShowsService } from "../services/shows.service";
import { MoviesService } from "../services/movies.service";
import { StatementVisitor } from "@angular/compiler";
import { StateService } from "../services/state.service";

@Component({
  selector: "app-detailed",
  templateUrl: "./detailed.component.html",
  styleUrls: ["./detailed.component.css"]
})
export class DetailedComponent implements OnInit {
  private titleId;
  title;

  private mode;

  constructor(
    private location: Location,
    public route: ActivatedRoute,
    private showsService: ShowsService,
    private moviesService: MoviesService,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.mode = this.stateService.getState().mode;
    console.log(this.mode)
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.titleId = paramMap.get("id");
      this.getTitle();
    });
  }

  backClicked() {
    this.location.back();
  }

  getTitle(){
    if(this.mode == 2){
      this.title = this.showsService.getShow(this.titleId);
    } else {
      this.title = this.moviesService.getMovie(this.titleId);
    }
  }
}
