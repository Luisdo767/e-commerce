import React from 'react'
import { useNavigate } from 'react-router-dom'

const Purchased = () => {

    const navigate = useNavigate()

  return (
    <div>
        <h1>Thanks for using our services</h1>
        <br />
        <button onClick={() => navigate('/shop')} >Keep shopping</button>
    </div>
  )
}

export default Purchased