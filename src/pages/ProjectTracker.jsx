import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectTracker() {
  const [formData, setFormData] = useState({
    date: '',
    clientName: '',
    clientNumber: '',
    clientEmail: '',
    projectName: '',
    projectDescription: '',
    companyName: '',
    source: '',
    status: '',
    quotation: '',
    meeting1: '',
    meeting2: '',
    meeting3: '',
    poc: '',
    clientPoc: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      submitted_at: new Date().toISOString(),
      source_tag: 'Project tracker'
    };

    try {
      await fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY4MDYzZTA0M2M1MjZmNTUzYzUxMzMi_pc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      alert('Form submitted successfully!');
    } catch (error) {
      alert('Error submitting form');
      console.error(error);
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="mb-4">Project Tracker</h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Date</label>
                <input type="date" id="date" className="form-control" value={formData.date} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Client Name</label>
                <input type="text" id="clientName" className="form-control" value={formData.clientName} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Client Number</label>
                <input type="text" id="clientNumber" className="form-control" value={formData.clientNumber} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Client Email</label>
                <input type="email" id="clientEmail" className="form-control" value={formData.clientEmail} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Project Name</label>
                <input type="text" id="projectName" className="form-control" value={formData.projectName} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Project Description</label>
                <textarea id="projectDescription" className="form-control" value={formData.projectDescription} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Company Name</label>
                <input type="text" id="companyName" className="form-control" value={formData.companyName} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Source</label>
                <input type="text" id="source" className="form-control" value={formData.source} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Status</label>
                <input type="text" id="status" className="form-control" value={formData.status} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Quotation</label>
                <input type="text" id="quotation" className="form-control" value={formData.quotation} onChange={handleChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Meeting Date - I</label>
                <input type="date" id="meeting1" className="form-control" value={formData.meeting1} onChange={handleChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Meeting Date - II</label>
                <input type="date" id="meeting2" className="form-control" value={formData.meeting2} onChange={handleChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Meeting Date - III</label>
                <input type="date" id="meeting3" className="form-control" value={formData.meeting3} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">POC</label>
                <input type="text" id="poc" className="form-control" value={formData.poc} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Client - POC</label>
                <input type="text" id="clientPoc" className="form-control" value={formData.clientPoc} onChange={handleChange} />
              </div>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProjectTracker;