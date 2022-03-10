import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {

  @Output() mySlider: EventEmitter<any> = new EventEmitter<any>()

  emitEvent(){
    this.mySlider.emit()
  }
}
