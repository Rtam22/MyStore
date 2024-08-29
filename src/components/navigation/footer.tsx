import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <div className="section">
          <p>ONLINE STORE</p>
          <Link to="/">Shipping</Link>
          <Link to="/">Returns</Link>
          <Link to="/">F.A.Q</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
        <div className="section">
          <p>WHO ARE WE</p>
          <Link to="/">About Us</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/">Work With Us</Link>
        </div>
      </div>
      <div className="right">
        <div className="section main">
          <p>SHOP NOW</p>
          <Link to="/">Featured</Link>
          <Link to="/">Mens's Clothing</Link>
          <Link to="/">Woman's Clothing</Link>
          <Link to="/">Jewlery</Link>
        </div>
        <div className="section secondary">
          <p>MEN'S CLOTHING</p>
          <Link to="/">T-shirts & Tops</Link>
          <Link to="/">Jackets & Hoodies</Link>
          <Link to="/">Pants & Trousers</Link>
          <Link to="/">Shoes</Link>
        </div>
        <div className="section secondary">
          <p>WOMAN'S CLOTHING</p>
          <Link to="/">Tops & Blouses</Link>
          <Link to="/">Jackets & Coats</Link>
          <Link to="/">Pants & Skirts</Link>
          <Link to="/">Shoes</Link>
        </div>
        <div className="section secondary">
          <p>JEWELRY</p>
          <Link to="/">Tops & Blouses</Link>
          <Link to="/">Jackets & Coats</Link>
          <Link to="/">Pants & Skirts</Link>
          <Link to="/">Shoes</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
