import React from 'react';
import './webstyles/DisplayItems.css';
import { useNavigate } from 'react-router-dom';

const DisplayItems = ({ items }) => {
  const navigate = useNavigate();

  return (
    <div className="display-items-wrapper">
      <div className="display-items-container">
        <h2>All Inventory Items</h2>
        {items.length > 0 ? (
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
              {items.map((item) => (
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
        ) : (
          <p className="display-message">No items in inventory.</p>
        )}

        {/* Return to Dashboard Button */}
        <button className="back-dashboard-button" onClick={() => navigate('/')}>Return to Dashboard</button>
      </div>
    </div>
  );
};

export default DisplayItems;