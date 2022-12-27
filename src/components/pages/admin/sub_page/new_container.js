import React, { useState } from 'react'
import Admin_header from '../../../layout/header/admin_header'
import { useNavigate } from 'react-router-dom'

export const New_container = () => {
  const [batchstat, setBatchstat] = useState()
  const [userstat, setuserstat] = useState()

  const [startdate, setStartdate] = useState()
  const [enddate, setEnddate] = useState()

  //  const day_calculate = () => {

  //   if(new Date(startdate).getTime && new Date(enddate).getTime())
  //   {
  //     var timeDifference = new Date(startdate).getTime() - new Date(enddate).getTime();
  //     var dayDifference = timeDifference / (1000 * 3600 *24 );

  //     dayDifference = Math.abs(dayDifference);
  //     console.log(dayDifference);
  //   }
  //   }
  const navigate = useNavigate()
  return (
    <>
      <Admin_header />
      <div className="w-full">
        <header className="bg-white ">
          <div className="mx-auto mt-3 px-4 pt-4 sm:px-6 lg:px-12">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              New Container
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
                        <div className="col-span-6 sm:col-span-6 ">
                          <label
                            htmlFor="region"
                            className="block text-base font-medium text-gray-900 dark:text-gray-300 mb-3"
                          >
                            New or Existing Batch
                          </label>

                          <div class="flex">
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-radio"
                                type="radio"
                                onChange={(e) => setBatchstat('new')}
                                name="inline-radio-group1"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-radio"
                                class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                              >
                                New
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-2-radio"
                                type="radio"
                                onChange={(e) => setBatchstat('existing')}
                                name="inline-radio-group1"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-2-radio"
                                class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                              >
                                Exisitng
                              </label>
                            </div>
                          </div>
                        </div>
                        {batchstat === 'new' ? (
                          <div className="col-span-6 sm:col-span-6">
                            <label
                              htmlFor="first-name"
                              className="block text-base font-bold text-gray-700"
                            >
                              New Batch Name
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            <p
                              id="helper-text-explanation"
                              className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                            >
                              Enter New for Batch Name
                            </p>
                          </div>
                        ) : null}

                        {batchstat === 'existing' ? (
                          <div className="col-span-6 sm:col-span-6">
                            <label
                              htmlFor="first-name"
                              className="block text-base font-bold text-gray-700"
                            >
                              Select Bacth Name
                            </label>
                            <select
                              id="inputState"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            >
                              <option value="choose">Choose...</option>
                              <option value="I">I</option>
                              <option value="II">II</option>
                              <option value="III">III</option>
                              <option value="IV">IV</option>
                            </select>

                            <p
                              id="helper-text-explanation"
                              className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                            >
                              Select a existing batch
                            </p>
                          </div>
                        ) : null}

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="city"
                            className="block text-base font-bold text-gray-700"
                          >
                            Image Description
                          </label>
                          <textarea
                            type="text"
                            name="city"
                            cols={40}
                            rows="10"
                            id="city"
                            autoComplete="address-level2"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <p
                            id="helper-text-explanation"
                            className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                          >
                            Explain briefly about the batch
                          </p>
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="first-name"
                            className="block text-base font-bold text-gray-700"
                          >
                            Select Container Image
                          </label>
                          <select
                            id="inputState"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          >
                            <option value="choose">Choose...</option>
                            <option value="I">Ubuntu Desktop</option>
                            <option value="II">Kali Linux</option>
                            <option value="III">Centos 7</option>
                            <option value="IV">fedora</option>
                          </select>

                          <p
                            id="helper-text-explanation"
                            className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                          >
                            If image name doesnt existing then add it ... !
                          </p>
                        </div>

                        <div className="col-span-6 sm:col-span-2">
                          <label
                            htmlFor="first-name"
                            className="block text-base font-bold text-gray-700"
                          >
                            Batch Start Date
                          </label>
                          <input
                            type="date"
                            name="email-address"
                            onChange={(e) => {
                              setStartdate(e.target.value)
                            }}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                          <label
                            htmlFor="first-name"
                            className="block text-base font-bold text-gray-700"
                          >
                            Batch End Date
                          </label>
                          <input
                            type="date"
                            name="email-address"
                            onChange={(e) => {
                              setEnddate(e.target.value)
                            }}
                            autoComplete="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                          <label
                            htmlFor="first-name"
                            className="block text-base font-bold text-gray-700"
                          >
                            Total Days
                          </label>
                          <input
                            type="text"
                            name="total_days"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="first-name"
                            className="block text-base font-bold text-gray-700"
                          >
                            CPU limit
                          </label>
                          <input
                            type="number"
                            name="email-address"
                            min="1"
                            max="5"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          <p
                            id="helper-text-explanation"
                            className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                          >
                            Limit : ( 1-5 )
                          </p>
                        </div>
                        <div className="col-span-6 sm:col-span-6 ">
                          <label
                            htmlFor="region"
                            className="block text-base font-medium text-gray-700 mb-3"
                          >
                            Additional Features
                          </label>

                          <div className="flex">
                            <div className="flex items-center mr-4">
                              <input
                                id="inline-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                                Internet Access
                              </label>
                            </div>
                            <div className="flex items-center mr-4">
                              <input
                                id="inline-2-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                                Root Access
                              </label>
                            </div>
                            <div className="flex items-center mr-4">
                              <input
                                id="inline-2-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                                GPU Support
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-6 sm:col-span-6 ">
                          <label
                            htmlFor="region"
                            className="block text-base font-medium text-gray-700 mb-3"
                          >
                            Individual user or Group User
                          </label>

                          <div class="flex">
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-radio"
                                type="radio"
                                name="inline-radio-group"
                                onChange={() => setuserstat('individual')}
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Individual
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="inline-2-radio"
                                type="radio"
                                onChange={() => setuserstat('group')}
                                name="inline-radio-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="inline-2-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Group
                              </label>
                            </div>
                          </div>
                        </div>

                        {userstat === 'individual' ? (

          <>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="first-name"
                              className="block text-base font-bold text-gray-700"
                            >
                              Email ID
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            <p
                              id="helper-text-explanation"
                              className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                            >
                              Enter valid email id to login
                            </p>
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="first-name"
                              className="block text-base font-bold text-gray-700"
                            >
                              User Full Name
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            <p
                              id="helper-text-explanation"
                              className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                            >
                              Eg : ( Kumar S )
                            </p>
                          </div>
                          <div className="col-span-6 sm:col-span-6">
                            <label
                              htmlFor="first-name"
                              className="block text-base font-bold text-gray-700"
                            >
                              Login password
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            <p
                              id="helper-text-explanation"
                              className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                            >
                              Enter a Strong password
                            </p>
                          </div>
          
</>
                        ):null}

                        {userstat === 'group' ? (
                          <div className="col-span-6 sm:col-span-6 ">
                            <label
                              htmlFor="region"
                              className="block text-base font-medium text-gray-700 mb-3"
                            >
                              File Selector
                            </label>

                            <div className="flex items-center justify-center w-full">
                              <label className="flex flex-col items-center justify-center w-full h-54 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <svg
                                    aria-hidden="true"
                                    className="w-10 h-10 mb-3 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                  </svg>
                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">
                                      Click to upload
                                    </span>{' '}
                                    or drag and drop
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    XLS, CSV (MAX. 800x400px)
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
                        ) : null}

                        <div className="pt-3 items-center col-span-6 sm:col-span-4">
                          <div className="flex pt-4 ml-0 space-x-3 justify-center">
                            <button
                              type="button"
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
