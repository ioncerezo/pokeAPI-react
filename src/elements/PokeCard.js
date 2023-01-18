import React, { useState, useEffect } from "react";
import TypeBadge from "./TypeBadge";

function PokeCard({ url, name }) {
  const [pokemonName, setPokemonName] = useState();
  const [pokemonID, setPokemonID] = useState();
  const [pokemonIMG, setPokemonIMG] = useState();
  const [pokemonWeight, setPokemonWeight] = useState();
  const [pokemonBackIMG, setPokemonBackIMG] = useState();
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonDescription, setPokemonDescription] = useState();
  const [cardOpen, setCardOpen] = useState(false);
  const url2 = "https://pokeapi.co/api/v2/pokemon-species/" + name;

  function sentenceCase(input, lowercaseBefore) {
    input = input === undefined || input === null ? "" : input;
    if (lowercaseBefore) {
      input = input.toLowerCase();
    }
    return input
      .toString()
      .replace(/(^|\. *)([a-z])/g, function (match, separator, char) {
        return separator + char.toUpperCase();
      });
  }

  useEffect(() => {
    fetch(url2)
      .then((response) => response.json())
      .then((e) => {
        const data = e.flavor_text_entries;
        let result = data
          .filter((entry) => entry.language.name === "en")[0]
          .flavor_text.replace("", " ");
        result = sentenceCase(result, " ");
        setPokemonDescription(result);
      });
  }, [url2]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((e) => {
        setPokemonName(e.name[0].toUpperCase() + e.name.slice(1));
        setPokemonID(e.id);
        setPokemonWeight(e.weight)
        setPokemonBackIMG(e.sprites.back_default);
        setPokemonIMG(e.sprites.front_default);
        const typeList = [];
        for (let i = 0; i < e.types.length; i++) {
          typeList.push(e.types[i].type.name);
        }
        setPokemonTypes(typeList);
      });
  }, [url]);

  return (
    <div
      onClick={() => {
        setCardOpen(!cardOpen)
        setTimeout(()=>setCardOpen(false),4000)}}
      className="active:ring-2 cursor-pointer transition duration-300 ease-in-out  bg-white shadow-md border h-64 border-gray-200 rounded-lg w-40"
    >
      <div className="w-full h-32 bg-gray-200 flex items-center justify-center hover:opacity-80 transition duration-500 ease-in-out">
        <img
          className=" select-none overflow-hidden whitespace-nowrap indent-[100%]"
          src={cardOpen ? pokemonBackIMG : pokemonIMG}
          alt={`sprite of ${pokemonName}`}
          
        ></img>
      </div>
      {
        cardOpen ? 
        <div className="h-32 flex p-2 justify-center items-center">
        <p className="text-sm italic text-gray-900 " >{pokemonDescription}</p>
        </div>
        :
        <div className="p-5">
        <div className="flex justify-between mb-2">
        <h6 className="text-gray-700 font-bold text-xs">N.º{pokemonID}</h6>
        <h6 className="text-gray-700 italic text-xs">{pokemonWeight/10}kg</h6>
        </div>
        <h5 className="text-gray-900 font-bold text-lg text-center tracking-tight mb-2">
          {pokemonName}
        </h5>
        <div className="flex gap-1 justify-center select-none">
          {pokemonTypes.map((type) => (
            <TypeBadge key={`${pokemonName}-${type}`} type={type} />
          ))}
        </div>
      </div>
      }
      
      
    </div>
  );
}

export default PokeCard;
