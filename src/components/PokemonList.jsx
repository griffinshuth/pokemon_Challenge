import React, { useEffect, useState } from 'react';
import PaginationButton from './PaginationButton';
import { Link } from 'react-router-dom';

const PAGE_LIMIT = 20;

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemonList = async (page) => {
    const offset = (page - 1) * PAGE_LIMIT;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${PAGE_LIMIT}&offset=${offset}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon list');
      }
      const data = await response.json();
      setPokemonList(data.results);
      setTotalPages(Math.ceil(data.count / PAGE_LIMIT));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonList(currentPage);
  }, [currentPage]);

  return (
    <div style={{ margin: '0 auto', padding: '16px', maxWidth: '800px' }}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '-8px' }}>
        {pokemonList.map(pokemon => {
          const pokemonName = pokemon.name;
          const pokemonId = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
          return (
            <div key={pokemonName} style={{ width: '25%', padding: '8px' }}>
              <Link to={`/pokemon/${pokemonName}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ border: '1px solid #ddd', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img
                    src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
                    alt={pokemonName}
                    style={{ width: '100px', height: '100px' }}
                  />
                  <h1 style={{ textAlign: 'center', textTransform: 'capitalize' }}>{pokemonName}</h1>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <PaginationButton
          type="Previous"
          page={currentPage}
          setPage={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        />
        <span style={{ padding: '8px 16px', margin: '0 4px' }}>{currentPage} / {totalPages}</span>
        <PaginationButton
          type="Next"
          page={currentPage}
          setPage={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        />
      </div>
    </div>
  );
};

export default PokemonList;