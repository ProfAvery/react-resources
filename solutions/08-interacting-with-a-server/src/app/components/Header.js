import "./Header.css";

function Header() {
  return (
    <header className="header-component">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo.svg" alt="coffee logo" />
      <h1>Code Café</h1>
    </header>
  );
}

export default Header;
