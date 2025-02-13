import '../styles/animations.css'; // Ensure this file exists
import '../styles/globals.css'; // Ensure this file exists
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