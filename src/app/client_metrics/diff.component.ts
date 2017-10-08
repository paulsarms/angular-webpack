import { Component, ViewChild, ElementRef } from '@angular/core';
import { XwerxService } from '../services/xwerx.service';

@Component({
  selector: 'diff-component',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.scss']
})

export class DiffComponent {
  title = 'Increase';
  blue = '#69A3E5';
  grey = '#596169';
  data: any;
  canvas: any;
  errorMessage: string;
  @ViewChild('diffcanvas') canvasRef: ElementRef;


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
    let color = this.blue;
    ctx.fillStyle = color;
    ctx.font = '50px bebas';
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'center';
    ctx.fillText(data.clients.diff, W/2, H);
    }
  }
