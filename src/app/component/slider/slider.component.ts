import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SLIDERComponent implements OnInit {

  config = config

  constructor() { }

  ngOnInit(): void {
  }

}
