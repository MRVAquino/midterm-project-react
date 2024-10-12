import React, { useState } from 'react';
import './webstyles/AddItem.css'; // Import the CSS file for styles
import { useNavigate } from 'react-router-dom';

const AddItem = ({ addItem, items }) => { // Pass `items` prop for validation
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Clothing');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Use navigate for going back

  const handleAddItem = (e) => {
    e.preventDefault();

    const idExists = items.some(item => item.id === id);

    if (idExists) {
      setMessage('Item ID already exists. Please use a unique ID.');
    } else if (id && name && quantity && price) {
      addItem({ id, name, quantity: parseInt(quantity), price: parseFloat(price), category });
      setMessage('Item added successfully!');
      
      setId('');
      setName('');
      setQuantity('');
      setPrice('');
      setCategory('Clothing');
    } else {
      setMessage('Please fill out all fields!');
    }
  };

  return (
    <div className="add-item-container">
      <form onSubmit={handleAddItem} className="add-item-form">
      <h2>Add New Item</h2>
        <div className="input-wrapper">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
          required
          className="add-item-input"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="add-item-input"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          required
          className="add-item-input"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
          className="add-item-input"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="add-item-select">
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
          </div>
        <button type="submit" className="add-item-button">Add Item</button>
      </form>
      {message && <p className="add-item-message">{message}</p>}

      {/* Back to Dashboard button centered at the bottom */}
      <div className="back-button-container">
        <button onClick={() => navigate('/')} className="back-dashboard-button">Return to Dashboard</button>
      </div>
    </div>
  );
};

export default AddItem;