import React from 'react';

function Navbar() {
  return (
    <header className="bg-gray-900">
      <div>
        <h2 className="text-center text-white">Eurishop</h2>
      </div>
      <div>
        <button type="button" className="text-gray-400">
          <svg viewBox="0 0 24 24" className="fill-current h-6 w-6">
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
