import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  launch_years: Array<number> = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  active_year: string;
  active_launch: string;
  active_landing: string;

  constructor(private apiCall: UtilityService) { }

  ngOnInit() {
    this.active_year = sessionStorage.getItem('active_year');
    this.active_launch = sessionStorage.getItem('active_launch');
    this.active_landing = sessionStorage.getItem('active_landing');
    const datas = localStorage.getItem('launch_datas');
    if(datas) this.apiCall.setLaunchDatas(JSON.parse(datas));
    this.getLaunchDatas();
  }

  getLaunchDatas() {
    this.apiCall.getLaunchDatas(this.active_year, this.active_launch, this.active_landing).subscribe(
      (res: LaunchData[]) => { 
        this.apiCall.setLaunchDatas(res);
        console.log(res);
        localStorage.setItem('launch_datas', JSON.stringify(res));
      }
    );
  }

  filterByYear(event) {
    const target = event.target;
    if(target.tagName !== 'BUTTON') return false;
    if(this.active_year !== target.value) this.active_year = target.value;
    else this.active_year = null;
    sessionStorage.setItem('active_year', this.active_year + '');
    this.getLaunchDatas();
    event.stopPropagation();
  }

  filterByLaunch(event) {
    const target = event.target;
    if(target.tagName !== 'BUTTON') return false;
    if(this.active_launch !== target.value) this.active_launch = target.value;
    else this.active_launch = null;
    sessionStorage.setItem('active_launch', this.active_launch);
    this.getLaunchDatas();
    event.stopPropagation();
  }

  filterByLanding(event) {
    const target = event.target;
    if(target.tagName !== 'BUTTON') return false;
    if(this.active_landing !== target.value) this.active_landing = target.value;
    else this.active_landing = null;
    sessionStorage.setItem('active_landing', this.active_landing);
    this.getLaunchDatas();
    event.stopPropagation();
  }

}
