import React, {useState} from 'react'
import BookMyShowContext from './BookMyShowContext'

const BookMyShowState = (props) => {
    const [movie, setMovie] = useState('')
  return (
    <BookMyShowContext.Provider value={{movie}}>
        {props.children}
    </BookMyShowContext.Provider>
  )
}

export default BookMyShowState
