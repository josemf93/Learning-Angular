import { Component, OnInit, Output } from '@angular/core';
import { Personaje } from '../../interfaces/character.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  @Output () emitCharacter: EventEmitter<Personaje> = new EventEmitter();
  
    public character: Personaje = {
    nombre: "",
    poder: 0
  }


  ngOnInit(): void {
  
  }

  onEmitCharacter(){
    if( this.character.nombre.length===0){
      console.log("no se puede enviar vacio");
      return;
    }else{
      this.emitCharacter.emit(this.character);
    }

    this.character = {nombre: '', poder: 0}
  }

}
