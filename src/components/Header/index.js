import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <h1 className="nav-link">Madelyn Torff</h1>
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
