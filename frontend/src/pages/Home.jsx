import React from 'react'
import SelectMovie from '../components/SelectMovie'

const Home = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='select_movie_component'>
            <SelectMovie />
        </div>
        <div className='last_booking_details_container'>
          Last Booking
        </div>
      </div>
      <div className='time_seats_container'>
        Time schedule
        Select seats
      </div>
    </div>
  )
}

export default Home