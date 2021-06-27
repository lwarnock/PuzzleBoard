import { Component, OnInit } from '@angular/core';
import { PuzzleBoardComponent } from '../puzzle-board/puzzle-board.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

/**
 * The Item component is the object held in PuzzleBoard slots.
 * 
 * This drag-and-drop element should be able to move between PuzzleBoards.
 */
export class ItemComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {

  }

  public value: number = Math.floor(Math.random() * 10)

}
