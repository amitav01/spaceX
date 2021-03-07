import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-launch-dashboard',
  templateUrl: './launch-dashboard.component.html',
  styleUrls: ['./launch-dashboard.component.scss']
})
export class LaunchDashboardComponent implements OnInit {

  launch_datas: LaunchData[] = [];
  constructor(private apiCall: UtilityService) { }

  ngOnInit() {   
    this.apiCall.launch_datas.subscribe((res: LaunchData[]) => {
      this.launch_datas = res;
    });
  }

}
