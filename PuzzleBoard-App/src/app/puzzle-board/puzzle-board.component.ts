import { Component, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


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

  @Input()
  public settings: any
  @Output()

  public items: Item[] = [

  ]

  initialHeldItems = 3
  maxHeldItems = 5

  constructor() {}

  ngOnInit(): void {
    this.initialHeldItems = this.settings.Items[0].amount
    for(let i = 0; i < this.initialHeldItems; i++)
    {
      this.items.push(new Item(this.items))
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

  drop(event: CdkDragDrop<Item[]>) {
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

/**
 * The Item component is the object held in PuzzleBoard slots.
 * 
 * These items are their own class as they could serve a purpose outside of just being holder items.
 * If this was further built to which items have more purpose, this class would hold any values and functions relating to said purpose.
 */
  class Item
  {
    private parentArray: Item[]

    constructor(parentArray: Item[]) {
      this.parentArray = parentArray
    }
  }
