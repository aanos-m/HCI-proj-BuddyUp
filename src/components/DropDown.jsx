// DropDown.js
import React, { useState } from 'react';

const DropDown = ({ name, options, onSelect }) => {
  // const [selectedOption, setSelectedOption] = useState(options[0].name);
  const [selectedOption, setSelectedOption] = useState(name);

  const handleOptionSelect = (option) => {
    setSelectedOption(option.name);
    onSelect(option.name);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id={`dropdownMenuButton-${name}`}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedOption}
      </button>
      <ul
        className="dropdown-menu"
        aria-labelledby={`dropdownMenuButton-${name}`}
        style={{ maxHeight: '250px', overflowY: 'auto' }}
      >
        {options.map((option) => (
          <li key={option.name}>
            <span className="dropdown-item" onClick={() => handleOptionSelect(option)}>
              {option.name.length > 10
                ? option.name.slice(0, 10) +
                  ' ... ' +
                  option.name.slice(option.name.indexOf('('))
                : option.name }
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
