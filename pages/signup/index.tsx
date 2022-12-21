import React from "react";
import Layout from "../../components/templates/Layout/Layout";
import SignUpForm from "../../components/organisms/Signup";

export default function SignUp() {
  return (
    <Layout title='Sign up'>
      <main className='h-screen w-screen'>
        <div className='flex justify-center'>
          <SignUpForm />
        </div>
      </main>
    </Layout>
  );
}
