import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-widget-one',
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.css'],
})
export class WidgetOneComponent implements OnChanges {
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('the change is occure', changes);
  }
  @Input() name: string = '';
}
