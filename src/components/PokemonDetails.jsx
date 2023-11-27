// PokemonDetails.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deletePokemon } from '../redux/pokemonSlice';

const PokemonDetails = () => {


  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pokemons } = useSelector((state) => state.pokemon);
  const pokemon = pokemons.find((item) => item.id === Number(id));

  if (!pokemon) {
    return <div>Pokémon not found</div>;
  }



  console.log(pokemon)

  return (
    <div>
      <h2>Pokémon Details</h2>
      <p>
        <strong>Name:</strong> {pokemon.name}
      </p>
      <p>
        <strong>Breed:</strong> {pokemon.breed}
      </p>
      <p>
        <strong>Description:</strong> {pokemon.description}
      </p>
      <button onClick={() => navigate(`/pokemon/edit/${pokemon.id}`)}>Edit</button>
      <button onClick={() =>  {dispatch(deletePokemon(pokemon.id)); navigate('/') }}>Remove</button>
    </div>
  );
};

export default PokemonDetails;
