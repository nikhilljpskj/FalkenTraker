// src/components/Footer.js
function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          {/* Column 1: About */}
          <div className="col-md-6 col-lg-4">
            <h5>Tracker</h5>
            <p>Tracker is a sample React application using Bootstrap 5. It features a modern UI for managing student information.</p>
          </div>
          {/* Column 2: Links */}
          <div className="col-md-3 col-lg-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/student-form" className="text-white text-decoration-none">Student Form</a></li>
            </ul>
          </div>
          {/* Column 3: Contact (example) */}
          <div className="col-md-3 col-lg-2">
            <h5>Contact</h5>
            <p>Email: contact@tracker.com<br/>Phone: +1234567890</p>
          </div>
        </div>
        <hr className="mb-2" />
        <div className="text-center">
          © 2025 Tracker, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
