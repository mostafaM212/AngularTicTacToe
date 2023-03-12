import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-two',
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.css'],
})
export class WidgetTwoComponent implements OnInit {
  name: string = '';
  constructor() {}

  ngOnInit(): void {}
}
