import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { XwerxService } from '../services/xwerx.service';

@Component({
  selector: 'active-clients-component',
  templateUrl: './activeclients.component.html',
  styleUrls: ['./activeclients.component.scss']
})

export class ActiveClientsComponent implements OnInit {
  title: string = "Active Clients";
  blue: string = "#69A3E5";
  grey: string = "#596169";
  canvas: any;
  data: any = [];
  errorMessage: string;
  activeClients: number;
  test: string = "test string";

  @ViewChild('activeclients') canvasRef:ElementRef;


  constructor(private _xwerxService: XwerxService) { }

  ngOnInit() {
    this.getData();
    this.canvas = this.canvasRef.nativeElement;
  }


  getData() {
    this._xwerxService.getData().subscribe(
      resData => {
        this.data = resData;
        this.draw(resData);
      },
      error => this.errorMessage = <any>error);
  }
  draw(data: any) {
      const ctx = this.canvas.getContext('2d');
      let W = this.canvas.width;
      let H = this.canvas.height;
      let color = this.blue
      let bgcolor = this.grey;
      // Clear the canvas everytime a chart is drawn
      ctx.clearRect(0, 0, W, H);
      ctx.beginPath();
      ctx.strokeStyle = bgcolor;
      ctx.lineWidth = 30;
      // background arc
      ctx.arc(W/2, H, W/3, Math.PI, 0, false);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 30;
      // guage arc
      ctx.arc(W/2, H, W/3, Math.PI, -1, false);
      ctx.stroke();

      ctx.fillStyle = color;
      ctx.font = '50px bebas';
      ctx.textBaseline = 'alphabetic';
      ctx.textAlign = 'center';
      ctx.fillText(data.clients.activeclients, W/2, H);
    }
}
