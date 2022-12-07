import { Component, Input, OnInit } from '@angular/core';
import { AddressData } from 'src/app/models/address-data.model';
import { AddressSectionData } from 'src/app/models/address-section-data.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() public addressData!: AddressData;

  constructor() { }

  ngOnInit() {
  }

}
function Import() {
  throw new Error('Function not implemented.');
}

