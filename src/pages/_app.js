import '@/styles/globals.css';
import original from 'react95/dist/themes/original';
import { ThemeProvider } from 'styled-components';





export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={original}><Component {...pageProps} /></ThemeProvider>;
}
