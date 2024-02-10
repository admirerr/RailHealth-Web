// MainComponent.js

import React, { useState } from 'react';
import Popup from './Popup';

const MainComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      {/* Your main content goes here */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleOpenPopup}
      >
        Open Popup
      </button>

      {isPopupOpen && <Popup onClose={handleClosePopup} />}
    </div>
  );
};

export default MainComponent;
