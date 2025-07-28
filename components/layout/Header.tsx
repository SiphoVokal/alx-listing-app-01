import React from "react";

const Header: React.FC = () => {
  const categories = ["Rooms", "Mansion", "Countryside", "Villas", "Apartments"];

  return (
    <header className="bg-white shadow p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">StayFinder</div>
      <input
        type="text"
        placeholder="Search properties..."
        className="border px-3 py-2 rounded w-full md:w-1/3 my-2 md:my-0"
      />
      <div className="flex space-x-4 mt-2 md:mt-0">
        <button className="text-blue-600">Sign In</button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Sign Up</button>
      </div>
      <div className="flex space-x-2 mt-2 md:mt-0">
        {categories.map((cat) => (
          <span key={cat} className="text-sm text-gray-600 cursor-pointer hover:text-blue-600">
            {cat}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
