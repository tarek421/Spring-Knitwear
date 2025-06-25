import React from 'react';
import '../Products.css';

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Categories</h3>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`category-item ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
