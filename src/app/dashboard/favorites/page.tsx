import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from '../../../pokemons/components/PokemonGrid';


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
        <PokemonGrid pokemons={[]} />

        {/* {pokemons.map((pokemon) => {
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg`}
            width={100}
            height={100}
            alt="name"
          />
        </div>;
      })} */}
      </div>
    </div>
  );
}
