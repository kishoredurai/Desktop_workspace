import React from "react";
import { useNavigate } from "react-router-dom";
import Admin_header from "../../layout/header/admin_header";
import { Container_table } from "./sub_component/container_table";

export const Container = () => {
  const navigate = useNavigate();
    return(
        <>
        <Admin_header />
  
        <div className="pt-6 p-2 sm:p-6 mt-3 py-6 w-full">
          <nav
            className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <button
                  onClick={()=> navigate("/admin/dashboard")}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Dashboard
                </button>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <button
                    
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Containers 
                  </button>
                </div>
              </li>
            </ol>
          </nav>
  
  {/* Image Details Table */}
          <header>
            <button
              type="button"
              onClick={()=>navigate('/admin/container/new')}
              className="mt-3 float-right text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-bold rounded-lg text-xs px-3 py-2 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              New Containers
            </button>
            <div className="py-4 mt-3 px-2">
              <h1 className="text-xl font-bold tracking-tight text-gray-900">
                Container Details
              </h1>
            </div>
          </header>
  
          <div className="rounded-xl border-1 border-gray-500 shadow-xl">
          <Container_table />
          </div>
  
  

        </div>
      </>
    )
}