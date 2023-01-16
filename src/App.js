import './App.css';
import React, { useState, useEffect } from 'react';
import PokeCard from './elements/PokeCard';

function App() {
  
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
       fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
          .then((response) => response.json())
          .then((allPokemon) => {
            let pokemonlist = []
            allPokemon.results.forEach(pokemon => {
              pokemonlist.push(pokemon)
              
            });
            setPokemons(pokemonlist)
          })
          .catch((err) => {
             console.log(err.message);
          });
          
    }, []);
    
  return (
    <div className=' bg-gray-100 h-screen'>
      <h1 className='text-3xl' >Hola</h1>
      <div className='mx-auto p-2 container flex flex-wrap gap-3'>
      {pokemons.map(pokemon => <PokeCard url={pokemon.url}/>)}
      
      </div>
    </div>
  );
}

export default App;
