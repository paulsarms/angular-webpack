import { Component } from '@angular/core';
import { XwerxService } from './services/xwerx.service';


import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ XwerxService ]
})
export class AppComponent {
  title = 'Xwerx Test';
}
