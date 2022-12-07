import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AboutSectionData } from 'src/app/models/about-section-data.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() public aboutData!: AboutSectionData;
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() {}

  ngOnInit() {
    this.elementCreated.emit('about');
  }
}
