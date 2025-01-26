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

    const handlePostBooking = async() =>{  //here you are writing logic for post method
      const response = await fetch(`http://localhost:8080`, {
        method: "Post",
        headers: {
          "Content-type": "application/json",
        },
        body:JSON.stringify({movie: movie, slot: time, seats: seatNumber}),
      })

      const data = await response.json();

      setErrorPopup(true)
      setErrorMessage(data.message)

      if(response.status === 200){
        setTime("")
        setMovie("")

        setLastBookingDetails(data.data)
        window.localStorage.clear()
      }
    }

    const handleGetBooking = async() =>{
      const response = await fetch(`http://localhost:8080/api/booking`, {
        method: "Get"
      })

      const data = await response.json()
      setLastBookingDetails(data.data);
    }

    useEffect(()=>{
      const movie = window.localStorage.getItem("movie")
      const slot = window.localStorage.getItem("slot")
      const seats = JSON.parse(window.localStorage.getItem("seats"))

      if(movie){
        setMovie(movie)
      }
      if(slot){
        setTime(slot)
      }
      if(seat){
        setSeatNumber(seats)
      }
    },[])

  return (
    <BookMyShowContext.Provider value={{movie,setMovie,seat,setSeat,time, setTime,seatNumber, setSeatNumber,lastBookingDetails, setLastBookingDetails}}>
        {props.children}
    </BookMyShowContext.Provider>
  )
}

export default BookMyShowState
