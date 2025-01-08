import { Component, Input } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Pokemon } from '../interfaces';
import { PokemonService } from '../pokemon-service.service';

@Component({
  selector: 'app-trainer-subscriber',
  templateUrl: './trainer-subscriber.component.html',
})
export class TrainerSubscriberComponent {
  @Input() trainerName?: number;

  public myPokemon?: Pokemon;
  public $publishedPokemon?: Observable<string> =
    this.pokemonService.$pokemonName;

  constructor(public pokemonService: PokemonService) {}

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
