import { HttpClient } from '@angular/common/http'; //+
import { Injectable } from '@angular/core'; //+
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  
  constructor(private readonly http: HttpClient) {}

  public pokemonSubject: BehaviorSubject<string> = new BehaviorSubject(
    'picachu'
  );
  public $pokemonName: Observable<string> = this.pokemonSubject.asObservable();

  public publishPokemon(id: number) {
    this.getPokemonById(id).subscribe((data) => {
      this.pokemonSubject.next(data.name || '');
    });
  }

  public getPokemonById(id: number) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
