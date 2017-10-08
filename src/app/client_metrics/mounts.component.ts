import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { XwerxService } from '../services/xwerx.service';

@Component({
  selector: 'mounts-component',
  templateUrl: './mounts.component.html',
  styleUrls: ['./mounts.component.scss']
})

export class MountsComponent implements OnInit  {
  title = 'Last 12 Mounts';
  blue = '#69A3E5';
  grey = '#596169';
  data: any;
  canvas: any;
  errorMessage: string;
  @ViewChild('mountscanvas') canvasRef: ElementRef;


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
      let barwidth = W / 24;
      let barspace = W / 12;
      let color = this.blue;
      let bgcolor = this.grey;
      // Clear the canvas everytime a chart is drawn:
      ctx.clearRect(0, 0, barwidth, H);

      // generate bar bacgkrounds
      for (let i = 0; i < 22; i++) {
        let x = i * barspace;
        ctx.fillStyle = bgcolor;
        ctx.fillRect(x, 0, barwidth, H);
      }

      // color the bars to the approproate size from the data
      let mounts = data.clients.mounts;
      for (let i = 0; i < mounts.length; i++) {
        let x = i * barspace;
        let y = H * mounts[i] * 0.1;
        ctx.fillStyle = color;
        ctx.fillRect(x, H - y, barwidth, y);
      }
    }
  }
