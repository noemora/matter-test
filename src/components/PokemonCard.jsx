import React, { useCallback, useEffect, useState } from "react";
import "./PokemonCard.css"

const PokemonCard = ({ pokemon }) => {
  const capitalized = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const fetchPokemonInfo = async () => {
    const res = await fetch(pokemon.url);
    return res.json();
  }

  const [pokemonId, setPokemonId] = useState(0);
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState([]);

  const pokeInfo = useCallback(
    async () => {
       const { id, sprites, types } = await fetchPokemonInfo();
       const image = sprites.front_default;
       setPokemonId(id);
       setPokemonImage(image)
       setPokemonTypes(types);
    }
  )

  useEffect(() => {
    pokeInfo()
  })

  return(
    <div className="card">
      <div className="title">
        <p>{capitalized(pokemon.name)}</p>
        <p>{pokemonId}</p>
      </div>
      <div className="image">
        <img src={pokemonImage} alt="pokemonImage" />
      </div>
      <div className="types">
        {pokemonTypes.map(type => (
          <p className={`type-label ${type.type.name}`}>{capitalized(type.type.name)}</p>
        ))}
      </div>
    </div>
  )
}

export default PokemonCard;