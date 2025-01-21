import React from 'react'
import {moviesList} from '../data'
import RadioComponents from './RadioComponents'
import '../css/SelectMovie.css'

//we want that this component will render the movie, at start before backend file, we are simply just iterating over the list 
const SelectMovie = () => {
  return (
    <>
    <h1 className='SM_heading'>Movies list</h1>
    <div className='SM_main_container'>
        {moviesList.map((el,index)=>{
            return (<RadioComponents text={el} key={index} />)
        })}
    </div>
    </>
  )
}

export default SelectMovie