import React from 'react'
import '../css/RadioComponent.css'

const RadioComponents = ({text}) => {
  return (
    <div className='form-check-label'>
        <span className='text'>{text}</span>
    </div>
  )
}

export default RadioComponents