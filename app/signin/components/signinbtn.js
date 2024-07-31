import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react';


const SigninBtn = () => {
  return (
    <div className='flex justify-center items-center'>
      <button onClick={() => signIn('google')} className='w-[200px] h-[50px] bg-white rounded-full text-gray-900 font-bold text-xl flex items-center justify-center  border border-medium border-black'><FcGoogle className='mr-2'/>Login</button>
    </div>
  )
}

export default SigninBtn;
