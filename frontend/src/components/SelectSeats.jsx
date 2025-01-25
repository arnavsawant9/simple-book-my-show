import React, { useContext } from 'react'
import {seats} from "../data"
import SeatInput from './SeatInput'
import "../css/SelectSeats.css"
import BookMyShowContext from '../context/BookMyShowContext'

const SelectSeats = () => {
  const context = useContext(BookMyShowContext);
  const {seatNumber, setSeatNumber} = context;

  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select seats : </h1>
      <div className='SS_main_container'>
        {seats.map((el,index)=>{
          return(
            <SeatInput key={index} text={el} seatNumber={seatNumber} setSeatNumber={setSeatNumber}/>
          )
        })}
      </div>
    </div>
  )
}

export default SelectSeats