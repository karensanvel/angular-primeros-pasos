import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
    public characters: Character []= [ 
        {
          id: uuid(), name: 'Krilin', power: 500
        },
        {
            id: uuid(), name: 'goku', power: 100000
        },
        {
            id: uuid(),name: 'vegeta', power: 90000
        }
      ]
    
      addCharacter(character: Character):void {
        const newCharacter: Character= { id: uuid(), ...character}

        this.characters.push(newCharacter)
      }
    
    //   onDeleteCharacter(index: number):void {
    //     this.characters.splice(index, 1)
      deleteCharacterById(id: string){
        this.characters= this.characters.filter(character => character.id !== id)
      }


    
}