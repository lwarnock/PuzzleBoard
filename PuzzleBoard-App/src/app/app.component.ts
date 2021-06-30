import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import settings from "../assets/Boards.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PuzzleBoard-App';
  public boards: any[] = []
  numbers = [
    1, 2, 3, 4, 5, 6
  ]

  ngOnInit(): void {
    this.boards = settings.puzzleBoards
    console.info(this.boards)
  }
}
