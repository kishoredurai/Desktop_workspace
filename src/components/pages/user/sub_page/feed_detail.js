import React from "react";
import Header from "../../../layout/header/header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Feed_detail = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <div className="w-full">
        <header className="bg-white ">
          <div className="mx-auto py-4 mt-3 px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Tickets Details
            </h1>
          </div>
        </header>

        <div className="grid sm:ml-8 px-2 sm:px-5 grid-flow-row sm:grid-flow-col gap-5 sm:gap-16 ">
          <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-lg shadow-lg bg-white flex flex-col items-center ">
            <div className="w-full md:h-full">
              <div className=" md:col-span-2 md:mt-0">
                <form action="/">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="first-name"
                            className="block text-base font-bold text-gray-700"
                          >
                            Title
                          </label>
                          <textarea
                            type="text"
                            name="city"
                            cols={400}
                            rows="1"
                            id="city"
                            readOnly
                            autoComplete="address-level2"
                            className="resize-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="city"
                            className="block text-base font-bold text-gray-700"
                          >
                            Description
                          </label>
                          <textarea
                            type="text"
                            name="city"
                            cols={40}
                            rows="5"
                            id="city"
                            readOnly
                            autoComplete="address-level2"
                            className="resize-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 ">
                          <label
                            htmlFor="region"
                            className="block text-base font-medium text-gray-700 mb-3"
                          >
                            Category
                          </label>

                          <div className="flex">
                            <div className="text-sm pt-1 text-gray-600">
                              <span className="mr-2 text-sm inline-block py-2 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                                #Machine
                              </span>
                              <span className="text-sm inline-block py-2 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                                #Installation
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-6 sm:col-span-6 ">
                          <label
                            htmlFor="region"
                            className="block text-base font-medium text-gray-700 mb-3"
                          >
                            Complaint Images
                          </label>

                          <div className="flex items-center justify-center w-full">
                            <label
                              className="flex flex-col items-center justify-center w-full h-54 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                  aria-hidden="true"
                                  className="w-10 h-10 mb-3 text-gray-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                  ></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                  <span className="font-semibold">
                                    Click to upload
                                  </span>{" "}
                                  or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                              </div>
                              <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="flex text-6xl  rounded-xl float-right max-w-lg">
            <div className="justify-center mb-10">
              <div className="block p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white ">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5">
                  Ticket Status :
                </h5>

                <div className="mb-4 w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className="h-6 bg-green-600 rounded-md dark:bg-green-500 text-sm font-bold text-red-100 text-center"
                    style={{ width: "100%" }}
                  >
                    DECLINED
                  </div>
                </div>
                
                <div className="grid grid-cols-6 gap-6 ">
                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="first-name"
                            className="block text-base font-medium text-gray-600"
                          >
                           Ticket Id : 
                          </label>
                          <input
                            type="text"
                            name="city"
                            value="#123123123123123"
                            id="city"
                            readOnly
                            disabled
                            className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="city"
                            className="block text-base font-medium text-gray-600"
                          >
                            Ticket Date :
                          </label>
                          <input
                            type="text"
                            name="city"
                            value="2022-08-15"
                            id="city"
                            readOnly
                            disabled
                            className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        

                        
                      </div>
           

                <div className="flex pt-8 ml-0 space-x-3 justify-center">
                 
                  <button
                    type="button"
                    onClick={() => navigate("/ticket")}
                    className="inline-block px-6 w-full py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  //sdfdsfsdsdd
};
