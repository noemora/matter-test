import React, { useCallback, useEffect, useState } from 'react'
import PokemonCard from './PokemonCard';
import "./PokemonList.css"
import TopBar from './TopBar';

const PokemonList = () => {
  const fetchPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0');
    return res.json();
  }
  
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  
  const allPokemons = useCallback(
    async () => {
      const {results} = await fetchPokemons();
      setPokemons(results);
    }, []
  )
  
  const onChangeFilter = (e) => {
    const filtered = pokemons.filter(pokemon => pokemon.name.includes(e.target.value));
    setFilteredPokemons(filtered);
  }

  useEffect(() => {
    allPokemons()
  }, [])

  return (
    <>
      <TopBar onChangeFilter={onChangeFilter}/>
      <div className='container'>
        {pokemons && !filteredPokemons.length ?
          pokemons.map(pokemon => (
            <PokemonCard pokemon={pokemon} />
          ))
          : filteredPokemons.map(pokemon => (
            <PokemonCard pokemon={pokemon} />
          ))
        }
      </div>
    </>
  )
}

export default PokemonList;
