import React from 'react'
import seats from "../data"
import SeatInput from './SeatInput'

const SelectSeats = () => {
  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select seats : </h1>
      <div className='SS_main_container'>
        {seats.map((el,index)=>{
          return(
            <SeatInput key={index} text={el} />
          )
        })}
      </div>
    </div>
  )
}

export default SelectSeats