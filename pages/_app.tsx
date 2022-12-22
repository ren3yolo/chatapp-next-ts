import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import ContextProvider from "../context/Provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ContextProvider>
        <Component {...pageProps} />;
      </ContextProvider>
    </SessionProvider>
  );
}
