
import React, { useState } from 'react';
import './QuiryFrom.css';

const QuiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
  };

  return (
    <div className="inquiry-form-container">
      <h3>For Inquiries</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number</label>
          <div className="phone-input-wrapper">
            <select className="country-code">
              <option value="+1">US 🇺🇸 +1</option>
              <option>IN us +91</option>
              <option>UK us +44</option>
            </select>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="(555) 000-0000"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Leave us a message..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="send-message-button">
          Send message
        </button>
      </form>
    </div>
  );
};

export default QuiryForm;































// import React from 'react';
// import './QuiryFrom.css';


// const QuiryForm = () => {
//   return (
//     <div className="inquiry-container">
//       <div className="inquiry-card">
//         <h2 className="form-title">For Inquiries</h2>
//         <form className="inquiry-form">
//           <div className="form-row">
//             <input type="text" placeholder="First name" className="form-input" />
//             <input type="text" placeholder="Last name" className="form-input" />
//           </div>
//           <input type="email" placeholder="you@company.com" className="form-input full-width" />
//           <div className="form-row">
//             <select className="form-input select-country">
//               <option>US</option>
//               <option>IN</option>
//               <option>UK</option>
//             </select>
//             <input type="tel" placeholder="+1 (555) 000-0000" className="form-input" />
//           </div>
//           <textarea placeholder="Leave us a message..." className="form-textarea"></textarea>
//           <button type="button" className="form-button">Send message</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default QuiryForm;
