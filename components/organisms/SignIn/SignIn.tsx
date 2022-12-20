import React, { FormEvent } from "react";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

//custom imports
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

export default function SignIn() {
  const { data: session } = useSession();
  console.log(session);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  async function handleCredsSignIn() {
    await signIn("credentials", {
      redirect: false,
      email: "yourname@example.com",
      password: "123",
    });
  }

  return (
    <div className='grid grid-cols-1 mt-20 md:border-l-2'>
      <h1 className='text-4xl text-center'>Sign In</h1>
      <div className='flex flex-col items-center'>
        <form
          onSubmit={handleSubmit}
          autoComplete='off'
          className='w-1/2 mt-10'
        >
          <label className='block' htmlFor='email'>
            Email
          </label>
          <Input
            type='email'
            id='email'
            fullWidth
            placeholder='yourname@example.com'
          />
          <label className='block mt-4' htmlFor='password'>
            Password
          </label>
          <Input
            type='password'
            id='password'
            fullWidth
            placeholder='********'
          />
          <Button
            variant='primary'
            className='mt-6'
            fullWidth
            onClick={handleCredsSignIn}
          >
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

        <p className='my-10'>
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
