import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

constructor( private dbzService: DbzService) {}
get characters(): Personaje[] {
  return [...this.dbzService.personajes];
}

onDeleteCharacter( id:string){
  this.dbzService.deleteCharacterById(id);
}

onNewCharacter(event: Personaje){
  this.dbzService.onNewCharacter(event);
}

}
