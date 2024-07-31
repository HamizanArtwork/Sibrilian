import { signOut } from 'next-auth/react';
import React from 'react'

const SignOutBtn = () => {
  return (
    <div>
      <button onClick={() => signOut()} className='w-[200px] h-[50px] bg-white rounded-full text-gray-900 font-bold text-xl flex items-center justify-center  border border-medium border-black'>Log out</button>
    </div>
  )
}

export default SignOutBtn;
