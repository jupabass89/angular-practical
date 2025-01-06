import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PokemonServiceService } from 'src/app/subjects-observables/pokemon-subscription/pokemon-service.service';

export interface Pokemon {
  id?: string;
  name?: string;
  urlImg?: string;
}
@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
})
export class SubscriberComponent implements OnInit {
  @Input() trainerName?: number;

  public myPokemon?: Pokemon;
  public $publishedPokemon?: Observable<string> =
    this.pokemonService.$pokemonName;

  constructor(public pokemonService: PokemonServiceService) {}

  ngOnInit(): void {
    this.setNewPokemon();
  }

  public setNewPokemon() {
    const rand = Math.floor(Math.random() * 10) + 1;

    this.pokemonService
      .getPokemonById(rand)
      .pipe(
        tap((pokemon) => {
          this.myPokemon = {
            ...pokemon,
            urlImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rand}.png`,
          };
        })
      )
      .subscribe();
  }

  public publishPokemon() {
    const rand = Math.floor(Math.random() * 10) + 1;
    this.pokemonService.publishPokemon(rand);
  }
}
