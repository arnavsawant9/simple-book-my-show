import React from 'react'
import SelectMovie from '../components/SelectMovie'
import LastBookingDetails from '../components/LastBookingDetails'
import TimeSchedule from '../components/TimeSchedule'
import '../css/Home.css'

const Home = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='select_movie_component'>
            <SelectMovie />
        </div>
        <div className='last_booking_details_container'>
          <LastBookingDetails />
        </div>
      </div>
      <div className='time_seats_container'>
        <TimeSchedule />
        <SelectMovie />
        <button className='BN-btn'>Book Now</button>
      </div>
    </div>
  )
}

export default Home