import './App.css';
import React, { useState, useEffect } from 'react';
import PokeCard from './elements/PokeCard';
import Footer from './elements/Footer';
import { MdCatchingPokemon } from "react-icons/md";

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonsALL, setPokemonsALL] = useState([]);
    const [pagesOpen, setPagesOpen] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);
    const [isFirstPage, setIsFirstPage] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);


    function seeAll(){
      setPagesOpen(true)
      setPokemons(pagination(pokemonsALL, 0))
    }
    function sort(letter){
      setPagesOpen(false)
      const sortedArray = pokemonsALL.filter(pokemon => pokemon.name[0] === letter)
      if (sortedArray.length < 1){
        sortedArray.push({url: 'none'})
      }
      setPokemons(sortedArray)
      
    }
    function pagination(pokeArray, page){
      let count= page * 16
      const sortedArray = pokeArray.filter((pokemon, index)=> index>=0+count && index<16+count)
      return sortedArray
    }
    useEffect(() => {
       fetch('https://pokeapi.co/api/v2/pokemon/?limit=905')
          .then((response) => response.json())
          .then((allPokemon) => {
            let pokemonlist = []
            allPokemon.results.forEach(pokemon => {
              pokemonlist.push(pokemon)
            });
            
            setPokemonsALL(pokemonlist)
            const sortedArray = pokemonlist.filter((pokemon, index)=> index>=0 && index<16)
            setPokemons(sortedArray)
            
          })
    }, []);

    useEffect(() => {
      if(pageNumber=== 0){
        return setIsFirstPage(true)
      } else {
        return setIsFirstPage(false)
      }
    },[pageNumber]);
    useEffect(() => {
      if(pageNumber=== 56){
        return setIsLastPage(true)
      } else {
        return setIsLastPage(false)
      }
    },[pageNumber]);
    

    const btnClass = 'font-semibold text-sm text-gray-900 rounded-full hover:bg-gray-800 active:ring-0 hover:ring-2 hover:ring-gray-300 hover:font-bold hover:text-white  focus:bg-gray-800 focus:font-bold focus:text-white w-8 h-8'
  return (
    <div className=' bg-gray-50 min-h-screen'>
       <div className='w-full h-28 pt-2 flex justify-center items-center text-center text-5xl font-bold tracking-tight '>
        <p alt='react pokedex' className='flex items-center'><span className=' font-extrabold pr-5'>REACT </span> P<span className='pt-3 mx-[-3px] text-4xl'><MdCatchingPokemon/></span>kéDex</p>
       </div> 
      <div className='container mx-auto flex flex-wrap justify-center md:gap-5 gap-3 p-4' >
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
        <button className={btnClass} onClick={()=> sort('z')}>Z</button>
      </div>

      <button 
        disabled={pagesOpen}
        onClick={()=> {seeAll(); setPageNumber(pageNumber*0)}}
        className=' disabled:ring-2 ring-gray-400 disabled:hover:bg-gray-800 disabled:hover:text-white mx-auto m-4 flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-gray-900 rounded-md hover:bg-transparent hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-800 focus:text-white'>
        All Pokémon
      </button>
 
      
      
      {
        pagesOpen && 
        <div className='flex mt-4 flex-col items-center'>
        
        <span className='text-sm mt-3 mb-2 text-gray-700 '>
        Showing <span className='font-semibold text-gray-900 '>
        {isFirstPage ? '1' : `${16*(pageNumber)}` }
        </span> to <span className='font-semibold text-gray-900'>
        {isLastPage ? '905' : `${16*(pageNumber+1)}`}
        </span> of <span className='font-semibold text-gray-900'>905</span> Pokémon
        </span>
        <div className=' inline-flex mt-2 xs:mt-0'>
        <button
        disabled={isFirstPage}
        onClick={()=> {
          setPageNumber(pageNumber-1)
          setPokemons(pagination(pokemonsALL, pageNumber-1)) 
        }}
        className=' disabled:bg-gray-400 border disabled:text-gray-50 border-gray-800 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900'>
          Prev
        </button>
        <button
        disabled={isLastPage} 
        onClick={()=> {
          setPageNumber(pageNumber+1)
          setPokemons(pagination(pokemonsALL, pageNumber+1))
        }}
        className='disabled:bg-gray-400 border disabled:text-gray-50 border-gray-800 px-4 py-2 text-sm font-medium text-white bg-gray-800  rounded-r hover:bg-gray-900 '>
          Next
        </button>
      </div>
      
      </div>
        }
      <div className='mx-auto mt-6 p-2 min-h-[570px] container justify-center flex flex-wrap gap-5 '>
      {pokemons.map(pokemon => <PokeCard seeAll={seeAll} name={pokemon.name} key={pokemon.url} url={pokemon.url}/>)}
      
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
