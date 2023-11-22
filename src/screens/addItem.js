import React, { useState } from 'react';
import axios from 'axios';
import Success from '../components/Success'; // Import the Success component

export default function AddPizzaForm() {
  const [formData, setFormData] = useState({
    name: '',
    variants: '',
    prices: '',
    category: '',
    image: '',
    description: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/pizzas/add-item', formData);
      console.log('Item added:', response.data);
       // Set success message
       setShowSuccess(true);
      setFormData({ // Clear form fields on success
        name: '',
        variants: '',
        prices: '',
        category: '',
        image: '',
        description: '',
      });
    } catch (error) {
      console.error('Error adding item:', error);
      // Handle error - show error message, log, etc.
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
<div className='container'>
  <h2 className='title'>Add a food</h2>

  <form onSubmit={handleSubmit} className="my-4">
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" placeholder="Name" defaultValue={formData.name} onChange={handleChange} required />
    </div>

    <div className="mb-3">
      <label htmlFor="variants" className="form-label">Variants (comma-separated)</label>
      <input type="text" className="form-control" id="variants" placeholder="Variants" defaultValue={formData.variants} onChange={handleChange} required />
    </div>

    <div className="mb-3">
      <label htmlFor="prices" className="form-label">Prices (comma-separated)</label>
      <input type="text" className="form-control" id="prices" placeholder="Prices" defaultValue={formData.prices} onChange={handleChange} required />
    </div>

    <div className="mb-3">
      <label htmlFor="category" className="form-label">Category</label>
      <input type="text" className="form-control" id="category" placeholder="Category" defaultValue={formData.category} onChange={handleChange} required />
    </div>

    <div className="mb-3">
      <label htmlFor="image" className="form-label">Image URL</label>
      <input type="text" className="form-control" id="image" placeholder="Image URL" defaultValue={formData.image} onChange={handleChange} required />
    </div>

    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <textarea className="form-control" id="description" placeholder="Description" defaultValue={formData.description} onChange={handleChange} required></textarea>
    </div>

    <button type="submit" className="btn btn-primary">Add Item</button>
    {showSuccess && (
        <div className="alert alert-success mt-3">
          Item Added
        </div>
      )}
  </form>
</div>

    
  );
}
