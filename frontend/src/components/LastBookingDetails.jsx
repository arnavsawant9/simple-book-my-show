import React, { useContext, useEffect } from 'react'
import { seats } from '../data'
import "../css/LastBookingDetails.css"
import BookMyShowContext from '../context/BookMyShowContext'

const LastBookingDetails = () => {
  const {lastBookingDetails , handleGetBooking} = useContext(BookMyShowContext)
  useEffect(()=>{
    handleGetBooking()
  },[])

  return (
    <div className='last_booking_details_container_main'>
      <h2 className='last_booking_details_header'>Last Booking Details</h2>
      {
        lastBookingDetails? (
          <>
            <div className='seats_container'>
        <p className='seats_header'>Seats:</p>
        <ul className='seats'>
          {seats.map((seat,index)=>{
            return(
            <li className='seat_value' key={index}>
              {seat} : {Number(lastBookingDetails.seats[seat])}
            </li>
            )
          })}
        </ul>
      </div>
      <p className='slot' style={{textAlign: "left"}}>Slot: <span>{lastBookingDetails.slot}</span></p>
      <p className='movie'>Movie: <span>{lastBookingDetails.movie}</span></p>
          </>
        ) : (
          <>
            <p>Currently no booking details!!</p>
          </>
        )
      }

    </div>
  )
}

export default LastBookingDetails