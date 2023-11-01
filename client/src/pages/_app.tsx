import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./shared-components/navbar/navbar";
import Footer from "./shared-components/footer/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <div className="body-width">
        <Component {...pageProps} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
