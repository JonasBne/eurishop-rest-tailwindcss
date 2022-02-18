import React from 'react';

function VisaCard() {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src="https://img.icons8.com/color/344/visa.png"
        alt="Visa card icon"
        width="40"
        className="relative right-5"
      />{' '}
      <span className="text-xs font-medium text-gray-200 bottom-2 relative right-5">Visa</span>
    </div>
  );
}

export default VisaCard;
