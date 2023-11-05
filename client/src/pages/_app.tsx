import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./shared-components/navbar/navbar";
import Footer from "./shared-components/footer/footer";
import { useRouter } from "next/router";
import AuthProvider from "./authentication/auth-provider";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div>
      <AuthProvider>
        {router.pathname.includes("/authentication") ? (
          <div className="">
            <Component {...pageProps} />
          </div>
        ) : (
          <div>
            <Navbar />
            <div className="">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        )}
      </AuthProvider>
    </div>
  );
}
