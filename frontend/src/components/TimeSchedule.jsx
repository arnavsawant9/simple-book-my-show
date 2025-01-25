import React, { useContext } from 'react'
import {slots} from '../data'
import RadioComponents from './RadioComponents'
import '../css/TimeSchedule.css'
import BookMyShowContext from '../context/BookMyShowContext'


const TimeSchedule = () => {
  const context = useContext(BookMyShowContext);
  const {time, setTime} = context;
  const handleTimeChange = (val) =>{
    setTime(val);
    window.localStorage.setItem("slot",val);
  }
  return (
    <>
    <div className='Slot_container'>
      <h1 className='TS_heading'>Select a schedule</h1>
      <div className='TS_main_container'>
         {slots.map((el,index) =>{
          return(<RadioComponents text={el} key={index} data={time} changeSelection={handleTimeChange} />)
         })}
      </div>
    </div>
    </>
  )
}

export default TimeSchedule