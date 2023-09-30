import { Component } from '@angular/core';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokedex';
  logo = "../assets/logo.png";
  imgProfile: string = "../assets/photoPerfil.webp";
  links: string [] = ['Home', 'Pokedex', 'Video Game', 'Card Game', 'Eventos']

  pokemons: Pokemon[] = [
    new Pokemon(1,'pikachu',['Eletrico'],'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png','esse e o pikachu'),
    new Pokemon(2,'Bulbasaur',['Grama', 'Veneno'],'https://projectpokemon.org/home/uploads/monthly_2017_11/59fc692d1d498_large.GlobalLink.png.995015487811a5bf50e0e224cdc78b99.png','esse e o bulbasaur'),
    new Pokemon(3,'Ivysaur',['Fogo'],'https://projectpokemon.org/home/uploads/monthly_2017_11/59fc68ae34372_large.GlobalLink.png.18b010873ea008a6e26f2e0caed96d9d.png','esse e o Ivysaur'),
    new Pokemon(4,'Geodude',['Pedra'],'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png','esse e o Geodude'),
  ]



  selectedPokemon?: Pokemon;

  showDetails(pokemon: Pokemon){
    this.selectedPokemon = pokemon;
  }

  closeModal(){
    this.selectedPokemon = undefined;
  }

  //mostra os detalhes do pokemon selecionado
  monstrarDetalhes(pokemon: Pokemon){
    this.selectedPokemon = pokemon;
  }

//fecha a modal
fecharModal(){
  this.selectedPokemon = undefined;
}
filterValue: string = '';
filteredPokemons(): Pokemon[]{
  if (!this.filterValue){
    return this.pokemons;
  }
  return this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.filterValue.toLocaleLowerCase()));
}

pokemonsNoGrid: any[] = [];


menu: any;
}
