import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TEAMComponent implements OnInit {

  config = config

  constructor() { }

  ngOnInit(): void {
  }

}
