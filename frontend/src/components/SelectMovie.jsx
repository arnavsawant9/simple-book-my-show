import React, { useContext } from 'react'
import {moviesList} from '../data'
import RadioComponents from './RadioComponents'
import '../css/SelectMovie.css'
import BookMyShowContext from '../context/BookMyShowContext'

//we want that this component will render the movie, at start before backend file, we are simply just iterating over the list 
const SelectMovie = () => {
  const context = useContext(BookMyShowContext);

  const {movie, setMovie} = context;

  const handleChangeMovie = (val) =>{
    setMovie(val);
    console.log(val);
    localStorage.setItem("movie",val);
  }
  return (
    <>
    <h1 className='SM_heading'>Movies list</h1>
    <div className='SM_main_container'>
        {moviesList.map((el,index)=>{
            return (<RadioComponents text={el} key={index} data={movie} changeSelection={handleChangeMovie}/>)
        })}
    </div>
    </>
  )
}

export default SelectMovie