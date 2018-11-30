import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private state: {mode: number, searchText: string} = {mode: 0, searchText: ""};

  constructor() { }

  saveState(mode: number, searchText: string){
    this.state.mode = mode;
    this.state.searchText = searchText;
  }

  getState(){
    return this.state;
  }
}
