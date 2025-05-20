// src/components/Header.js
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Header() {
  // Optional: close mobile menu on link click (for better UX)
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    navLinks.forEach((link) =>
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      })
    );
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        {/* Brand name */}
        <Link className="navbar-brand" to="/">Tracker</Link>
        {/* Toggler button for mobile */}
        <button className="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible menu links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/student-form">Student Form</Link>
            </li>
            {/* Additional nav links can go here */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
