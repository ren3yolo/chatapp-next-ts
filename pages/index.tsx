//custom imports
import Layout from "../components/templates/Layout/Layout";
import About from "../components/organisms/About/About";
import SignIn from "../components/organisms/SignIn/SignIn";

export default function Home() {
  return (
    <Layout title='Home'>
      <main className='h-screen w-screen'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2'>
          <About />
          <SignIn />
        </div>
      </main>
    </Layout>
  );
}
