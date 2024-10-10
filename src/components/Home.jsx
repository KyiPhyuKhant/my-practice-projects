import React from "react";
import "./Home.css";

const testimonials = [
  { name: "Alice", text: "This is the best service I've ever used!" },
  { name: "Alice", text: "This is the best service I've ever used!" },
  { name: "Alice", text: "This is the best service I've ever used!" },
];

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <div className="banner">
        <h1>Welcome to Our Website!</h1>
      </div>

      {/* Welcome Paragraph */}
      <div className="welcome">
        <p>
          We are committed to providing the best service possible. Our team is
          dedicated to making your experience seamless and enjoyable.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.text}"</p>
            <p>-{testimonial.name}</p>
          </div>
        ))}
      </div>

      {/* Icon List Section */}
      <div className="icon-list">
        <h2>Our Advantages</h2>
        <ul>
          <li><i className="fas fa-check-circle"></i> Quality Service</li>
          <li><i className="fas fa-check-circle"></i> 24/7 Support</li>
          <li><i className="fas fa-check-circle"></i> Affordable Pricing</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </footer>
      
    </div>
  );
};

export default Home;
