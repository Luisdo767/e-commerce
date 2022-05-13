import React from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {

    const navigate = useNavigate()

  return (
    <div>
        <h1>Welcome</h1>
        <br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis impedit praesentium porro nihil, obcaecati voluptatibus consequatur veniam sapiente mollitia pariatur aliquid iusto, asperiores cum fugiat harum laborum enim sunt consectetur.</p>
        <br />
        <button onClick={() => navigate('/shop')} >Shop</button>
    </div>
  )
}

export default WelcomePage