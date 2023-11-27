// PokemonList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const PokemonList = () => {

  const newPoke = useSelector((state) => state.pokemon.pokemons);
  console.log(newPoke)

  return (
    <div>
      <h2>List of Pokémon</h2>
      <ul>
        {newPoke?.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/detail/${pokemon.id}`}>
              {pokemon?.name} - {pokemon?.breed}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
