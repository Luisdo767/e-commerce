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
                    navigate('/')
                })
        }
        
    }, [userObj, navigate])

  return (
    <div>
        <h1>Login</h1>
        <div>
            <h2>Test data:</h2>
            <h4>Email: admin@admin.com</h4>
            <h4>Password: root</h4>
        </div>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input id='email' placeholder="example@example.com" type="email" required='required' {...register('email')} />
            <br />
            <label htmlFor="password">Password</label>
            <input id="password" placeholder="Your password" type="password" required='required' {...register('password')} />
            <br />
            <input id='submit' type="submit" value='Submit' />
        </form>
        <br />
        <h3>Don`t have an account?</h3>
        <button onClick={() => navigate('/signup')} >Signup</button>
    </div>
  )
}

export default Login