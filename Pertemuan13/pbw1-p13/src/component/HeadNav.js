import { Link } from "react-router-dom";
import "../App.css";
function HeadNav() {
  return (
    <div class="item2 bg-info">
      <ul className="m-0 p-0">
        <li className="fs-5 p-1 ps-2 pe-2">
          <Link to="/">Home</Link>
        </li>
        <li className="fs-5 p-1 ps-2 pe-2">
          <Link to="/materi">Materi</Link>
        </li>
        <li className="fs-5 p-1 ps-2 pe-2">
          <Link to="/about">About</Link>
        </li>
        <li className="fs-5 p-1 ps-2 pe-2">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
export default HeadNav;
