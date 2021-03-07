import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class UtilityService {

  private _launch_datas = new BehaviorSubject<LaunchData[]>([]);
  launch_datas = this._launch_datas.asObservable();

  constructor(private http: HttpClient) { }

  getLaunchDatas(launch_year: string, launch_success: string, land_success: string) {
    let url = environment.url;
    if(launch_year && launch_year !== 'null') url += '&launch_year=' + launch_year;
    if(launch_success && launch_success !== 'null') url += '&launch_success=' + launch_success;
    if(land_success && land_success !== 'null') url += '&land_success=' + land_success;

    return this.http.get(url);
  }

  setLaunchDatas(datas) {
    this._launch_datas.next(datas);
  }

}
