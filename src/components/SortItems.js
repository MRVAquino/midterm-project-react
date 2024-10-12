import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './webstyles/SortItems.css';

const SortItems = ({ items }) => {
  const [sortBy, setSortBy] = useState('quantity'); // default sorting by quantity
  const [order, setOrder] = useState('ascending'); // default order is ascending
  const [sortedItems, setSortedItems] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  const handleSort = (e) => {
    e.preventDefault();
    const sorted = [...items].sort((a, b) => {
      if (order === 'ascending') {
        return a[sortBy] - b[sortBy];
      } else {
        return b[sortBy] - a[sortBy];
      }
    });
    setSortedItems(sorted);
  };

  return (
    <div className="sort-items-container"> {/* Added container class for styling */}
      <h2>Sort Items</h2>
      <form onSubmit={handleSort} className="sort-items-form">
        <label>
          Sort By:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
          </select>
        </label>
        <label>
          Order:
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </label>
        <button type="submit">Sort</button>
      </form>

      {sortedItems.length > 0 && (
        <table className="items-table">
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
            {sortedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Back to Dashboard button */}
      <button onClick={() => navigate('/')} className="back-dashboard-button">Return to Dashboard</button>
    </div>
  );
};

export default SortItems;