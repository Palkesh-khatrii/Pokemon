import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon } from '../redux/pokemonSlice.js';
import {  useNavigate } from 'react-router-dom';

export default function PokemonAdd() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [newPokemon, setNewPokemon] = useState({
      id: 1,
      name: '',
      breed: '',
      description: '',
    });
  
    const handleAddPokemon = () => {
        console.log(newPokemon);
      dispatch(addPokemon(newPokemon));
      setNewPokemon({
        id: newPokemon.id + 1,
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
                    value={newPokemon.name}
                    onChange={(e) => setNewPokemon({ ...newPokemon, name: e.target.value })}
                />
                <label>Breed:</label>
                <input
                    type="text"
                    value={newPokemon.breed}
                    onChange={(e) => setNewPokemon({ ...newPokemon, breed: e.target.value })}
                />
                <label>Description:</label>
                <input
                    type="text"
                    value={newPokemon.description}
                    onChange={(e) => setNewPokemon({ ...newPokemon, description: e.target.value })}
                />
                <button onClick={() => {handleAddPokemon();  navigate('/pokemon/list') }}>Add Pokémon</button>
            </div>
        </div>
    )
}
