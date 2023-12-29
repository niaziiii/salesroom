import ResponsiveDrawer from "@/components/layout";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveDrawer>
          <Component {...pageProps} />
        </ResponsiveDrawer>
      </ThemeProvider>
    </>
  );
}
