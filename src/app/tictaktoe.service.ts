import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TictaktoeService {
  play: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  turn: number = 0;
  gameCompleted: boolean = false;
  winPlayer: number = -1;
  constructor() {}

  setValue = (row: number, col: number, value: string) => {
    if (this.turn % 2 == 0) {
      value = 'X';
    } else {
      value = 'O';
    }
    this.play = this.play.map((ro, index) => {
      if (row == index && ro[col] === '') {
        ro[col] = value;
        this.turn = this.turn + 1;
        this.checkGameFinished();
      }
      return ro;
    });
    console.log(this.play);
    return this.play;
  };

  checkGameFinished = () => {
    if (this.turn >= 9) {
      this.gameCompleted = true;
    }
    this.checkPlayerWinByCol();
    this.checkPlayerWinByRow();
    this.checkPlayerWinByXForm();
  };
  checkPlayerWinByCol = (): boolean => {
    let gameFinished: boolean = false;
    this.play.map((row, index) => {
      if (row[0] == row[1] && row[1] == row[2] && row[0] != '') {
        this.gameCompleted = true;
        this.winPlayer = this.turn % 2;
      }
      return row;
    });

    return gameFinished;
  };

  checkPlayerWinByRow = (): boolean => {
    let gameFinished: boolean = false;

    if (
      this.play[0][0] === this.play[1][0] &&
      this.play[0][0] === this.play[2][0] &&
      this.play[0][0] !== ''
    ) {
      this.gameCompleted = true;
      this.winPlayer = this.turn % 2;
    }

    if (
      this.play[0][1] === this.play[1][1] &&
      this.play[0][1] === this.play[2][1] &&
      this.play[0][1] !== ''
    ) {
      this.gameCompleted = true;
      this.winPlayer = this.turn % 2;
    }
    if (
      this.play[0][2] === this.play[1][2] &&
      this.play[0][2] === this.play[2][2] &&
      this.play[0][2] !== ''
    ) {
      this.gameCompleted = true;
      this.winPlayer = this.turn % 2;
    }
    return gameFinished;
  };

  checkPlayerWinByXForm = () => {
    if (
      this.play[0][0] === this.play[1][1] &&
      this.play[1][1] === this.play[2][2] &&
      this.play[2][2] !== ''
    ) {
      this.gameCompleted = true;
      this.winPlayer = this.turn % 2;
    }
    if (
      this.play[0][2] === this.play[1][1] &&
      this.play[0][2] === this.play[2][0] &&
      this.play[1][1] !== ''
    ) {
      this.gameCompleted = true;
      this.winPlayer = this.turn % 2;
    }
  };

  restGame = () => {
    this.play = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.turn = 0;
    this.winPlayer = -1;
    this.gameCompleted = false;
  };
}
