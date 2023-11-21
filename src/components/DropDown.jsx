// import React , {useState} from 'react'

// const DropDown = (props) => {

//     const [selectedOption, setSelectedOption] = useState(props.name);

//     const handleOptionSelect = (option) => {
//       setSelectedOption(option);
//     };

//   return (
//     <div className="dropdown">
//       <button class="btn btn-primary dropdown-toggle" 
//               type="button" id="dropdownMenuButton1"
//               data-bs-toggle="dropdown" aria-expanded="false"
//       >
//         {selectedOption}
//       </button>
//       <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//         <li>
//           <span className="dropdown-item" onClick={() => handleOptionSelect(`${props.option1}`)}>{props.option1}</span>
//         </li>
//         <li>
//           <span className="dropdown-item" onClick={() => handleOptionSelect(`${props.option2}`)}>{props.option2}</span>
//         </li>
//         <li>
//           <span className="dropdown-item" onClick={() => handleOptionSelect(`${props.option3}`)}>{props.option3}</span>
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default DropDown;
import React, { useState } from 'react';

const DropDown = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.name);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Notify parent component about the selected option
    props.onSelect(option);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedOption}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <span
            className="dropdown-item"
            onClick={() => handleOptionSelect(`${props.option1}`)}
          >
            {props.option1}
          </span>
        </li>
        <li>
          <span
            className="dropdown-item"
            onClick={() => handleOptionSelect(`${props.option2}`)}
          >
            {props.option2}
          </span>
        </li>
        <li>
          <span
            className="dropdown-item"
            onClick={() => handleOptionSelect(`${props.option3}`)}
          >
            {props.option3}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
