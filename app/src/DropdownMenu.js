import React, { useState } from 'react';

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Option:', selectedOption);
    // Add your logic to add the new class here
  };

  const menuClass = selectedOption === '' ? 'inactive' : 'active';

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Select a class:
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Choose a class</option>
            <option value="class1">Class 1</option>
            <option value="class2">Class 2</option>
            <option value="class3">Class 3</option>
          </select>
        </label>
        <button type="submit">Add Class</button>
      </form>
      <div className={`dropdown-menu ${menuClass}`}>
        {/* Dropdown menu content */}
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;