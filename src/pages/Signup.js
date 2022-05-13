import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../services'

const Signup = () => {

    const {register, handleSubmit}
 = useForm()
 const navigate = useNavigate()
    const [newUserObj, setNewUserObj] = useState({})

    const onSubmit = (data) => {
        setNewUserObj(data)
    }

    useEffect(() => {
        if(newUserObj.first_name){
            createUser(newUserObj)
                .then((res) => {
                    console.log(res);
                })
                .then(() => {
                    navigate('/login')
                    window.alert('Usuario creado con exito')
                })
        }
    }, [newUserObj, navigate])

  return (
    <div>
        <h1>Create new User</h1>
        <br />
        <form onSubmit={handleSubmit(onSubmit)} >
            <label htmlFor="first_name">First name: </label>
            <input type="text" id='first_name' required='required' {...register ('first_name')} />
            <br />
            <label htmlFor="last_name">Last name: </label>
            <input type="text" id='last_name' required='required' {...register ('last_name')} />
            <br />
            <label htmlFor="email">Email: </label>
            <input type="text" id='email' required='required' placeholder='example@exapmle.com' {...register ('email')} />
            <br />
            <label htmlFor="password">Password: </label>
            <input type="text" id='password' required='required' placeholder='Your password' {...register ('password')} />
            <br />
            <input type="submit" value='Create' />
        </form>
        <br />
        <button onClick={() => navigate('/login')} > Login </button>
    </div>
  )
}

export default Signup