import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  longText: string =''

  @Input() bigger:string = 'small'

  @Input() titulo: string = 'título'

  @Input() preco: string = '19.99'

  @Input() storage: string = 'x GB'

  @Input() users: string = '1'

  @Input() upto: string = '1'

  @Output() learnMore: EventEmitter<any> = new EventEmitter<any>()

  fLearn(){
    this.learnMore.emit()
  }
}
