import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'
import axios from 'axios'

const Login = () => {

    const [state, setState] = useState('Login')
    const {setShowLogin, backendUrl, setToken, setUser} = useContext(AppContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e)=>{
        e.preventDefault();

        try {
            
            if(state === 'Login'){
                const {data} = await axios.post(backendUrl + '/api/user/login', {email, password})
                
                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false) 
                }else{
                    
                }
            }

        } catch (error) {
            
        }
    }

    useEffect(()=>{
        document.body.style.overflow = 'hidden';

        return ()=>{
            document.body.style.overflow = 'unset'; 
        }

    },[])

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'

    >
        <motion.form onSubmit={onSubmitHandler}
            className='relative bg-white p-10 rounded-xl text-slate-500'
            initial = {{opacity:0.2, y:100}}
            transition={{duration:1}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
        >
            <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
            <p className='text-sm'>Welcome Back! Sign In to continue</p>

            {state != 'Login' && <div className='border px-6 py-2 flex items-center fap-2 rounded-full mt-4'>
                <img src={assets.twitter_icon} alt="" />
                <input onChange={e => setName(e.target.value)} value={name} type="text" className='outline-none text-sm' placeholder='name' required/>
            </div>}

            <div className='border px-6 py-2 flex items-center fap-2 rounded-full mt-5'>
                <img src={assets.email_icon} alt="" />
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" className='outline-none text-sm' placeholder='email' required/>
            </div> 

            <div className='border px-6 py-2 flex items-center fap-2 rounded-full mt-4'>
                <img src={assets.lock_icon} alt="" />
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" className='outline-none text-sm' placeholder='password' required/>
            </div> 

            <p className='test-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>

            <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state === 'Login' ? 'Start' : 'Create' }</button>

            { state==='Login' ? <p className='mt-5 text-center'>Don't have an Account? <span onClick={()=>{setState('Sign Up')}} className='text-blue-600 cursor-pointer'>Sign Up</span></p>
 
            : 
             
            <p className='mt-5 text-center'>Already have an Account? <span className='text-blue-600 cursor-pointer' onClick={()=>{setState('Login')}}>Sign IN</span></p>}

            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer' alt="" />


        </motion.form>
    </div>
  )
}

export default Login
