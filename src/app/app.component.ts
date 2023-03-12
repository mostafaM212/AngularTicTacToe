import { PlayItem } from './models/PlayItem';
import { Component } from '@angular/core';
import { TictaktoeService } from './tictaktoe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public toeService: TictaktoeService) {}

  onClickHandler = (item: PlayItem) => {
    if (this.toeService.turn % 2 == 0) {
      this.toeService.setValue(item.row, item.col, 'x');
    } else {
      this.toeService.setValue(item.row, item.col, 'o');
    }
  };
}
