import { Component, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../../interfaces/character.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input () public characterList: Personaje[] = [{
    //Si no recibe nada en el input este seria el valor por defecto
    id:'',
    nombre: "Trunk",
    poder: 10
  }];
  @Output () onDelete: EventEmitter<string> = new EventEmitter();



deleteCharacterById(id?: string) {
  if(!id) return;
  this.onDelete.emit(id);
}



}
