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
          // <div
          //   key={pokemon.name}
          //   className="flex flex-col gap-2 items-center justify-center"
          // >
          //   {/* <Image
          //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          //     width={100}
          //     height={100}
          //     alt="name"
          //   /> */}
          //   <span>{pokemon.name}</span>
          //</div>
        ))}
    </div>
  )
}

