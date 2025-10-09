import { Action, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import {RootState} from '../index'

export const localStorageMiddleware:any=(state:MiddlewareAPI)=>{
    return(next:Dispatch)=>(action:Action)=>{
        next(action);

        console.log({state: state.getState()});



        if (action.type === 'pokemons/toggleFavorite') {
            const {pokemons}= state.getState() as RootState;
                localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons.favorites));
                return;
        }

    }
}

