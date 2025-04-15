// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { useNavigate, useLocation } from 'react-router-dom'

// const Login = () => {
//   const location = useLocation();
//   console.log("Location obj",location)
//   const mode = location.state?.mode || 'login'; // fallback to login if no state

//   // const [state, setState] = useState('Sign Up')
//   const [authMode, setAuthMode] = useState('Sign Up');

//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const navigate = useNavigate()
//   const { backendUrl, token, setToken } = useContext(AppContext)

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     try {
//       console.log("Before Try")
//       if (authMode === 'Sign Up') {
//       console.log("After Try")
//       // const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

//       const { data } = await axios.post(`${backendUrl} + /api/user/register`, { name, email, password })

//       if (data.success) {
//         localStorage.setItem('token', data.token)
//         setToken(data.token)
//       } else {
//         console.log("this is: error")
//         console.log(data.message)
//         toast.error(data.message)
//       }
//     } else {

//       // const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
//       const { data } = await axios.post(`${backendUrl} + /api/user/login`, { email, password })

//       if (data.success) {
//         localStorage.setItem('token', data.token)
//         setToken(data.token)
//       } else {
//         console.log("this is: error 2")
//         console.log(data.message)
//         toast.error(data.message)
//       }

//     }

//   } catch(error){
//     console.log(error)
//     toast.error("Something Went Wrong")
//   }
//   };


//   useEffect(() => {
//     if (location.state?.mode === 'signup') {
//       setAuthMode('Sign Up');
//     } else {
//       setAuthMode('Login');
//     }
//   }, [location.state?.mode]);

//   useEffect(() => {
//     if (token) {
//       console.log("home")
//       console.log(token)
//       // navigate('/contact') 
//     }
//   }, [token])

//   return (
//     <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
//       <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
//         <p className='text-2xl font-semibold'>{authMode === 'Sign Up' ? 'Create Account' : 'Login'}</p>
//         <p>Please {authMode === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
//         {authMode === 'Sign Up'
//           ? <div className='w-full '>
//             <p>Full Name</p>
//             <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
//           </div>
//           : null
//         }
//         <div className='w-full '>
//           <p>Email</p>
//           <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
//         </div>
//         <div className='w-full '>
//           <p>Password</p>
//           <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
//         </div>
//         <button className='bg-primary text-white w-full py-2 my-2 rounded-md text-base'>{authMode === 'Sign Up' ? 'Create account' : 'Login'}</button>
//         {authMode === 'Sign Up'
//           ? <p>Already have an account? <span onClick={() => setAuthMode('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
//           : <p>Create an new account? <span onClick={() => setAuthMode('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
//         }
//       </div>
//     </form>
//   )
// }

// export default Login

import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === 'Sign Up') {

      const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }

    } else {

      const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }

    }

  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
        {state === 'Sign Up'
          ? <div className='w-full '>
            <p>Full Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
          </div>
          : null
        }
        <div className='w-full '>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full '>
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button className='bg-primary text-white w-full py-2 my-2 rounded-md text-base'>{state === 'Sign Up' ? 'Create account' : 'Login'}</button>
        {state === 'Sign Up'
          ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
          : <p>Create an new account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login
