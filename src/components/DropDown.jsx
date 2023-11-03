import React from 'react'

const DropDown = (props) => {
    const {name} = props;
  return (
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {name}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <span class="dropdown-item"> Action 1 </span>
            <span class="dropdown-item"> Action 2 </span>
            <span class="dropdown-item"> Action 3 </span>
        </div>
    </div>
  )
}

export default DropDown;