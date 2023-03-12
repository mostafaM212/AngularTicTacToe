import { PlayItem } from './../models/PlayItem';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-tictaktoe',
  templateUrl: './tictaktoe.component.html',
  styleUrls: ['./tictaktoe.component.css'],
})
export class TictaktoeComponent implements OnInit, OnChanges {
  @Input('value') value: string = '';
  @Input('row') row: number = -1;
  @Input('col') col: number = -1;
  @Output('itemClick') itemClick: EventEmitter<PlayItem> =
    new EventEmitter<PlayItem>();

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  onClickHandler = () => {
    let item = new PlayItem(this.value, this.row, this.col);
    this.itemClick.emit(item);
  };
}
