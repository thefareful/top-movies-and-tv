import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-buttons',
  templateUrl: './toggle-buttons.component.html',
  styleUrls: ['./toggle-buttons.component.css']
})
export class ToggleButtonsComponent implements OnInit {
  @Output() modeSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setMode(mode: number) {
    this.modeSelected.emit(mode);
}

}
