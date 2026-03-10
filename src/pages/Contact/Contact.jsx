import React, { useState } from 'react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="page">
      <main className="contact-main">
        <div className="contact-container">
          <h1>Contact Us</h1>
          
          <div className="contact-grid">
            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <p>
                Have questions, feedback, or need support? We'd love to hear from you!
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">👨‍💻</span>
                  <div>
                    <h3>Developer</h3>
                    <p>Saditya Adhikari</p>
                    <p className="age">Age: 21 years</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h3>Email</h3>
                    <p>sadityaadhikaru@gmail.com</p>
                    <p className="note">(Response within 24 hours)</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <h3>Phone</h3>
                    <p>9813462408</p>
                    <p className="note">(Monday-Friday, 9AM-6PM)</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h3>Location</h3>
                    <p>Nepal</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <a href="#" className="social-icon">📱</a>
                <a href="#" className="social-icon">💬</a>
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">🐦</a>
              </div>
            </div>
            
            <div className="contact-form-section">
              <h2>Send a Message</h2>
              
              {submitted ? (
                <div className="success-message">
                  ✅ Thank you for contacting us! We'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this about?"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message..."
                      rows="5"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}