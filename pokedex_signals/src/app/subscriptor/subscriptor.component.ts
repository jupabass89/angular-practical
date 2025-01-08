import { Component, inject, OnInit, signal } from '@angular/core';
import { tap } from 'rxjs';
import { pokedexUrl } from '../constants';
import { pokemonImg } from './../constants';
import { PokemonService } from './../pokemon-service.service';

export interface Pokemon {
  id?: number;
  name?: string;
  urlImg?: string;
}

@Component({
  selector: 'app-subscriptor',
  imports: [],
  templateUrl: './subscriptor.component.html',
  styleUrl: './subscriptor.component.scss',
  standalone: true,
})
export class SubscriptorComponent implements OnInit {
  public pokemonService = inject(PokemonService);
  public publishedPokemon = this.pokemonService.pokemonSignal;
  public currentPokemon = signal<Pokemon>({});
  public pokedexUrl = pokedexUrl;

  ngOnInit(): void {
    this.nextPokemon();
  }

  public publishPokemon() {
    this.pokemonService.publishPokemon(this.currentPokemon());
    window.alert('Pokemon published successfully!');
  }

  public nextPokemon() {
    const currentId = (this.currentPokemon().id || 0) + 1;
    this.setPokemon(currentId);
  }

  public prevPokemon() {
    const currentId = (this.currentPokemon().id || 0) - 1;
    this.setPokemon(currentId);
  }

  private setPokemon(id: number) {
    this.pokemonService
      .getPokemonById(id)
      .pipe(
        tap((pokemon) => {
          const newPokemon: Pokemon = {
            ...pokemon,
            urlImg: pokemonImg.replace('[id]', id.toString() || '0'),
          };
          this.currentPokemon.set(newPokemon);
        })
      )
      .subscribe();
  }
}
