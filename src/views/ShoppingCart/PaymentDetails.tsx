import React from 'react';
import MasterCardLogo from '../../assets/logos/MasterCardLogo';
import VisaCardLogo from '../../assets/logos/VisaCardLogo';
import Button from '../../components/Button';

function PaymentDetails() {
  return (
    <div className=" p-5 bg-gray-800 rounded overflow-hidden">
      <h2 className="text-xl font-medium text-gray-100 block pb-3">Payment Details</h2>
      <span className="text-xs text-gray-300 ">Select your card</span>
      <div className="overflow-visible flex justify-around items-center mt-2">
        <MasterCardLogo />
        <VisaCardLogo />
      </div>
      <div className="flex justify-center flex-col pt-3">
        <label htmlFor="card-holder" className="text-xs text-gray-400 ">
          Name on Card
          <input
            type="text"
            id="card-holder"
            name="card-holder"
            className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
            placeholder="John Doe"
          />
        </label>
      </div>
      <div className="flex justify-center flex-col pt-3">
        <label htmlFor="card-number" className="text-xs text-gray-400 ">
          Card Number
          <input
            type="text"
            id="card-number"
            name="card-number"
            className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
            placeholder="**** **** **** ****"
          />
        </label>
      </div>
      <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
        <div className="col-span-2 ">
          <label htmlFor="exp-date" className="text-xs text-gray-400">
            Expiration Date
            <input
              type="text"
              id="exp-date"
              name="exp-date"
              className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
              placeholder="05/22"
            />
          </label>
          <div>
            <label htmlFor="cvv-code" className="text-xs text-gray-400">
              CVV
              <input
                type="text"
                id="cvv-code"
                name="cvv-code"
                className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                placeholder="***"
              />
            </label>
          </div>
        </div>
      </div>
      <Button variant="primary" className="h-12 w-full">
        Check Out
      </Button>
    </div>
  );
}

export default PaymentDetails;
