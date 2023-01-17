import React from 'react'
import { useNavigate } from 'react-router-dom'
import Admin_header from '../../../layout/header/admin_header'
import { useState } from 'react'

export const New_image = () => {
  const navigate = useNavigate();

  // form data

  const [formData, setFormData] = useState({
    image_name: '',
    base_image: '',
    image_version: '',
    pull_command: '',
    image_description: '',
    gpu_support: false ,

  });


  const submit_form = () => {

    console.log(formData);
  }






  return (
    <>
      <Admin_header />
      <div className="w-full">
        <header className="bg-white ">
          <div className="mx-auto mt-3 px-4 pt-4 sm:px-6 lg:px-12">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              New Container Image
            </h1>
          </div>
        </header>

        <div className="sm:m-8 sm:mt-2 p-2 sm:p-5  gap-5 sm:gap-16 ">
          <div className="justify-center text-6xl border-2 border-gray-300 rounded-lg shadow-lg bg-white flex flex-col items-center ">
            <div className="w-full md:h-full">
              <div className=" md:col-span-2 md:mt-0">
                <form action="/">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="p-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-6">
                          <label
                            className="block text-base font-bold text-gray-700"
                          >
                            New Image Name
                          </label>
                          <input
                            type="text"
                            name="image_name"
                            id="image-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                            name="base_image"
                            id="base-image"
                            onChange={(e) =>   setFormData({ ...formData, [e.target.name]: e.target.value })                           }
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                            name="image_version"
                            id="email-address"
                            onChange={(e) =>   setFormData({ ...formData, [e.target.name]: e.target.value })                           }
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
                            name="pull_command"
                            id="email-address"
                            onChange={(e) =>   setFormData({ ...formData, [e.target.name]: e.target.value })                           }
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                            name="image_description"
                            cols={40}
                            rows="10"
                            id="city"
                            onChange={(e) =>   setFormData({ ...formData, [e.target.name]: e.target.value })                           }
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <p
                            id="helper-text-explanation"
                            className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                          >
                            Explain briefly about the Image
                          </p>
                        </div>

                        <div className="col-span-6 sm:col-span-6 ">
                          <label
                            htmlFor="region"
                            className="block text-base font-medium text-gray-700 mb-3"
                          >
                            Gpu Support
                          </label>

                          <div class="flex">
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-radio"
                                type="radio"
                                name="gpu_support"
                                onClick={(e) =>   setFormData({ ...formData, [e.target.name]: true })}

                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Yes
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-2-radio"
                                type="radio"
                                name="gpu_support"
                                onClick={(e) =>   setFormData({ ...formData, [e.target.name]: false })}
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-2-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                No
                              </label>
                            </div>
                          </div>
                          <div className="pt-3 col-span-6 sm:col-span-3">
                            <div className="flex pt-4 ml-0 space-x-3 justify-center">
                              <button
                                type="button"
                                onClick={submit_form()}
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

          {/* <div className="flex flex-col text-6xl rounded-xl float-right">
            <div className="justify-center mb-10">
              <div className="block p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white ">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5">
                  Declaration
                </h5>

                <fieldset className="pt-3 mr-40 w-full">
                  <div className="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                    >
                      I hereby declare that the above mentioned information is
                      correct to the best of my knowledge .
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                    >
                      I bear the responsibility for the correctness of the above
                      mentioned particulars.
                    </label>
                  </div>
                </fieldset>

                <div className="flex pt-4 ml-0 space-x-3 justify-center">
                  <button
                    type="button"
                    className="inline-block w-full px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/ticket")}
                    className="inline-block px-6 w-full py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
