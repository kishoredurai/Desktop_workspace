import React from 'react'
import Admin_header from '../../layout/header/admin_header'
import { useState } from 'react'
import MaterialTable from 'material-table'
import { Image_table } from './sub_component/image_table'
import { useNavigate } from 'react-router-dom'
export const Container_image = () => {
  const navigate = useNavigate();
  return (
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
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <button
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Container Image
                </button>
              </div>
            </li>
          </ol>
        </nav>



         {/* count bar added  */}
  
      <section className="pt-6 py-0 container px-4 sm:px-1 mx-auto">
          <div className="grid gap-6 mb-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
              <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
              <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className='w-12 h-12'
    >
      <path d="M19 17h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2m-4-7a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m5-3h-8l-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z" />
    </svg>
              </div>
              <div className="text-center float-center items-center">
                <p className="mb-2 text-5xl font-medium text-gray-900 items-center">
                  58
                </p>
                <p className="flex px-10 text-sm font-normal text-gray-800">
                 Total Images
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
              <div className="p-3 mr-4 bg-green-500 text-white rounded-full">
              <svg
      fill="currentColor"
      viewBox="0 0 16 16"
     className='w-12 h-12'
    >
      <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
      <path d="M10.97 4.97a.235.235 0 00-.02.022L7.477 9.417 5.384 7.323a.75.75 0 00-1.06 1.06L6.97 11.03a.75.75 0 001.079-.02l3.992-4.99a.75.75 0 00-1.071-1.05z" />
    </svg>


              </div>
              <div className="text-center float-center items-center">
                <p className="mb-2 text-5xl font-medium text-gray-900 items-center">
                  58
                </p>
                <p className="flex px-8 text-sm font-normal text-gray-800">
                  Active Images
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
              <div className="p-3 mr-4 bg-red-500 text-white rounded-full">
              <svg
      viewBox="0 0 512 512"
      fill="currentColor"
     className='w-12 h-12'
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={40}
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M320 320L192 192M192 320l128-128"
      />
    </svg>

              </div>
              <div className="text-center float-center items-center">
                <p className="mb-2 text-5xl font-medium text-gray-900 items-center">
                  58
                </p>
                <p className="flex px-14 text-sm font-normal text-center text-gray-800">
                  Inactive Images
                </p>
              </div>
            </div>
          </div>
        </section>
  
  

{/* Image Details Table */}
        <header>
          <button
            type="button"
            onClick={()=>navigate("/admin/image/new")}
            className="mt-3 float-right text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-bold rounded-lg text-xs px-3 py-2 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            New Image
          </button>
          <div className="py-4 mt-3 px-2">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Image Details
            </h1>
          </div>
        </header>

        <div className="rounded-xl border-1 border-gray-500 shadow-xl">
          <Image_table />
        </div>


      </div>
    </>
  )
}
