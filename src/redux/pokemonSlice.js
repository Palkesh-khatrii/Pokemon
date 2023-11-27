import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pokemons: [
        // { id: 1, name: 'ankit mdfdf', breed: 'asjkdkj ', description: 'asdasdasd' },
        // { id: 2, name: 'ankit artrt', breed: 'asjkdkj ', description: 'asdasdasd' },
        // { id: 3, name: 'ankitasd ', breed: 'asjkdkj ', description: 'asdasdasd' },
    ]
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        addPokemon: (state, action) => {
            state.pokemons.push(action.payload);
        },
        updatePokemon: (state, action) => {
            const { id, name, breed, description } = action.payload;
            const index = state.pokemons.findIndex((pokemon) => pokemon.id === id);
            if (index !== -1) {
                state.pokemons[index] = { id, name, breed, description };
            }
        },
        deletePokemon: (state, action) => {
            console.log(state, action.payload)
            state.pokemons = state.pokemons.filter(pokemon => pokemon.id !== action.payload);
        },
        clearNewPokemon: (state) => {
            state.pokemons = [];
        },
    },
});

export const { addPokemon, updatePokemon, clearNewPokemon, deletePokemon } = pokemonSlice.actions;
// export const selectPokemons = (state) => state.pokemon.pokemons;
// export const selectNewPokemon = (state) => state.pokemon.newPokemon;
export default pokemonSlice.reducer;
