import { Component, OnInit } from '@angular/core';
import { withNaming } from '../../assets/library/bemcss';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cn = withNaming('header')
  constructor() { }

  ngOnInit(): void {
  }

}
