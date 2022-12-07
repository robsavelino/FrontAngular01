import { FeatureData } from './../../models/feature-data.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  @Input() public features!: FeatureData[];
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.elementCreated.emit('features');
  }
}
