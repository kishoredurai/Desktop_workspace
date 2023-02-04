import React from "react";
import Admin_header from "../../layout/header/admin_header";
import { Container_user_table } from "./sub_component/container_user_table";
export const Conatiner_user = () => {
    return(
        <>
        <Admin_header />
  





        <div className="pt-6 p-2 sm:p-6 mt-3 w-full">
          <nav
            className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <button
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
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <button
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Container Users 
                  </button>
                </div>
              </li>
            </ol>
          </nav>


      {/* count bar added  */}
  
      <section className="pt-6 py-0 container px-4 sm:px-1 mx-auto">
          <div className="grid gap-6 mb-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
              <div className="p-3 mr-4 bg-green-500 text-white rounded-full">
              <svg
      viewBox="0 0 640 512"
      fill="currentColor"
     className="w-12 h-12"
    >
      <path d="M352 128c0 70.7-57.3 128-128 128S96 198.7 96 128 153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
    </svg>
              </div>
              <div className="text-center float-center items-center">
                <p className="mb-2 text-5xl font-medium text-gray-900 items-center">
                  58
                </p>
                <p className="flex px-10 text-sm font-normal text-gray-800">
                 Activated users
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
              <div className="p-3 mr-4 bg-red-500 text-white rounded-full">
              <svg
      viewBox="0 0 640 512"
      fill="currentColor"
      className="w-12 h-12"
    >
      <path d="M352 128c0 70.7-57.3 128-128 128S96 198.7 96 128 153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM471 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
    </svg>


              </div>
              <div className="text-center float-center items-center">
                <p className="mb-2 text-5xl font-medium text-gray-900 items-center">
                  58
                </p>
                <p className="flex px-8 text-sm font-normal text-gray-800">
                  Non Activated Users
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
              <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
              <svg
      viewBox="0 0 640 512"
      fill="currentColor"
      className="w-12 h-12"
    >
      <path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7-1.3 7.2-1.9 14.7-1.9 22.3 0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7zM405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96 0-7.6-.7-15-1.9-22.3 13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7 0 11.8-9.6 21.3-21.3 21.3H405.3zm10.7-96c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zM128 485.3c0-73.6 59.7-133.3 133.3-133.3h117.4c73.6 0 133.3 59.7 133.3 133.3 0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
    </svg>

              </div>
              <div className="text-center float-center items-center">
                <p className="mb-2 text-5xl font-medium text-gray-900 items-center">
                  58
                </p>
                <p className="flex px-14 text-sm font-normal text-center text-gray-800">
                  Total Users
                </p>
              </div>
            </div>
          </div>
        </section>
  
  {/* user Details Table */}
          <header>
          
            <div className="py-4 px-2">
              <h1 className="text-xl font-bold tracking-tight text-gray-900">
                Container Users Details
              </h1>
            </div>
          </header>
  
          <div className="rounded-xl border-1 border-gray-500 shadow-xl">
            <Container_user_table />
          </div>
  
  

        </div>
      </>
    )
}