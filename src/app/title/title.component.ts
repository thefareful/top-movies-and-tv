import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() title: any;

  @Output() visited: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  saveState(){
    this.visited.emit();
  }

}
