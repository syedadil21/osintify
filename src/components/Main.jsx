'use client'
import { Button, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import toast from 'react-hot-toast';

const Main = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [signUpScreenShow, setSignUpScreenShow] = useState(false);
    const router = useRouter()
    const handleLogin = () => {
        if(email === 'test1@gmail.com')
        {
            if(password === 'test123')
            {
                setTimeout(() => {
                    toast.success("Signed In!");
                    router.push('/newScans')
                }, 2000);
            }
            else
            {
                toast.error("Invalid credentials");
            }
        }   
        else
        {
            toast.error("Invalid credentials");
        }
    }

    function delayedResponse(message) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // resolve(message);  // Resolve the promise with the message
            reject("Database not connected!")
            }, 3000); // Wait for 3 seconds (3000 milliseconds)
        });
      }


    const handleSignup = () => {
        toast.promise(
            delayedResponse("Hello"),
             {
               loading: 'Saving...',
               success: <b>Signing up!</b>,
               error: <b>Could not save.</b>,
             }
           );
    }
  return (
    <>
        <div className='w-full h-screen bg-blue-100 p-10 flex justify-center items-center'>
            {!signUpScreenShow && <div className='w-full h-screen flex justify-center items-center'>
                <div className='loginCard bg-white w-4/12 flex rounded-xl shadow-xl flex-col items-center py-10'>
                    <h1 className='text-5xl font-extralight my-10'>Login Form</h1>
                    <Input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter your email' label='Email' className='w-[70%] mt-5'/>
                    <Input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter your password' label='Password' className='w-[70%] my-5'/>
                    <Button onPress={handleLogin} className='text-white mb-5 w-[70%]' fullWidth color='success'>Login</Button>
                    <p className='text-sm text-gray-500'>Not already a user? <span onClick={()=>setSignUpScreenShow(true)} className='text-blue-700 underline italic cursor-pointer'>Click here</span> to sign up</p>
                </div>
            </div>}

            {signUpScreenShow && <div className='w-full h-screen flex justify-center items-center'>
                <div className='loginCard bg-white w-4/12 flex rounded-xl shadow-xl flex-col items-center py-10'>
                    <h1 className='text-5xl font-extralight my-10'>Signup Form</h1>
                    <Input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter your email' label='Email' className='w-[70%] mt-5'/>
                    <Input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter your password' label='Password' className='w-[70%] my-5'/>
                    <Button onPress={handleSignup} className='text-white mb-5 w-[70%]' fullWidth color='success'>Signup</Button>
                    <p className='text-sm text-gray-500'>Already a user? <span onClick={()=>setSignUpScreenShow(false)} className='text-blue-700 underline italic cursor-pointer'>Click here</span> to signIn</p>
                </div>
            </div>}
        </div>
    </>
  )
}

export default Main
