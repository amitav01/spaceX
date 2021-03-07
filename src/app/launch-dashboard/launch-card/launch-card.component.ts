import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss']
})
export class LaunchCardComponent implements OnInit {

  @Input() launch_data: LaunchData;
  constructor() { }

  ngOnInit() {
  }

}
