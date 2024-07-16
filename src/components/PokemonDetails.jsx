import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemonDetails = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon details');
      }
      const data = await response.json();
      setPokemonDetails(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, [name]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ margin: '0 auto', padding: '16px', maxWidth: '600px' }}>
      {pokemonDetails && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${pokemonDetails.id}.png`}
            alt={pokemonDetails.name}
            style={{ width: '256px', height: '256px' }}
          />
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', textTransform: 'capitalize' }}>{pokemonDetails.name}</h1>
          <p>ID: {pokemonDetails.id}</p>
          <p>Height: {pokemonDetails.height}</p>
          <p>Weight: {pokemonDetails.weight}</p>
          <p>Type: {pokemonDetails.types.map(type => type.type.name).join(', ')}</p>
          <p>Abilities: {pokemonDetails.abilities.map(ability => ability.ability.name).join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;