import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/DashBoard.js';
import AddItem from './components/AddItem.js';
import RemoveItem from './components/RemoveItem.js';
import UpdateItem from './components/UpdateItem.js';
import DisplayItems from './components/DisplayItems.js';
import SearchItem from './components/SearchItem.js';
import SortItems from './components/SortItems.js';
import DisplayLowStock from './components/DisplayLowStock.js';
import DisplayItemsByCategory from './components/DisplayItemsByCategory.js'; 
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => setItems([...items, newItem]);

  const removeItem = (id) => {
    const itemExists = items.find((item) => item.id === id);
    if (itemExists) {
      setItems(items.filter((item) => item.id !== id));
      return true;
    }
    return false;
  };

  const updateItem = (id, field, newValue) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      const updatedItems = [...items];
      updatedItems[itemIndex][field] = parseFloat(newValue);
      setItems(updatedItems);
      return true;
    }
    return false;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-item" element={<AddItem addItem={addItem} items={items} />} /> {/* Pass items */}
          <Route path="/remove-item" element={<RemoveItem removeItem={removeItem} />} />
          <Route path="/update-item" element={<UpdateItem updateItem={updateItem} />} />
          <Route path="/display-all-items" element={<DisplayItems items={items} />} />
          <Route path="/display-items-category" element={<DisplayItemsByCategory items={items} />} /> {/* Add this */}
          <Route path="/search-item" element={<SearchItem items={items} />} />
          <Route path="/sort-items" element={<SortItems items={items} />} />
          <Route path="/low-stock-items" element={<DisplayLowStock items={items} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;