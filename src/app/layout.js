// "use client";
import "./styles/globals.css";
import Wrapper from "./components/wrapper.js";
import Header from "./components/header.js";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
          {children}
          <h2>Test if this content shows up or not</h2>
        </Wrapper>
      </body>
    </html>
  );
}
