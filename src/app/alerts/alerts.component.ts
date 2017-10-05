import { Component } from '@angular/core';
import { XwerxService } from '../services/xwerx.service';

@Component({
  selector: 'alerts-component',
  templateUrl: './alerts.component.html'
})

export class AlertsComponent {
  data:any =[];
  errorMessage: string;
  constructor(private _xwerxService: XwerxService) { }

    ngOnInit(): void {
      this.getData();
      console.log("FUUUUUCCCCCKK");
      console.log(this.data[0].name);
    }

    getData(): void {
      this._xwerxService.getData().subscribe(
        resData => this.data = resData,
        error => this.errorMessage = <any>error);
    }
}
