import { Component, Input } from '@angular/core';


@Component({
  selector: 'importance-component',
  templateUrl: './importance.component.html',
  styleUrls: ['./importance.component.scss']
})

export class ImportanceComponent {
  @Input() importance: number;
  imgSrc: string;
  text: string;
  low = './img/importance-low.png';
  mid = './img/importance-mid.png';
  high = './img/importance-high.png';

  ngOnChanges(): void {
    if (this.importance==1) {
      this.imgSrc = this.high;
      this.text = "very";
    }
    if (this.importance==2) {
      this.imgSrc = this.mid;
      this.text = "mid";
    }
    if (this.importance==3) {
      this.imgSrc = this.low;
      this.text = "low";
    }
  }
}
