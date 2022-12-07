import { FormsModule } from '@angular/forms';
import { Component, NgModule, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public value = '';

  @Output() searchEvent = new EventEmitter<string>();

  searchItem() {
    this.searchEvent.emit(this.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
