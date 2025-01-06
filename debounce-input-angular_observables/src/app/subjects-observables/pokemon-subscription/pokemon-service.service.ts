import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from './subscriber.component';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  public pokemonSubject: BehaviorSubject<string> = new BehaviorSubject(
    'picachu'
  );
  public $pokemonName: Observable<string> = this.pokemonSubject.asObservable();

  constructor(private http: HttpClient) {}

  public publishPokemon(id: number) {
    this.getPokemonById(id).subscribe((data) => {
      this.pokemonSubject.next(data.name || '');
    });
  }

  public getPokemonById(id: number) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
