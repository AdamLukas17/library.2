import React from 'react';
import Modal from './Modal';

function AddButton() {
  const [isButtonClicked, setButtonClick] = React.useState(false)
  const handleClick = () => {
    setButtonClick(true)
  }
    return( 
      <div className = "flex">
        <div className="p-6 py-10 max-w-sm mx-auto bg-gray-dark rounded-xl shadow-lg flex items-center gap-x-4">
          <button 
          className="text-xl font-medium text-primary" 
          onClick= {
            handleClick
          }
          >Add</button> 
      </div>
      {isButtonClicked && <Modal />}
      </div>
)}

export default AddButton;