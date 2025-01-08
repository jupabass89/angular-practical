import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Pokemon } from './subscriptor/subscriptor.component';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);
  public pokemonSignal = signal<Pokemon | undefined>(undefined);

  public getPokemonById(id: number) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  public publishPokemon(pokemon: Pokemon) {
    this.pokemonSignal.set(pokemon);
  }
}
