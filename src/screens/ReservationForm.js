import React, { useState } from 'react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    numberOfPeople: 1,
  });
  const [showSuccess, setShowSuccess] = useState(false); // State to manage success message visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://mern-wnei.onrender.com/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Reservation submitted successfully');
        setShowSuccess(true); // Show success message on successful reservation
      } else {
        console.error('Failed to submit reservation');
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
    }
  };

  return (
    <form className="reservation-form p-4 border rounded vh-100" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date:
        </label>
        <input
          type="date"
          className="form-control"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="time" className="form-label">
          Time:
        </label>
        <input
          type="time"
          className="form-control"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="numberOfPeople" className="form-label">
          Table number
        </label>
        <input
          type="number"
          className="form-control"
          name="numberOfPeople"
          value={formData.numberOfPeople}
          onChange={handleChange}
          min="1"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Reserve Table
      </button>

      {/* Success message */}
      {showSuccess && (
        <div className="alert alert-success mt-3">
          Table reserved successfully!
        </div>
      )}
    </form>
  );
};

export default ReservationForm;
