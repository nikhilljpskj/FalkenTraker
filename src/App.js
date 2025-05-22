// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import StudentForm from './pages/StudentForm';
import Footer from './components/Footer';
import ProjectTracker from './pages/ProjectTracker';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Route for home page */}
        <Route path="/" element={<Home />} />
        {/* Route for student form page */}
        <Route path="/student-form" element={<StudentForm />} />
        <Route path="/project-form" element={<ProjectTracker />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
