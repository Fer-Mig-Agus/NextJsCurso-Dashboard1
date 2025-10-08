

import { SimplePokemon } from '@/pokemons';
import { createSlice } from '@reduxjs/toolkit'


interface PokemonsState{
    [key:string]:SimplePokemon,
}

const initialState:PokemonsState = {
    '1': {id:'1',name:'bulbasour'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {}
});

export const {} = pokemonsSlice.actions

export default pokemonsSlice.reducer