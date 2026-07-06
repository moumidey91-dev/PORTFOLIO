import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import contactAvatar from '../assets/contact_avatar.png';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) tempErrors.lastName = 'Last name is required';
    
    // Email Check
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      // reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's discuss your next project or collaboration</p>
      </div>

      <div className="contact-container">
        {/* Contact info and Avatar */}
        <div className="contact-info">
          <div className="contact-avatar-wrapper animate-float">
            <img src={contactAvatar} alt="Contact Moumi" className="contact-avatar-img" />
          </div>

          <div className="info-cards">
            <div className="info-card">
              <Phone className="info-icon" size={18} />
              <div>
                <h4>Call Me</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info-card">
              <Mail className="info-icon" size={18} />
              <div>
                <h4>Email</h4>
                <p>moumidey91@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <MapPin className="info-icon" size={18} />
              <div>
                <h4>Location</h4>
                <p>Kolkata, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper glass-card">
          {submitted ? (
            <div className="success-message">
              <CheckCircle className="success-icon" size={48} />
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out, Moumi will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'error-input' : ''}
                    placeholder="John"
                  />
                  {errors.firstName && <span className="error-text"><AlertCircle size={12} /> {errors.firstName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error-input' : ''}
                    placeholder="Doe"
                  />
                  {errors.lastName && <span className="error-text"><AlertCircle size={12} /> {errors.lastName}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error-input' : ''}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="error-text"><AlertCircle size={12} /> {errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number (Optional)</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 99999 99999"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={errors.message ? 'error-input' : ''}
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && <span className="error-text"><AlertCircle size={12} /> {errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
