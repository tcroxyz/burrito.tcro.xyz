import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav class="flex items-center justify-center flex-wrap lg:justify-center bg-gray-700 pl-3 pb-3 lg:p-6">
        <div class="flex text-4xl lg:p-auto">
          <NavLink
            to="/"
            exact
            className={({ isActive }) =>
              isActive
                ? "flex mt-4 lg:inline-block lg:mt-0 text-purple-300 hover:text-purple-200 mr-4 cursive"
                : "flex mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-purple-300 mr-4 cursive"
            }
          >
            Burrito Stories
          </NavLink>
        </div>
        <div class="w-full block flex-grow lg:flex text-center lg:items-center justify-center">
          <div class="">
            <NavLink
              to="post"
              className={({ isActive }) =>
                isActive
                  ? "block mt-4 lg:inline-block lg:mt-0 text-purple-300 hover:text-white mr-4 "
                  : "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-300 mr-4"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="stories"
              className={({ isActive }) =>
                isActive
                  ? "block mt-4 lg:inline-block lg:mt-0 text-purple-300 hover:text-white mr-4 "
                  : "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-300 mr-4"
              }
            >
              Stories
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive
                  ? "block mt-4 lg:inline-block lg:mt-0 text-purple-300 hover:text-white mr-4 "
                  : "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-300 mr-4"
              }
            >
              About Me
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
