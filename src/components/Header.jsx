import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Header() {
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
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow" style={{ minHeight: '70px' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-white" to="/">Tracker</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/student-form">Student Form</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/project-form">Project Form</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
