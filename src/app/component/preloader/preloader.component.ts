import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PRELOADERComponent implements OnInit {

  config = config

  constructor() { }

  ngOnInit(): void {
  }

}
