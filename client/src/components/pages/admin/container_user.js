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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
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