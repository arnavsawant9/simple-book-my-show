import React, { useContext } from 'react'
import {seats} from "../data"
import SeatInput from './SeatInput'
import "../css/SelectSeats.css"
import BookMyShowContext from '../context/BookMyShowContext'

const SelectSeats = () => {
  const context = useContext(BookMyShowContext);
  const {seat, setSeat} = context;

  const handleChangeSeat = (val) =>{
    setSeat(val);
    //console.log(val);
    localStorage.setItem("seats",val);
  }

  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select seats : </h1>
      <div className='SS_main_container'>
        {seats.map((el,index)=>{
          return(
            <SeatInput key={index} text={el} data={seat} changeSelection={handleChangeSeat} />
          )
        })}
      </div>
    </div>
  )
}

export default SelectSeats