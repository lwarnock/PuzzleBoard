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

  heldItems = 3
  maxHeldItems = 5

  constructor() {}

  ngOnInit(): void {
    for(let i = 0; i < this.heldItems; i++)
      this.items.push(new ItemComponent)
  }

  
  // drop(event: CdkDragDrop<any>) {


  //   if (event.previousContainer === event.container) 
  //   {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //     console.log(event.container)
  //   } 
  //   else 
  //   {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }

  colour = [
    'red',
    'blue',
    'green'
  ];

  drop(event: CdkDragDrop<any>) {
    console.info(this.items.length)
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
