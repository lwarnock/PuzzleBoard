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

  private distance: number = 0

  constructor() {

  }

  ngOnInit(): void {

  }

  public spacingParameter(distance: number)
  {
    this.distance = distance
  }

  public calcDistance()
  {
    let boardWidth = 80
    let itemWidth = 10
    let dist = 0

    
    dist = (80 - (10 * 5)) / (5 + 1)

    console.info(dist)
    return dist/2
  }
}
