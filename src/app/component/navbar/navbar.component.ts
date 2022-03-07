import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NAVBARComponent implements OnInit {

 config = config


  constructor() { }

  ngOnInit(): void {
  }

}
