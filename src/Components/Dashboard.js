import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faHome,
  faBookmark,
  faComment,
  faSignOutAlt,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-blue-600">
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon
          icon={faFilter}
          className="px-2 bg-gray-900 rounded-md"
        />
      </span>
      {isSidebarOpen && (
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <FontAwesomeIcon
                icon={faFilter}
                className="px-2 py-1 rounded-md bg-blue-600"
              />
              <h1 className="font-bold text-gray-200 text-[15px] ml-3">
                TailwindCSS
              </h1>
              <FontAwesomeIcon
                icon={faFilter}
                className="cursor-pointer ml-28 lg:hidden"
                onClick={toggleSidebar}
              />
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
            <FontAwesomeIcon icon={faSearch} className="text-sm" />
            <input
              type="text"
              placeholder="Search"
              className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
            />
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <FontAwesomeIcon icon={faHome} />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Home
            </span>
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <FontAwesomeIcon icon={faBookmark} />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Bookmark
            </span>
          </div>
          <div className="my-4 bg-gray-600 h-[1px]"></div>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            onClick={toggleDropdown}
          >
            <FontAwesomeIcon icon={faComment} />
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Chatbox
              </span>
              <span className="text-sm rotate-180" id="arrow">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={isDropdownOpen ? "rotate-0" : ""}
                />
              </span>
            </div>
          </div>
          {isDropdownOpen && (
            <div
              className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
              id="submenu"
            >
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                Social
              </h1>
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                Personal
              </h1>
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                Friends
              </h1>
            </div>
          )}
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Logout
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
