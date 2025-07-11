import { Link } from "react-router-dom";
import "../App.css";

function HeadNav() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pendaftaran">Pendaftaran</Link>
        </li>
        <li>
          <Link to="/informasi">Informasi</Link>
        </li>
        <li>
          <Link to="/contact">Kontak Kami</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeadNav;
