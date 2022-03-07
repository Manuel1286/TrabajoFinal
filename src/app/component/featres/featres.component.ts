import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';

@Component({
  selector: 'app-featres',
  templateUrl: './featres.component.html',
  styleUrls: ['./featres.component.css']
})
export class FEATRESComponent implements OnInit {

  config = config

  constructor() { }

  ngOnInit(): void {
  }

}
