import React, { useState, useEffect } from 'react';
import './CustomerReview.css'



function CustomerReview() {
  // Existing state variables
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [name, setName] = useState('');

  // New state variables for handling arrow keys and visible messages
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  // Update visible messages based on currentIndex
  useEffect(() => {
    const newVisibleMessages = messages.slice(currentIndex, currentIndex + 4);
    setVisibleMessages(newVisibleMessages);
  }, [messages, currentIndex]);
  const handleButtonClick = () => {
    const message = document.querySelector('textarea').value;
    setMessages([...messages, { name, message, rating: currentValue }]);
    setName('');
    document.querySelector('textarea').value = '';
    setCurrentValue(0);
  };

  return (
    <div className="app-container">
      <div className="container">
      <div id="carouselExample" className="carousel slide">
        <div className='title'>Gallery</div>
  <div className="carousel-inner">
    <div className="carousel-item active  mt-5">
      <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfDB8MHx8fDA%3D" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item mt-5">
      <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfDB8MHx8fDA%3D" className="d-block w-100" alt="bg"/>
    </div>
    <div className="carousel-item mt-5">
      <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfDB8MHx8fDA%3D" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='rateus'>
        <h1 className='title'>Rate Us</h1>
        <div className='stars-container'>
        
        </div>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="name"
        />
        <textarea
          placeholder="What's your experience?"
          className="name"
        />
        <button className="button" onClick={handleButtonClick}>
          Submit
        </button><br />
        <div className="messages-container">
          {visibleMessages.map((item, index) => (
            <div key={index} className="message">
              <strong>{item.name}:</strong> <br />Rating: {getStars(item.rating)} <br/>{item.rating} out of 5
              <br />
              {item.message}
            </div>
          ))}
        </div>
        </div>

      </div>
    </div>
  );
}

const getStars = (rating) => {
  const starSymbols = '★'.repeat(rating) + '☆'.repeat(5 - rating);
  return starSymbols;
}

export default CustomerReview;
