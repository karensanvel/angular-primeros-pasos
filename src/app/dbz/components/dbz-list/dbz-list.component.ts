import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DbzListComponent {
  @Input('listCharacters') list: Character[]=[];
  @Output('deleteItem') deleteCharacter:EventEmitter<string> = new EventEmitter()

  public characterList: Character[] =[
    {name: 'Trunks', power:5000}
  ]

  ondeDeleteCharacter(id?: string):void{
    // 
    if(!id) return // si no tengo un id no hago nada
    this.deleteCharacter.emit(id)
  }
}
