import { ThemeProvider } from "next-themes";

import "@assets/main.css";

export default function MyApp({ Component, pageProps }) {
  return (
    // This is wrapping the page in a theme provider for purposes of the dark/light toggle
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
