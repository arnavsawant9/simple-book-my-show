import React from 'react'
import '../css/SeatInput.css'

const SeatInput = ({key, text, changeSelection}) => {
  const handleChecked = (val) =>{
    changeSelection(val);
  }

  return (
    <div name={text} className='form-check-label seats' onChange={handleChecked(text)}>
      <span className='text'>{text}</span>
      <input type='number' className='seats-input' placeholder='0' max={30} min={0} />
    </div>
  )
}

export default SeatInput;