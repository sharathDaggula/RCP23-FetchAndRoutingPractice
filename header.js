import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="title">Wave</h1>
    </div>
    <ul className="nav-items-list">
      <Link className="route-link" to="/">
        <li className="link-item">Home</li>
      </Link>
      <Link className="route-link" to="/about">
        <li className="link-item">About</li>
      </Link>

      <Link className="route-link" to="/contact">
        <li className="link-item">Contact</li>
      </Link>
    </ul>
  </nav>
)

export default Header
