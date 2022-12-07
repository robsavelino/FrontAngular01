import { FeatureData } from './../../models/feature-data.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  @Input() public features!: FeatureData;
  
  constructor() { }

  ngOnInit() {
  }

}
