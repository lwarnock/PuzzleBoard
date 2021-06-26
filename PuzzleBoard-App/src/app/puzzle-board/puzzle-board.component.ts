import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-puzzle-board',
  templateUrl: './puzzle-board.component.html',
  styleUrls: ['./puzzle-board.component.css']
})

/**
 * The PuzzleBoard component is the backboard that holds various items.
 * 
 * It contains a limited number of slots, that can hold one item at a time.
 */
export class PuzzleBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
