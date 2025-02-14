// pages/_app.js
import '../styles/animations.css'; // Import your animations CSS

import '../styles/globals.css'
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
    return ( <
        ThemeProvider attribute = "class" >
        <
        Component {...pageProps }
        /> < /
        ThemeProvider >
    );
}

export default MyApp;