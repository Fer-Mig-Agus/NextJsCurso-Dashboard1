import { SimplePokemon } from "@/pokemons"
import PokemonCard from "./PokemonCard";

interface Props{
    pokemons: SimplePokemon[];
}

export const PokemonGrid = ({pokemons}:Props) => {
  return (
    <div className="flex flex-wrap w-full gap-10">
      {pokemons.map((pokemon) => (

          <PokemonCard key={pokemon.id} pokemon={pokemon}/>

        ))}
    </div>
  )
}

