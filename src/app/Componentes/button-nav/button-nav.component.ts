import { Component, OnInit, Input } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-button-nav',
  templateUrl: './button-nav.component.html',
  styleUrls: ['./button-nav.component.scss']
})
export class ButtonNavComponent implements OnInit {
  //input building 
  @Input() text: string;
  @Input() route: string;
  @Input() background: string = "#fff" ;



  constructor() { }

  ngOnInit() {
  }

}
