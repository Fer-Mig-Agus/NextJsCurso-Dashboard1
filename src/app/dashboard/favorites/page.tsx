import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/pokemons";
import { FavoritePokemons } from "@/pokemons";
import { IoHeartOutline } from 'react-icons/io5';


export const metadata = {
 title: 'Favoritos',
 description: '151 Pokemons listos para ver',
};



export default async function FavoritePage() {
  

  return (
    <div className="flex flex-col">
      <span className="text-3xl my-2">
        Pokemons Favoritos
      </span>
      <div className="flex flex-wrap w-full gap-10">

        <FavoritePokemons/>

      </div>
    </div>
  );
}

