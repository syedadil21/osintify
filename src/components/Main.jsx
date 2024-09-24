'use client'
import { Button, Input } from '@nextui-org/react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import toast from 'react-hot-toast';
import osintifyLogo from '../assets/osintifyLogo.png'
import { supabase } from '@/config/Supabase';

const Main = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [signUpScreenShow, setSignUpScreenShow] = useState(false);
    const router = useRouter()
    const handleLogin = async (e) => {
        e.preventDefault();
        if(!email || !password)
        {
            toast.error('Invalid credentials')
        }
        
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if(error)
        {
            toast.error(error.message);
            return;
        }
        toast.success('Successfully logged in');
        console.log(data);
        
        router.push('/newScans')
    }

    function delayedResponse(message) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // resolve(message);  // Resolve the promise with the message
            reject("Database not connected!")
            }, 3000); // Wait for 3 seconds (3000 milliseconds)
        });
      }


    const handleSignup = async (e) => {
        e.preventDefault();
        if(!email || !password)
        {
            toast.error("Please enter email and a password");
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        console.log(data);
        

        if(error)
        {
            toast.error(error?.message);
            return;
        }

        toast.success('Successfully registered in');
        toast.success('Please confirm your email to log in');

        // toast.promise(
        //     delayedResponse("Hello"),
        //      {
        //        loading: 'Saving...',
        //        success: <b>Signing up!</b>,
        //        error: <b>Could not save.</b>,
        //      }
        //    );
    }
  return (
    <>
        <div className='w-full h-screen bg-gray-600 p-10 flex flex-col justify-center items-center'>
            <Image src={osintifyLogo} width={300} alt='Logo'/>
            {!signUpScreenShow && <div className='w-full h-screen flex justify-center items-center'>
                <div className='loginCard bg-gray-800 w-4/12 flex rounded-xl shadow-2xl flex-col items-center py-10'>
                        <h1 className='text-5xl font-extralight my-10'>Login Form</h1>
                      <form className='w-full flex flex-col items-center' onSubmit={(e) => handleLogin(e)}>
                        <Input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter your email' label='Email' className='w-[70%] mt-5'/>
                        <Input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter your password' label='Password' className='w-[70%] my-5'/>
                        <Button type='submit' className='text-white mb-5 w-[70%]' fullWidth color='success'>Login</Button>
                    </form>
                        <p className='text-sm text-gray-500'>Not already a user? <span onClick={()=>setSignUpScreenShow(true)} className='text-blue-700 underline italic cursor-pointer'>Click here</span> to sign up</p>
                </div>
            </div>}

            {signUpScreenShow && <div className='w-full h-screen flex justify-center items-center'>
                <div className='loginCard bg-gray-800 w-4/12 flex rounded-xl shadow-2xl flex-col items-center py-10'>
                    <h1 className='text-5xl font-extralight my-10'>Signup Form</h1>
                      <form className='w-full flex flex-col items-center' onSubmit={(e) => handleSignup(e)}>

                    <Input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter your email' label='Email' className='w-[70%] mt-5'/>
                    <Input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter your password' label='Password' className='w-[70%] my-5'/>
                    <Button type='submit' className='text-white mb-5 w-[70%]' fullWidth color='success'>Signup</Button>
                      </form>
                    <p className='text-sm text-gray-500'>Already a user? <span onClick={()=>setSignUpScreenShow(false)} className='text-blue-700 underline italic cursor-pointer'>Click here</span> to signIn</p>
                </div>
            </div>}
        </div>
    </>
  )
}

export default Main
