import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TESTIMONIALComponent implements OnInit {

  config =  config

  constructor() { }

  ngOnInit(): void {
  }

}
