import { FormsModule } from '@angular/forms';
import { Component, NgModule, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();

  searchItem(value: string) {
    this.searchEvent.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
