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
    {
      //Filling array with duds, will remove once actual objects are generated. Wanting this system to run on heldItems but looking for a way to update this accurately
      this.items.push(new ItemComponent)
      this.items[i].spacingParameter(this.maxHeldItems)
    }
      
  }

  @ViewChildren(ItemComponent) query!: QueryList<ItemComponent>;

  ngAfterViewInit(): void {
    
    while(this.items.length > 0)
      this.items.pop()

    this.query.forEach(element => {
      this.items.push(element)
    });
  }


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
