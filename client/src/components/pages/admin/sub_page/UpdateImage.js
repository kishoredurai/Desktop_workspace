import React, { useState } from "react";
import Admin_header from "../../../layout/header/admin_header";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

export const UpdateImage = () => {

    const navigate = useNavigate();
    let [data,setData] = useState(null);
    const [test,setTest] = useState('no');

    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id");
    console.log("data : "+id)

    useEffect(() => {
      const queryParameters = new URLSearchParams(window.location.search)
      const id = queryParameters.get("id");
      console.log("data : "+id)
    }, [])


    return(
        <>
      <Admin_header />
      <div className="h-screen w-full">
        <header className="bg-white ">
          <div className="mx-auto mt-3 px-4 pt-4 sm:px-6 lg:px-12">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Update Container Image
            </h1>
          </div>
        </header>

        <div className="sm:m-8 sm:mt-2 p-2 sm:p-5  gap-5 sm:gap-16 ">
          <div className="justify-center text-6xl border-2 border-gray-300 rounded-lg shadow-lg bg-white flex flex-col items-center ">
            <div className="w-full md:h-full">
              <div className=" md:col-span-2 md:mt-0">
                <form >
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="p-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">


                      <div className="col-span-6 sm:col-span-2">
                          <label
                            className="block text-base font-bold text-gray-700"
                          >
                            Image Id
                          </label>
                          <input
                            type="text"
                            name="baseimage"
                            id="base-image"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                           readOnly
                          />
                          
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                          <label
                            htmlFor="first-name"
                            className="block text-base font-bold text-gray-700"
                          >
                            Image Size
                          </label>
                          <input
                            type="text"
                            name="imageversion"
                            id="email-address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                         
                        </div>

                        <div className="col-span-6 sm:col-span-2">
                          <label
                            htmlFor="first-name"
                            className="block text-base font-bold text-gray-700"
                          >
                            created By 
                          </label>
                          <input
                            type="text"
                            name="imageversion"
                            id="email-address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                         
                        </div>


                        <div className="col-span-6 sm:col-span-6">
                          <label
                            className="block text-base font-bold text-gray-700"
                          >
                            New Image Name
                          </label>
                          <input
                            type="text"
                            name="imagename"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            value="ss"
                            
                          />
                          <p
                            id="helper-text-explanation"
                            className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                          >
                            Set Name for container image
                          </p>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            className="block text-base font-bold text-gray-700"
                          >
                            Base Image Name
                          </label>
                          <input
                            type="text"
                            name="baseimage"
                            id="base-image"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                           readOnly
                          />
                          <p
                            id="helper-text-explanation"
                            className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                          >
                            Eg : (ubuntu)
                          </p>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-base font-bold text-gray-700"
                          >
                            Image Version
                          </label>
                          <input
                            type="text"
                            name="imageversion"
                            id="email-address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            
                          />
                          <p
                            id="helper-text-explanation"
                            className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                          >
                            Eg : (1.0.01)
                          </p>
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="first-name"
                            className="block text-base font-bold text-gray-700"
                          >
                            Image Pull command
                          </label>
                          <input
                            type="text"
                            name="imagepull"
                            id="email-address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            readOnly
                          />
                          <p
                            id="helper-text-explanation"
                            className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                          >
                            Eg : (********/ubuntu-desktop:10.0.1)
                          </p>
                        </div>


                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="city"
                            className="block text-base font-bold text-gray-700"
                          >
                            Image Description
                          </label>
                          <textarea
                            type="text"
                            name="imagedescription"
                            cols={40}
                            required
                            rows="10"
                            id="city"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <p
                            id="helper-text-explanation"
                            className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                          >
                            Explain briefly about the Image
                          </p>
                        </div>

                      
                        <div className="col-span-6 sm:col-span-2 ">
                          <label
                            htmlFor="region"
                            className="block text-base font-medium text-gray-700 mb-3"
                          >
                            Image Status
                          </label>

                          <div className="flex">
                            <div className="flex items-center mr-4">
                              <input
                                id="inline-radio"
                                type="radio"
                                name="requiregpu"
                                
                                checked={test === 'yes'}

                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="inline-radio"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Activated
                              </label>
                            </div>
                            <div className="flex items-center mr-4">
                              <input
                                id="inline-2-radio"
                                type="radio"
                                name="requiregpu"
                                checked={test === 'no'}
                               
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="inline-2-radio"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                InActivate
                              </label>
                            </div>
                          </div>
                       
                          
                        </div>
                        <div className="col-span-6 sm:col-span-2 ">
                        <label
                            htmlFor="region"
                            className="block text-base font-medium text-gray-700 mb-3"
                          >
                            Gpu Support
                          </label>

                          <div className="flex">
                            <div className="flex items-center mr-4">
                              <input
                                id="inline-radio"
                                type="radio"
                                name="requiregpu"
                                
                                checked={test === 'yes'}

                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="inline-radio"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="flex items-center mr-4">
                              <input
                                id="inline-2-radio"
                                type="radio"
                                name="requiregpu"
                                checked={test === 'no'}
                               
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="inline-2-radio"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                No
                              </label>
                            </div>
                          </div>
                       
                          
                        </div>
                        
                        
                        <div className="col-span-6 sm:col-span-6 ">
                         
                          <div className="pt-3 col-span-6 sm:col-span-3">
                            <div className="flex pt-4 ml-0 space-x-3 justify-center">
                              <button
                                type="submit"
                               
                                className="inline-block w-full px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              >
                                Submit
                              </button>
                              <button
                                type="button"
                                onClick={() => navigate('/admin/image/')}
                                className="inline-block px-6 w-full py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                          
                        </div>
                    
                        
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </>
    )
}