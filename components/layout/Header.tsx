import React from "react";

const Header = () => {
  const filters = ["Rooms", "Mansion", "Countryside", "Mountain", "Villa"];

  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-2xl font-bold text-indigo-700">StayNest</div>

      <input
        type="text"
        placeholder="Search properties..."
        className="border px-4 py-2 rounded-md w-full md:w-1/3"
      />

      <div className="flex gap-2">
        <button className="text-indigo-600 font-medium">Sign In</button>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Sign Up</button>
      </div>

      <div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto">
        {filters.map((filter, index) => (
          <span
            key={index}
            className="px-3 py-1 border rounded-full text-sm hover:bg-indigo-100 cursor-pointer"
          >
            {filter}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
