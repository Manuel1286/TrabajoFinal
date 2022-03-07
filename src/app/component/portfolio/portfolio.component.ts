import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PORTFOLIOComponent implements OnInit {

  config = config

  constructor() { }

  ngOnInit(): void {
  }

}
