// import React, { useContext } from 'react'
// import SelectMovie from '../components/SelectMovie'
// import LastBookingDetails from '../components/LastBookingDetails'
// import TimeSchedule from '../components/TimeSchedule'
// import '../css/Home.css'
// import SelectSeats from '../components/SelectSeats'
// import BookMyShowContext from '../context/BookMyShowContext'

// const Home = () => {
//   const context = useContext(BookMyShowContext)

//   const {
//     movie,
//     time,
//     seatNumber,
//     errorPopup,
//     errorMessage,
//     setErrorMessage,
//     setErrorPopup,
//     handlePostBooking
//   } = context

//   const handleBookNow = () =>{
//     if(!movie){
//       setErrorPopup(true);
//       setErrorMessage("Select a movie!")
//     } else {
//       handlePostBooking()
//     }
//   }

//   return (
//     <div className='container main-div'>
//       <div className='wrapper'>
//         <div className='select_movie_component'>
//             <SelectMovie />
//         </div>
//         <div className='last_booking_details_container'>
//           <LastBookingDetails />
//         </div>
//       </div>
//       <div className='time_seats_container'>  
//         <SelectSeats />
//         <TimeSchedule />
//         <SelectSeats />
//         <button className='BN-btn' onClick={handleBookNow}>Book Now</button>
//       </div>
//     </div>
//   )
// }

// export default Home







import React, { useContext } from 'react';
import SelectMovie from '../components/SelectMovie';
import LastBookingDetails from '../components/LastBookingDetails';
import TimeSchedule from '../components/TimeSchedule';
import SelectSeats from '../components/SelectSeats';
import BookMyShowContext from '../context/BookMyShowContext';
import '../css/Home.css';

const Home = () => {
  const { 
    movie, 
    setErrorPopup, 
    setErrorMessage, 
    handlePostBooking 
  } = useContext(BookMyShowContext);

  const validateBooking = () => {
    if (!movie) {
      setErrorPopup(true);
      setErrorMessage('Select a movie!');
      return false;
    }
    return true;
  };

  const handleBookNow = () => {
    if (validateBooking()) {
      handlePostBooking();
    }
  };

  return (
    <div className="container main-div">
      <div className="wrapper">
        <div className="select_movie_component">
          <SelectMovie />
        </div>
        <div className="last_booking_details_container">
          <LastBookingDetails />
        </div>
      </div>
      <div className="time_seats_container">
        <SelectSeats key="top-seats" />
        <TimeSchedule />
        <SelectSeats key="bottom-seats" />
        <button className="BN-btn" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Home;
