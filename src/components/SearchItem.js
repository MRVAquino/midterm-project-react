import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './webstyles/SearchItem.css';

const SearchItem = ({ items }) => {
  const [id, setId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const item = items.find((item) => item.id === id);
    if (item) {
      setFoundItem(item);
      setMessage('');
    } else {
      setFoundItem(null);
      setMessage('Item not found!');
    }
  };

  return (
    <div className="search-item-container">
      <h2>Search Item</h2>
      <form onSubmit={handleSearch} className="search-item-form">
        <div className="input-wrapper">
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Item ID"
            required
            className="search-item-input"
          />
          <button type="submit" className="search-item-button">Search</button>
        </div>
      </form>
      {message && <p>{message}</p>}
      {foundItem && (
        <div className="item-details">
          <h3>Item Details:</h3>
          <table className="item-details-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{foundItem.id}</td>
                <td>{foundItem.name}</td>
                <td>{foundItem.quantity}</td>
                <td>{foundItem.price}</td>
                <td>{foundItem.category}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <button onClick={() => navigate('/')} className="back-dashboard-button">Return to Dashboard</button>
    </div>
  );
};

export default SearchItem;
