import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
        <header>
            <div style="padding:5px">
              <h1>SpaceX Launch Programs</h1>
            </div>
        </header>
  `,
  styles: [`
      h1 {
        font-size: 35px;
        font-weight: 700;
      }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
