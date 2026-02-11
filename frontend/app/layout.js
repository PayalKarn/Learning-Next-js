import Navigation from "./Navigation";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>

      <body>
        <Navigation/>
        <h1>This is my layout screen</h1>
        {children}</body>
    </html>
  );
}
