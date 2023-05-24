import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/shared/interfaces/Personajes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() personaje: Personaje | undefined; 
  constructor() { }

  ngOnInit(): void {
  }

}
