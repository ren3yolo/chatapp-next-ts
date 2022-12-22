import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { NextRouter, useRouter } from "next/router";

import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import Spinner from "../../atoms/Spinner";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router: NextRouter = useRouter();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    const response: AxiosResponse = await axios({
      method: "post",
      data: { name, email, password },
      url: "/api/users/",
    });
    if (response.status === 200) {
      router.push("/inbox");
    } else {
      setLoading(false);
      alert("An error occurred ! Please try again later.");
    }
  }

  return (
    <>
      <Spinner loading={loading} />
      <div className='flex flex-col items-center mt-10 sm:w-full md:w-2/3 rounded-lg shadow-xl'>
        <h1 className='text-4xl p-10 text-center'>Sign up to Chatter today</h1>
        <form onSubmit={handleSubmit} className=' mt-10 w-1/2'>
          <label htmlFor='fullname'>Full Name</label>
          <Input
            type='text'
            placeholder='Enter your full name'
            fullWidth
            id='fullname'
            value={name}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setName(event.target.value)
            }
            required
          />
          <label htmlFor='email'>Email</label>
          <Input
            type='email'
            placeholder='Enter your email'
            fullWidth
            id='email'
            value={email}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
            required
          />
          <label htmlFor='password'>Password</label>
          <Input
            type='password'
            placeholder='Enter your password'
            fullWidth
            id='password'
            value={password}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
            required
          />
          <Button type='submit' variant='primary' fullWidth>
            Sign up
          </Button>
        </form>
        <p className='my-10'>
          Already have an account?{" "}
          <Link className='link' href='/'>
            Sign in here
          </Link>
        </p>
      </div>
    </>
  );
}
