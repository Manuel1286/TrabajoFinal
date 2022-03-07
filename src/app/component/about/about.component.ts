import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class ABOUTComponent implements OnInit {

    config = config

  constructor() { }

  ngOnInit(): void {
  }

}
