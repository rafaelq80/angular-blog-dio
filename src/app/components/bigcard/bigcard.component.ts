import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bigcard',
  templateUrl: './bigcard.component.html',
  styleUrls: ['./bigcard.component.css']
})
export class BigcardComponent {

  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "";
  @Input()
  id: string = "0";
  constructor() { }

  ngOnInit() {}

}
