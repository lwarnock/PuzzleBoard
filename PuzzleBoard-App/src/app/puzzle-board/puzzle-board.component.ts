import { Component, OnInit, ViewChildren, QueryList} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ItemComponent } from '../item/item.component';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

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

  public items: ItemComponent[] = [

  ]

  initialHeldItems = 3
  maxHeldItems = 5

  constructor() {}

  ngOnInit(): void {
    for(let i = 0; i < this.initialHeldItems; i++)
    {
      this.items.push(new ItemComponent())
    }
  }

  public calcDistance()
  {
    let boardWidth = 80
    let itemWidth = 10
    let dist = 0

    
    dist = (boardWidth - (itemWidth * this.items.length)) / (this.items.length)

    console.info(dist/2)
    return dist/2
  }

  drop(event: CdkDragDrop<ItemComponent[]>) {
    if(this.items.length < this.maxHeldItems)
    {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
      }
    }
  }
}
