import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Deadpool', 'Dinamo', 'Antman'];
  public lastErasedHeroe: string = '';

  borrarHeroe(){
    console.log("Borrando...");
    this.lastErasedHeroe = this.heroes.pop() || '';

  }
}
