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

  imageUrl = ""
  id = -1
  xpos = 0
  ypos = 0

  public items: Item[] = [

  ]

  initialHeldItems = 0
  maxHeldItems = 0

  constructor() {}

  ngOnInit(): void {
    this.imageUrl = this.settings.image
    this.id = this.settings.id
    this.xpos = this.settings.xpos
    this.ypos = this.settings.ypos

    for(let i = 0; i < this.settings.slots.length; i++)
    {
      this.maxHeldItems += this.settings.slots[i].amount
    }

    for(let i = 0; i < this.settings.Items.length; i++)
    {
      this.initialHeldItems += this.settings.Items[i].amount
    }

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
