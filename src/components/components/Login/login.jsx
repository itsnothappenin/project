import './login.css'
import concert from './concert3.jpg'
import { useState } from "react"

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email,password)
    }

    return (
        <>
          <div className="loginPage">
                <div className="part1">
                    <form onSubmit={submitHandler} className='form'>
                        <h1>Welcome back!</h1>
                        <label className='littletext' htmlFor="email">Email</label>
                        <input type="email" className='area' value={email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"/>
                        <label className='littletext' htmlFor="password">Password</label>
                        <input type="password" className='area' value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Enter your password"/>
                        <div className='section'>
                            <input type="checkbox" name="rememberMe"/>
                            <label className='littletext' htmlFor="rememberMe"> Remember for 30 days</label>
                            <span><a className='littletext' href="#">Forgot password</a></span>
                        </div>
                        <button className="signin">Sign in</button>
                        <button className='area'><p className='littletext'>Sign in with Google</p></button>
                        <div className='formBottom'>
                            <p>Don't have an account?</p>
                            <a className='littletext' href="#">Sign up for free</a>
                        </div>
                    </form>
                </div>
                <div className="part2">
                    <div className='image'>
                     <img src={concert}/>
                    </div>
                </div>
          </div>
        </>
    )
}

export default Login