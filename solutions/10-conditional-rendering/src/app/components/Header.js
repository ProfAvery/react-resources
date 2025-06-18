import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header-component">
      <Link to="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.svg" alt="coffee logo" />
        <h1>Code Café</h1>
      </Link>
    </header>
  );
}

export default Header;
