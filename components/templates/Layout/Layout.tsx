import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{`${title} - Chatter`}</title>
        <meta name='description' content='A chat web application' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </>
  );
}
