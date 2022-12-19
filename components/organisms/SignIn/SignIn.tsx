import React from "react";
import Link from "next/link";
import Button from "../../atoms/Button/Button";

export default function SignIn() {
  return (
    <div className='grid grid-cols-1 mt-20 md:border-l-2'>
      <h1 className='text-4xl text-center'>Sign In</h1>
      <div className='flex flex-col items-center'>
        <form autoComplete='off' className='w-1/2 mt-10'>
          <label className='block'>Email</label>
          <input
            type='text'
            id='email'
            placeholder='yourname@example.com'
            autoComplete='false'
            className='w-full h-8 mt-2 ring-1 pl-2 rounded ring-pink-300 outline-none hover:ring-pink-400 focus:ring-2 focus:ring-pink-500'
          />
          <label className='block mt-4'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='***********'
            className='w-full h-8 mt-2 ring-1 pl-2 rounded ring-pink-300 outline-none hover:ring-pink-400 focus:ring-2 focus:ring-pink-500'
          />
          <Button variant='primary' className='mt-6' fullWidth>
            Sign in
          </Button>
          <div className='flex flex-row w-full flex-grow-1'>
            <span className='w-full border-b-2 mr-4'> </span>
            <p className='relative top-2'>or</p>
            <span className='w-full border-b-2 ml-4'></span>
          </div>
          <Button variant='secondary' className='mt-10' fullWidth>
            Sign in with Google
          </Button>
        </form>

        <p className='mt-10'>
          Don&apos;t have an account?
          <Link href='/signup' className='link'>
            {" "}
            Sign up here.
          </Link>
        </p>
      </div>
    </div>
  );
}
