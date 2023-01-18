import './App.css';
import React, { useState, useEffect } from 'react';
import PokeCard from './elements/PokeCard';

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonsALL, setPokemonsALL] = useState([]);

    function seeAll(){
      setPokemons(pokemonsALL)
    }
    function sort(letter){
      const sortedArray = pokemonsALL.filter(pokemon => pokemon.name[0] === letter)
      setPokemons(sortedArray)
      
    }
    
    useEffect(() => {
       fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
          .then((response) => response.json())
          .then((allPokemon) => {
            let pokemonlist = []
            allPokemon.results.forEach(pokemon => {
              pokemonlist.push(pokemon)
              
            });
            setPokemons(pokemonlist)
            setPokemonsALL(pokemonlist)
            
          })
          .catch((err) => {
             console.log(err.message);
          });
          
    }, []);
    const btnClass = "inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
  return (
    <div className=' bg-gray-100 min-h-screen'>
      <h1 className='text-3xl' >Hola</h1>
      <div className='flex justify-center rounded-md shadow-sm" role="group'>
        <button className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white' onClick={()=> seeAll()}>ALL</button>
        <button className={btnClass} onClick={()=> sort('a')}>A</button>
        <button className={btnClass} onClick={()=> sort('b')}>B</button>
        <button className={btnClass} onClick={()=> sort('c')}>C</button>
        <button className={btnClass} onClick={()=> sort('d')}>D</button>
        <button className={btnClass} onClick={()=> sort('e')}>E</button>
        <button className={btnClass} onClick={()=> sort('f')}>F</button>
        <button className={btnClass} onClick={()=> sort('g')}>G</button>
        <button className={btnClass} onClick={()=> sort('h')}>H</button>
        <button className={btnClass} onClick={()=> sort('i')}>I</button>
        <button className={btnClass} onClick={()=> sort('j')}>J</button>
        <button className={btnClass} onClick={()=> sort('k')}>K</button>
        <button className={btnClass} onClick={()=> sort('l')}>L</button>
        <button className={btnClass} onClick={()=> sort('m')}>M</button>
        <button className={btnClass} onClick={()=> sort('n')}>N</button>
        <button className={btnClass} onClick={()=> sort('o')}>O</button>
        <button className={btnClass} onClick={()=> sort('p')}>P</button>
        <button className={btnClass} onClick={()=> sort('q')}>Q</button>
        <button className={btnClass} onClick={()=> sort('r')}>R</button>
        <button className={btnClass} onClick={()=> sort('s')}>S</button>
        <button className={btnClass} onClick={()=> sort('t')}>T</button>
        <button className={btnClass} onClick={()=> sort('u')}>U</button>
        <button className={btnClass} onClick={()=> sort('v')}>V</button>
        <button className={btnClass} onClick={()=> sort('w')}>W</button>
        <button className={btnClass} onClick={()=> sort('x')}>X</button>
        <button className={btnClass} onClick={()=> sort('y')}>Y</button>
        <button className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-r border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white' onClick={()=> sort('z')}>Z</button>
      </div>
      
      <div className='mx-auto mt-6 p-2 container  justify-center flex flex-wrap gap-5'>
      {pokemons.map(pokemon => <PokeCard  name={pokemon.name} key={pokemon.url} url={pokemon.url}/>)}
      
      </div>
    </div>
  );
}

export default App;
