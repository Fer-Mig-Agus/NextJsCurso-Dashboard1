"use client";
import React, { useState } from "react";
import { PokemonGrid } from "./PokemonGrid";
import { useAppSelector } from "@/store";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );
  
  const [pokemons, setPokemons] = useState(favoritePokemons);


  return (
    <div className="flex flex-col justify-center items-center w-full">

        {
            pokemons.length === 0 ? (
                <NoFavorites/>
            ) : (
                <PokemonGrid pokemons={pokemons}  />
            )
        
        }

      
    </div>
  );
};


export const NoFavorites=()=>{
  return(
    <div className="flex flex-col h-[50vh]  w-full items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>

    </div>
  )
}