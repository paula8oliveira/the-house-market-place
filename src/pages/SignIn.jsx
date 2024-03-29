import { useState } from "react"
import { toast } from "react-toastify"
import {Link, useNavigate} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import OAuth from "../components/OAuth"
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'


export default function SignIn() {
  const [showPassword, setShowPassword] = useState (false)
  const [formData, setFormData] = useState ({
    email: '',
    password: ''
  })
  const {email, password} = formData 

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword (auth, email, password)

      if (userCredential.user) {
        navigate('/')
      } 
    } catch (error) {
      toast.error('Bad User Credentials')
    }
  }
  
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
          <input 
              type='email' 
              className="emailInput" 
              placeholder="Email" 
              id="email" 
              value={email} 
              onChange={onChange} />
            <div className="passwordInputDiv">
              <input 
                type={showPassword ? 'text' : 'password'} 
                className="passwordInput" 
                placeholder="Password" 
                id="password" 
                value={password} 
                onChange={onChange} />

                <svg 
                  className="showPassword"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                  <path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>  
            </div>
            <Link to='/forgot-password' className="forgotPasswordLink">
              Forgot Password
            </Link>

            <div className="signInBar">
              <p className="signInText">
                Sign In
              </p>
              <button className="signInButton">
                <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
              </button>
            </div>
          </form>

          <OAuth/>

          <Link to='/sign-up' className="registerLink">
            Sign Up Instead
          </Link>
        </main>
      </div>
    </>
  )
}
