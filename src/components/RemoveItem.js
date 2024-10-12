import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './webstyles/RemoveItem.css';

const RemoveItem = ({ removeItem }) => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRemoveItem = (e) => {
    e.preventDefault();
    const result = removeItem(id);
    setMessage(result ? `Item with ID ${id} has been removed.` : 'Item not found!');
    setId(''); // Clear the input field after submission
  };

  return (
    <div className="remove-item-container">
      <form onSubmit={handleRemoveItem} className="remove-item-form">
        <h2>Remove Item</h2>
        <div className="input-wrapper">
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Item ID"
            required
            className="input"
          />
        </div>
        <button type="submit" className="remove-item-button">Remove Item</button>
      </form>
      {message && <p className="message">{message}</p>}

      {/* Back to Dashboard button */}
      <button onClick={() => navigate('/')} className="back-dashboard-button">Return to Dashboard</button>
    </div>
  );
};

export default RemoveItem;
