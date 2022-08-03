import { Navbar } from '../component/Navbar';
import '../styles/globals.css'

// ********************************************************************************
const NatureBaseApp = ({ Component, pageProps }) =>
  <div>
    <link rel='icon' href='/logo.png' />
    <Navbar />
    <Component {...pageProps} />
  </div>;

export default NatureBaseApp;
