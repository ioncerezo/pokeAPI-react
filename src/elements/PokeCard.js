import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";

function PokeCard({ url }) {
  const [pokemonName, setPokemonName] = useState();
  const [pokemonID, setPokemonID] = useState();
  const [pokemonIMG, setPokemonIMG] = useState();
  const [pokemonTypes, setPokemonTypes] = useState([]);


  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((e) => {
        setPokemonName(e.name[0].toUpperCase() + e.name.slice(1));
        setPokemonID(e.id);
        setPokemonIMG(e.sprites.front_default);
        const typeList = [];
        for (let i = 0; i < e.types.length; i++) {
            typeList.push(e.types[i].type.name)
        }
        setPokemonTypes(typeList)
    
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg w-40">
      <div className="w-full h-32 bg-gray-200 flex items-center justify-center hover:opacity-80 transition duration-300 ease-in-out">
        <img
          className="rounded-t-lg "
          src={pokemonIMG}
          alt={`sprite of ${pokemonName}`}
        ></img>
      </div>
      <div className="p-5">
        <h6 className="text-gray-700 font-bold text-xs">N.º{pokemonID}</h6>
        <h5 className="text-gray-900 font-bold text-lg tracking-tight mb-2">
          {pokemonName}
        </h5>
        {pokemonTypes.map(type => <p>{type}</p>)}
      </div>
    </div>
  );
}

export default PokeCard;
