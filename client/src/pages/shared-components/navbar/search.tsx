import { BiSearch } from "react-icons/bi";
import React from "react";

const Search: React.FC = () => {
  return (
    <div>
      <div>
        <form
          action=""
          className="flex items-center border bg-gray-500 h-10 rounded overflow-hidden"
        >
          <input
            type="text"
            placeholder="search document"
            className="bg-white px-5 h-full outline-none"
          />
          <button className="px-2 py-2 text-white text-xl">
            <BiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
