import React from 'react';
import { useNavigate } from 'react-router-dom';
import './webstyles/DisplayLowStock.css';

const DisplayLowStock = ({ items }) => {
  const navigate = useNavigate(); // Initialize navigate
  const lowStockItems = items.filter((item) => item.quantity <= 5);

  return (
    <div className="display-low-container"> {/* Use a class for centering */}
      <h2>Low Stock Items</h2>
      {lowStockItems.length > 0 ? (
        <table className="low-stock-table"> {/* Add a class for styling */}
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
            {lowStockItems.map((item) => (
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
        <p className="low-message">No low stock items.</p>
      )}

      {/* Back to Dashboard button */}
      <button onClick={() => navigate('/')} className="back-dashboard-button">Return to Dashboard</button>
    </div>
  );
};

export default DisplayLowStock;