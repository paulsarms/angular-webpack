import { Component } from '@angular/core';
import { XwerxService } from '../services/xwerx.service';

@Component({
  selector: 'alerts-component',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})

export class AlertsComponent {
  title: string = "Alerts";
  data:any;
  errorMessage: string;
  constructor(private _xwerxService: XwerxService) { }

    ngOnInit(): void {
      this.getData();
    }

    getData(): void {
      this._xwerxService.getData().subscribe(
        resData => this.data = resData,
        error => this.errorMessage = <any>error);
    }

}
