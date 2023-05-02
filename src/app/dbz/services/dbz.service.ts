import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {
  personajes: Personaje[] = [
    {
      id: uuid(),
      nombre: 'Goku',
      poder: 15000
    },
    {
      id: uuid(),
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  onNewCharacter(event: Personaje){

  const newCharacter: Personaje = {
      id: uuid(),
      ...event
    
  }
    this.personajes.push(newCharacter);
  }

  deleteCharacterById(id: string){
    this.personajes = this.personajes.filter(character => character.id !== id);
  }
}
