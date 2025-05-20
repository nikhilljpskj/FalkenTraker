import React, { useState } from 'react';

function StudentForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    gender: '',
    state: '',
    city: '',
    pincode: '',
    course: '',
    email: '',
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
      source: 'Student data',
    };

    try {
      await fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY4MDYzZTA0M2M1MjZmNTUzYzUxMzMi_pc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      alert('Form submitted successfully!');
    } catch (error) {
      alert('Error submitting form');
      console.error(error);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow">
            <div className="row g-0">
              <div className="col-md-6 d-none d-md-block">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                  alt="form visual"
                  className="img-fluid h-100 rounded-start"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body p-4">
                  <h3 className="mb-4 text-uppercase fw-bold">Student Registration</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" value={formData.firstName} onChange={handleChange} required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" value={formData.lastName} onChange={handleChange} required />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="birthday" className="form-label">Birthday</label>
                      <input type="date" className="form-control" id="birthday" value={formData.birthday} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label d-block">Gender</label>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="genderFemale" value="Female" onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))} />
                        <label className="form-check-label" htmlFor="genderFemale">Female</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="genderMale" value="Male" onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))} />
                        <label className="form-check-label" htmlFor="genderMale">Male</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="genderOther" value="Other" onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))} />
                        <label className="form-check-label" htmlFor="genderOther">Other</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="state" className="form-label">State</label>
                        <input type="text" className="form-control" id="state" value={formData.state} onChange={handleChange} />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" value={formData.city} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="pincode" className="form-label">Pincode</label>
                      <input type="text" className="form-control" id="pincode" value={formData.pincode} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="course" className="form-label">Course</label>
                      <input type="text" className="form-control" id="course" value={formData.course} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="d-flex justify-content-end">
                      <button type="reset" className="btn btn-outline-secondary me-2" onClick={() => setFormData({ firstName: '', lastName: '', birthday: '', gender: '', state: '', city: '', pincode: '', course: '', email: '' })}>Reset</button>
                      <button type="submit" className="btn btn-primary">Submit Form</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default StudentForm;
