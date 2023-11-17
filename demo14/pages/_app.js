import '@/styles/globals.css'
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

export default function App({ Component, pageProps }) {
  return <ThemeProvider>
  <div className="container">
    <Navbar />
  <Component {...pageProps} />
    <Footer />
  </div>
  </ThemeProvider>
}
