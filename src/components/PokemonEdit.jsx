import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatePokemon  } from '../redux/pokemonSlice.js';
import { useParams } from 'react-router-dom';

export default function PokemonEdit() {
    const dispatch = useDispatch();
    const params = useParams();
    const pokemon = useSelector((state) => state.pokemon.pokemons);

    const [newPokemon, setNewPokemon] = useState({
        id: '',
        name: '',
        breed: '',
        description: '',
    });

    useEffect(() => {
        let poke = pokemon.filter((p) => p.id === Number(params.id))[0]
        console.log(poke)
        setNewPokemon({
            id: poke.id,
            name: poke.name,
            breed: poke.breed,
            description: poke.description,
        });
    }, [])


    const handleAddPokemon = () => {
        console.log(newPokemon);
        dispatch(updatePokemon(newPokemon))
        setNewPokemon({
            id: '',
            name: '',
            breed: '',
            description: '',
        });
    };


    return (
        <div>
            <div>
                <h2>Add New Pokémon</h2>
                <label>Name:</label>
                <input
                    type="text"
                    value={newPokemon?.name}
                    onChange={(e) => setNewPokemon({ ...newPokemon, name: e.target.value })}
                />
                <label>Breed:</label>
                <input
                    type="text"
                    value={newPokemon?.breed}
                    onChange={(e) => setNewPokemon({ ...newPokemon, breed: e.target.value })}
                />
                <label>Description:</label>
                <input
                    type="text"
                    value={newPokemon?.description}
                    onChange={(e) => setNewPokemon({ ...newPokemon, description: e.target.value })}
                />
                <button onClick={handleAddPokemon}>Update Pokémon</button>
            </div>
        </div>
    )
}
