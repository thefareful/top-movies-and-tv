import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-buttons',
  templateUrl: './toggle-buttons.component.html',
  styleUrls: ['./toggle-buttons.component.css']
})
export class ToggleButtonsComponent implements OnInit {
  @Output() modeSelected: EventEmitter<any> = new EventEmitter();
  @Input() mode;

  buttonShows: string = "";
  buttonMovies: string = "";

  constructor() { }

  ngOnInit() {
    if(this.mode === 1) {
      this.buttonMovies = "active";
      this.buttonShows = "";
    } else {
      this.buttonMovies = "";
      this.buttonShows = "active";
    }
  }

  setMode(mode: number) {
    this.modeSelected.emit(mode);
}

}
