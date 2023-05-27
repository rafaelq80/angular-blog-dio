import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smallcard',
  templateUrl: './smallcard.component.html',
  styleUrls: ['./smallcard.component.css']
})
export class SmallcardComponent {

  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  id: string = "0";

  constructor() { }

  ngOnInit() {}

}
