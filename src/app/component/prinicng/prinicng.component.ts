import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';

@Component({
  selector: 'app-prinicng',
  templateUrl: './prinicng.component.html',
  styleUrls: ['./prinicng.component.css']
})
export class PRINICNGComponent implements OnInit {

  config = config
  
  constructor() { }

  ngOnInit(): void {
  }

}
