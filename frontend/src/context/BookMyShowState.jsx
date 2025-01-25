import React, {useState} from 'react'
import BookMyShowContext from './BookMyShowContext'

const BookMyShowState = (props) => {
    const [movie, setMovie] = useState('')
    const [seat, setSeat] = useState('')
    const [time, setTime] = useState('')
    const [seatNumber, setSeatNumber] = useState({
      A1:"",
      A2:"",
      A3:"",
      A4:"",
      D1:"",
      D2:""
    })
    const [lastBookingDetails, setLastBookingDetails] = useState(null)
  return (
    <BookMyShowContext.Provider value={{movie,setMovie,seat,setSeat,time, setTime,seatNumber, setSeatNumber,lastBookingDetails, setLastBookingDetails}}>
        {props.children}
    </BookMyShowContext.Provider>
  )
}

export default BookMyShowState
