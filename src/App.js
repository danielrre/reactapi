/* eslint-disable no-undef */
import './App.css';
import { useState, useEffect } from 'react';
import SearchIcon from "./search.svg"
import MovieCards from './components/MovieCards'


// ******* Componentes y Props ******* 

// const Persona = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h1>Last Name: {props.lastName}</h1>
//       <h2>Age: {props.age}</h2>
//     </>
//   )
// }
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=467f175f'

const App = (props) =>  {

  const [movies, setMovies] = useState([])
  const [busqueda, setBusqueda] = useState('')

  const searchMovies = async (tittle) => {
    const response = await fetch(`${API_URL}&s=${tittle}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies("batman")
  },[])

  return (
    <div className='app'>
      <h1>Search Movies</h1>
    
      <div className='search'>

        <input 
          placeholder='Search'
          value={busqueda}
          onChange={(e) => {setBusqueda(e.target.value)}}
        />
        <img 
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(busqueda)}
        /> 
        
      </div>

      {
        movies.length < 0
          ? <div className='empty'>
          <h2>No se encontro peliculas</h2>
        </div> 
          : <div className='container'> 
          {movies.map((movie) => <MovieCards movie = {movie} />)}
        </div>
      }
    </div>

      
  )


  //467f175f Api key

  
  // *******  Hooks useState - useEffect ******* 
  
  // let [cont, setCont] = useState(10);

  // useEffect(() => {
  //   alert('Tu componente ha cambiado a: ' +cont)
  // },[cont])

  // return (
  //   <div className='App'>
  //     <button onClick={() => setCont((prevCont) => prevCont+1)}>+</button>
  //     <h1>{cont}</h1>
  //     <button onClick={() => setCont( (prevCont) => prevCont-1 )}>-</button>
  //   </div>
  // );

 



  //  ******* Props ******* 
  // const name='Daniel'
  // const valid=true
  // // return (
  //   <div className="App">
  //     {/* <h1>Heyyy {valid ?name :alert('Falso!!!') }</h1> */}
  //     {
  //       <>
  //         <Persona name={'Petronila'} lastName='Josefa' age={25}/>
  //         <Persona name="Daniel" lastName='Ramirez' age='32'/>
  //       </>
  //     }
  //   </div>
  // );
}

export default App;
