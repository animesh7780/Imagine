import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Login = () => {

    const [state, setState] = useState('Login')

    useEffect(()=>{
        document.body.style.overflow = 'hidden';
    },[])

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <form className='relative bg-white p-10 rounded-xl text-slate-500'>
            <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
            <p className='text-sm'>Welcome Back! Sign In to continue</p>

            {state != 'Login' && <div className='border px-6 py-2 flex items-center fap-2 rounded-full mt-4'>
                <img src={assets.twitter_icon} alt="" />
                <input type="text" className='outline-none text-sm' placeholder='name' required/>
            </div>}

            <div className='border px-6 py-2 flex items-center fap-2 rounded-full mt-5'>
                <img src={assets.email_icon} alt="" />
                <input type="email" className='outline-none text-sm' placeholder='email' required/>
            </div> 

            <div className='border px-6 py-2 flex items-center fap-2 rounded-full mt-4'>
                <img src={assets.lock_icon} alt="" />
                <input type="password" className='outline-none text-sm' placeholder='password' required/>
            </div> 

            <p className='test-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>

            <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state === 'Login' ? 'Start' : 'Create' }</button>

            { state==='Login' ? <p className='mt-5 text-center'>Don't have an Account? <span onClick={()=>{setState('Sign Up')}} className='text-blue-600 cursor-pointer'>Sign Up</span></p>
 
            : 
             
            <p className='mt-5 text-center'>Already have an Account? <span className='text-blue-600 cursor-pointer' onClick={()=>{setState('Login')}}>Sign IN</span></p>}

            <img src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer' alt="" />


        </form>
    </div>
  )
}

export default Login
