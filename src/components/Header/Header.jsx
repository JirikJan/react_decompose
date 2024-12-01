// import a css file containig header styles
import './Header.css';

// Create a Header function returning the HTML of header block
function Header() {
  return (
    <div className="header">
      <h1 className="header__title">Site Name</h1>
      <nav>
        <a href="#about" className="navigation__link">
          About
        </a>
        <a href="#contact" className="navigation__link">
          Contact
        </a>
        <a href="#services" className="navigation__link">
          Services
        </a>
      </nav>
    </div>
  );
}

// Add a default export statement for Header component to use it in the other files
export default Header;
