import React from 'react'
import {slots} from '../data'
import RadioComponents from './RadioComponents'
import '../css/TimeSchedule.css'


const TimeSchedule = () => {
  return (
    <>
    <div className='Slot_container'>
      <h1 className='TS_heading'>Select a schedule</h1>
      <div className='TS_main_container'>
         {slots.map((el,index) =>{
          return(<RadioComponents text={el} key={index} />)
         })}
      </div>
    </div>
    </>
  )
}

export default TimeSchedule