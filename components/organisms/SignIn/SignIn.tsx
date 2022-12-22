import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

//custom imports
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import { AppContext } from "../../../context/Provider";
import Toast from "../../molecules/Toast";
import Spinner from "../../atoms/Spinner";

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();
  const { state, dispatch } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user) {
      router.push("/inbox");
    }
  }, [session, router]);

  async function handleCredsSignIn(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const response = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });
    if (response?.error) {
      setLoading(false);
      dispatch({ type: "SET_ERROR", payload: "Invalid username or password" });
    }
  }

  return (
    <>
      <Spinner loading={loading} />
      {state.error && (
        <Toast
          type='error'
          message={state.error || "Invalid username or password"}
        />
      )}
      <div className='grid grid-cols-1 mt-20 md:border-l-2'>
        <h1 className='text-4xl text-center'>Sign In</h1>
        <div className='flex flex-col items-center'>
          <form
            onSubmit={handleCredsSignIn}
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
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
            />
            <label className='block mt-4' htmlFor='password'>
              Password
            </label>
            <Input
              type='password'
              id='password'
              fullWidth
              placeholder='********'
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              required
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

          <p className='my-10'>
            Don&apos;t have an account?
            <Link href='/signup' className='link'>
              {" "}
              Sign up here.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
