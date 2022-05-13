import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { loginUser }from "../services/index"

const Login = () => {

    const {handleSubmit, register} = useForm()
    const navigate = useNavigate()
    const [userObj, setUserObj] = useState({})

    const onSubmit = (data) => {
        setUserObj(data)
    }

    useEffect(() => {
        if (userObj.email){
            loginUser(userObj)
                .then((res) => {
                    localStorage.setItem('token',res.access)
                })
                .then(() => {
                    navigate('/shop')
                })
        }
        
    }, [userObj, navigate])

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input id='email' placeholder="example@example.com" type="email" required='required' {...register('email')} />
            <label htmlFor="password">Password</label>
            <input id="password" placeholder="Your password" type="password" required='required' {...register('password')} />
            <input id='submit' type="submit" value='Submit' />
        </form>
    </div>
  )
}

export default Login