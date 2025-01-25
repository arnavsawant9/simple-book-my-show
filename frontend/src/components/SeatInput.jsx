import React from 'react'
import '../css/SeatInput.css'

const SeatInput = ({key, text, changeSelection, seatNumber, setSeatNumber}) => {
  // const handleChecked = (val) =>{
  //   changeSelection(val);
  // }

  const change_seats = (e) =>{
    setSeatNumber({...seatNumber, [e.target.name]:Number(e.target.value)}) 
    window.localStorage.setItem(
      "seats",
      JSON.stringify({
        ...seatNumber,
        [e.target.name]:Number(e.target.value)
      })
    )
  }

  return (
    <div name={text} className='form-check-label seats'>
      <span className='text'>{text}</span>
      <input name={text} type='number' className='seats-input' placeholder='0' max={30} min={0} onChange={change_seats} value={seatNumber[text]} />
    </div>
  )
}

export default SeatInput;