import React from "react";
import { NavLink } from "react-router-dom";

function NavBarN() {
  return (
    <nav className="sticky top-0 z-10 bg-purple-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-24">
          <NavLink
            to="/"
            exact
            className={({ isActive }) =>
              isActive
                ? "flex mt-1 lg:inline-block lg:mt-0 text-purple-600 hover:text-purple-500 mr-4 cursive text-2xl lg:text-4xl"
                : "flex mt-1 lg:inline-block lg:mt-0 text-purple-500 hover:text-purple-600 mr-4 cursive text-2xl lg:text-4xl"
            }
          >
            Burrito Stories
          </NavLink>
          <div className="flex space-x-4 text-gray-900 text-left ">
            <NavLink
              to="post"
              className={({ isActive }) =>
                isActive
                  ? "block mt-1 font-medium lg:inline-block lg:mt-0 text-purple-600 hover:text-600"
                  : "block mt-1 font-medium lg:inline-block lg:mt-0 text-gray-600 hover:text-purple-600"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="stories"
              className={({ isActive }) =>
                isActive
                  ? "block mt-1 font-medium lg:inline-block lg:mt-0 text-purple-600 hover:text-600 mr-4 "
                  : "block mt-1 font-medium lg:inline-block lg:mt-0 text-gray-600 hover:text-purple-600 mr-4"
              }
            >
              Stories
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive
                  ? "block mt-1 font-medium lg:inline-block lg:mt-0 text-purple-600 hover:text-600 mr-4 "
                  : "block mt-1 font-medium lg:inline-block lg:mt-0 text-gray-600 hover:text-purple-600 mr-4"
              }
            >
              About Me
            </NavLink>
          </div>
        </div>
      </div>
    </nav>

    // <div className="sticky top-0 z-10">
    //   <img src={image} alt="Library" className="object-cover w-full h-36" />
    //   <div className="z-1">
    //     <nav class="flex items-center justify-center">
    //       <div class="flex text-4xl lg:pt-0">
    //         <NavLink
    //           to="/"
    //           exact
    //           className="flex lg:inline-block text-purple-300 hover:text-purple-200 mr-4 cursive"
    //         >
    //           Burrito Stories
    //         </NavLink>
    //       </div>
    //     </nav>
    //   </div>
    // </div>
  );
}

export default NavBarN;
