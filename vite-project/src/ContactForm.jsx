import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      alert(response.data.message);
    } catch (error) {
      alert('Failed to submit form');
    }
  };

  return (
    <div>
      <h1 style={{ paddingTop: '4rem', fontWeight: 'bolder' }}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
