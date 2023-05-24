import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Personaje } from 'src/app/shared/interfaces/Personajes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  charactersList: Personaje[] | undefined;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getAllCharacters().subscribe((resp) => this.charactersList = resp);
  }
}
