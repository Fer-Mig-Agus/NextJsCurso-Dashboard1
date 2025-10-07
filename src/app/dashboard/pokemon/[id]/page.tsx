import { Pokemon } from "@/pokemons";
import { Metadata } from "next";



interface Props{
    params:{id:string};
}

export async function generateMetadata({params}:Props):Promise<Metadata> {

    const {id, name} = await getPokemon(params.id)
    
    return {
        title:`#${id}-${name}`,
        description:`Pagina del Pokemon: ${name}`

    }
}

const getPokemon= async (id:string):Promise<Pokemon> => {

    const pokemon=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
        cache:'force-cache' // TODO: cambiar esto en un rato
    }).then(res=>res.json());

    console.log(pokemon)

    return pokemon

    
}



export default async function PokemonPage({params}:Props) {



    const pokemon = await getPokemon(params.id);
    
  return (
    <div>
      <h1>Hello Pokemon {params.id} Page</h1>
      <div>
        
        <span>{pokemon.name}</span>
      </div>
    </div>
  );
}