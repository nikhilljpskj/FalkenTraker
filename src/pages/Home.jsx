// src/pages/Home.js
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="container py-4">
      <h2 className="mb-4">Welcome to Tracker</h2>
      <div className="row">
        {/* Card 1: Student Form */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="https://picsum.photos/600/400" className="card-img-top" alt="Student Form" />
            <div className="card-body">
              <h5 className="card-title">Student Form</h5>
              <p className="card-text">Add or edit student information in the system.</p>
              <Link to="/student-form" className="btn btn-primary">Go to Form</Link>
            </div>
          </div>
        </div>
        {/* Card 2: (Example dummy page) */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="https://picsum.photos/601/400" className="card-img-top" alt="Reports" />
            <div className="card-body">
              <h5 className="card-title">Reports</h5>
              <p className="card-text">View various reports (Coming soon).</p>
              <a href="#" className="btn btn-secondary disabled">Coming Soon</a>
            </div>
          </div>
        </div>
        {/* Card 3: (Another example dummy page) */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="https://picsum.photos/602/400" className="card-img-top" alt="Settings" />
            <div className="card-body">
              <h5 className="card-title">Settings</h5>
              <p className="card-text">Configure application settings (Coming soon).</p>
              <a href="#" className="btn btn-secondary disabled">Coming Soon</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
