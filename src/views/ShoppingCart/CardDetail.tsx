/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function CartDetails() {
  return (
    <div className=" p-5 bg-gray-800 rounded overflow-visible">
      {' '}
      <span className="text-xl font-medium text-gray-100 block pb-3">Card Details</span>{' '}
      <span className="text-xs text-gray-400 ">Card Type</span>
      <div className="overflow-visible flex justify-between items-center mt-2">
        <div className="flex justify-center items-center flex-col">
          <img
            src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
            width="40"
            className="relative right-5"
          />{' '}
          <span className="text-xs font-medium text-gray-200 bottom-2 relative right-5">Mastercard.</span>
        </div>
      </div>
      <div className="flex justify-center flex-col pt-3">
        {' '}
        <label className="text-xs text-gray-400 ">Name on Card</label>{' '}
        <input
          type="text"
          className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
          placeholder="Giga Tamarashvili"
        />{' '}
      </div>
      <div className="flex justify-center flex-col pt-3">
        {' '}
        <label className="text-xs text-gray-400 ">Card Number</label>{' '}
        <input
          type="text"
          className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
          placeholder="**** **** **** ****"
        />{' '}
      </div>
      <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
        <div className="col-span-2 ">
          {' '}
          <label className="text-xs text-gray-400">Expiration Date</label>
          <div className="grid grid-cols-2 gap-2">
            {' '}
            <input
              type="text"
              className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
              placeholder="mm"
            />{' '}
            <input
              type="text"
              className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
              placeholder="yyyy"
            />
          </div>
          <div className="">
            {' '}
            <label className="text-xs text-gray-400">CVV</label>{' '}
            <input
              type="text"
              className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
              placeholder="XXX"
            />{' '}
          </div>
        </div>{' '}
        <button
          type="button"
          className="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600"
        >
          Check Out
        </button>
      </div>
    </div>
  );
}

export default CartDetails;
