import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppContextProvider } from "@/contexts/AppContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </AppContextProvider>
  );
}
