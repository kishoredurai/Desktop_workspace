import React from 'react'
import Admin_header from '../../layout/header/admin_header'

export const Admin_dasboard = () => {
  return (
    <>
      <Admin_header />

      <div className="w-full">
        <div className="pt-6 p-2 sm:p-6 mt-3 py-6">
          <nav
            className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="#"
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
                  Home
                </a>
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
                  <a
                    href="#"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Templates
                  </a>
                </div>
              </li>
              <li aria-current="page">
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    Flowbite
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* <header className="bg-white">
          <div className="mx-auto py-4 mt-3  px-8 sm:px-24 ">
            <h1 className="text-xl px-4 font-bold tracking-tight text-gray-900">
              Admin Dashboard
            </h1>
          </div>
        </header> */}

        <section className="container px-4 sm:px-2 mx-auto">
          <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
              <div className="p-3 mr-4 bg-green-500 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
</svg>

              </div>
              <div className="text-center float-center items-center">
                <p className="mb-2 text-5xl font-medium text-gray-900 items-center">
                  58
                </p>
                <p className="flex px-5 text-sm font-normal text-gray-800">
                  Running Containers
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
              <div className="p-3 mr-4 bg-red-500 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
</svg>


              </div>
              <div className="text-center float-center items-center">
                <p className="mb-2 text-5xl font-medium text-gray-900 items-center">
                  58
                </p>
                <p className="flex px-5 text-sm font-normal text-gray-800">
                  Innactive Containers
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
              <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>


              </div>
              <div className="text-center float-center items-center">
                <p className="mb-2 text-5xl font-medium text-gray-900 items-center">
                  58
                </p>
                <p className="flex px-5 text-sm font-normal text-center text-gray-800">
                  CPU Core
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
              <div className="p-3 mr-4 bg-orange-500 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
</svg>


              </div>
              <div className="text-center float-center items-center">
                <p className="mb-2 text-5xl font-medium text-gray-900 items-center">
                  58
                </p>
                <p className="flex px-5 text-sm font-normal text-gray-800">
                  Host Memory
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Table start heree */}

      <div className='px-3 grid grid-cols-1 grid-rows-2 gap-3 sm:grid-cols-2 md:grid-cols-2'>
        
        <div className="col-span-1">
        <header className="bg-white">
          <div className="mx-auto py-4 ">
            <h1 className="text-base px-4 font-bold tracking-tight text-gray-900">
              New Tickets
            </h1>
          </div>
        </header>
        <div className='border-2 border-gray-3000 rounded-lg shadow-xl '>
        <div className="p-2 overflow-x-auto relative shadow-md sm:rounded-lg">
                <div className="p-2 float-right flex justify-between items-center pb-4 bg-white dark:bg-gray-900">
                 
                  <label for="table-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="table-search-users"
                      className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for users"
                    />
                  </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 border dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b">
                    <tr>
                      <th scope="col" className="p-4 border-r">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-all-search" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th scope="col" className="py-3 px-6 border-r">
                        User
                      </th>
                      <th scope="col" className="py-3 px-6 border-r">
                        Title
                      </th>
                      <th scope="col" className="py-3 px-6 border-r">
                        Category
                      </th>
                      <th scope="col" className="py-3 px-6 border-r">
                        Ticket Status
                      </th>
                      <th scope="col" className="py-3 px-6 border-r">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className='border-b'>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4 w-4 border-r">
                        <div className="flex items-center ">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-table-search-1" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="border-r flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          className="w-10 h-10 rounded-full"
                          src="https://lh3.googleusercontent.com/a/AEdFTp4444J2XdbG9uMin98OFO93KzOBMHsc7axNj6M7Ig=s96-c"
                          alt="Jese image"
                        />
                        <div className="pl-3">
                          <div className="text-base font-semibold">Neil Sims</div>
                          <div className="font-normal text-sm truncate text-gray-500">
                            kishore.ct19@bitsathy.ac.in
                          </div>
                        </div>
                      </th>
                      <td className="py-4 px-6 border-r">Image Not Working</td>
                      <td className="py-4 px-6 border-r">
                        <div className='flex gap-2'>
                      <span className=" text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Machine
                  </span>
                  <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Machine
                  </span>
                        </div>
                      </td>

                      <td className="py-4 px-6 border-r">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-600 mr-2"></div>{' '}
                          Declined
                        </div>
                      </td>
                      <td className="py-4 px-6">
                      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  <span className="sr-only">Icon description</span>
</button>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4 w-4 border-r">
                        <div className="flex items-center ">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-table-search-1" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="border-r flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          className="w-10 h-10 rounded-full"
                          src="https://lh3.googleusercontent.com/a/AEdFTp4444J2XdbG9uMin98OFO93KzOBMHsc7axNj6M7Ig=s96-c"
                          alt="Jese image"
                        />
                        <div className="pl-3">
                          <div className="text-base font-semibold">Neil Sims</div>
                          <div className="font-normal text-gray-500">
                            neil.sims@flowbite.com
                          </div>
                        </div>
                      </th>
                      <td className="py-4 px-6 border-r">Image Not Working</td>
                      <td className="py-4 px-6 border-r">
                        <div className='flex gap-2'>
                      <span className=" text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Machine
                  </span>
                  <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Machine
                  </span>
                        </div>
                      </td>

                      <td className="py-4 px-6 border-r">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{' '}
                          Online
                        </div>
                      </td>
                      <td className="py-4 px-6">
                      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  <span className="sr-only">Icon description</span>
</button>
                      </td>
                    </tr> <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4 w-4 border-r">
                        <div className="flex items-center ">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-table-search-1" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="border-r flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          className="w-10 h-10 rounded-full"
                          src="https://lh3.googleusercontent.com/a/AEdFTp4444J2XdbG9uMin98OFO93KzOBMHsc7axNj6M7Ig=s96-c"
                          alt="Jese image"
                        />
                        <div className="pl-3">
                          <div className="text-base font-semibold">Neil Sims</div>
                          <div className="font-normal text-gray-500">
                            neil.sims@flowbite.com
                          </div>
                        </div>
                      </th>
                      <td className="py-4 px-6 border-r">Image Not Working</td>
                      <td className="py-4 px-6 border-r">
                        <div className='flex gap-2'>
                      <span className=" text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Machine
                  </span>
                  <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Machine
                  </span>
                        </div>
                      </td>

                      <td className="py-4 px-6 border-r">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 mr-2"></div>{' '}
                          Initiated
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit user
                        </button>
                      </td>
                    </tr> <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4 w-4 border-r">
                        <div className="flex items-center ">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-table-search-1" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="border-r flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          className="w-10 h-10 rounded-full"
                          src="https://lh3.googleusercontent.com/a/AEdFTp4444J2XdbG9uMin98OFO93KzOBMHsc7axNj6M7Ig=s96-c"
                          alt="Jese image"
                        />
                        <div className="pl-3">
                          <div className="text-base font-semibold">Neil Sims</div>
                          <div className="font-normal text-gray-500">
                            neil.sims@flowbite.com
                          </div>
                        </div>
                      </th>
                      <td className="py-4 px-6 border-r">Image Not Working</td>
                      <td className="py-4 px-6 border-r">
                        <div className='flex gap-2'>
                      <span className=" text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Machine
                  </span>
                  <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Machine
                  </span>
                        </div>
                      </td>

                      <td className="py-4 px-6 border-r">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{' '}
                          Online
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit user
                        </button>
                      </td>
                    </tr> <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4 w-4 border-r">
                        <div className="flex items-center ">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-table-search-1" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="border-r flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          className="w-10 h-10 rounded-full"
                          src="https://lh3.googleusercontent.com/a/AEdFTp4444J2XdbG9uMin98OFO93KzOBMHsc7axNj6M7Ig=s96-c"
                          alt="Jese image"
                        />
                        <div className="pl-3">
                          <div className="text-base font-semibold">Neil Sims</div>
                          <div className="font-normal text-gray-500">
                            neil.sims@flowbite.com
                          </div>
                        </div>
                      </th>
                      <td className="py-4 px-6 border-r">Image Not Working</td>
                      <td className="py-4 px-6 border-r">
                        <div className='flex gap-2'>
                      <span className=" text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Machine
                  </span>
                  <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Machine
                  </span>
                        </div>
                      </td>

                      <td className="py-4 px-6 border-r">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{' '}
                          Online
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit user
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
            
              </div>
              </div>
        </div>
        <div className="col-span-1">
        <header className="bg-white">
          <div className="mx-auto py-4 ">
            <h1 className="text-base px-4 font-bold tracking-tight text-gray-900">
              Machine Status
            </h1>
          </div>
        </header>
        <div className='border-2 border-gray-3000 rounded-lg shadow-xl'>
        <div className="p-2 overflow-x-auto relative shadow-md sm:rounded-lg ">
                <div className="p-2 flex justify-between items-center pb-4 bg-white dark:bg-gray-900">
                 
                  <label for="table-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="table-search-users"
                      className="block p-2 pl-10 w-80 sm:w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for users"
                    />
                  </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
                  <thead className="broder-b text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="p-4 border-r">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-all-search" className="sr-only ">
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th scope="col" className="py-3 px-6 border-r">
                        Image Name
                      </th>
                      <th scope="col" className="py-3 px-6 border-r">
                        Base Image
                      </th>
                      <th scope="col" className="py-3 px-6 border-r">
                        Image Tag
                      </th>
                      <th scope="col" className="py-3 px-6 border-r">
                        GPU
                      </th>
                      <th scope="col" className="py-3 px-6 border-r">
                       Image Status
                      </th>
                      <th scope="col" className="py-3 px-6 border-r">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4 w-4 border-r">
                        <div className="flex items-center border-r">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-table-search-1" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r">
                    Kali linux Desktop
                </th>
                      <td className="py-4 px-6 border-r">ubuntu</td>
                      <td className="py-4 px-6 border-r">1.01.0</td>
                      <td className="py-4 px-6 border-r">True</td>

                      <td className="py-4 px-6 border-r">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{' '}
                          Active
                        </div>
                      </td>
                      <td className="py-4 px-6">
                      <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

</button>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4 w-4 border-r">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-table-search-1" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kali linux Desktop
                </th>
                      <td className="py-4 px-6 border-r">ubuntu</td>
                      <td className="py-4 px-6 border-r">1.01.0</td>
                      <td className="py-4 px-6 border-r">True</td>

                      <td className="py-4 px-6 border-r">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{' '}
                          Active
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit user
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4 w-4 border-r">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-table-search-1" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kali linux Desktop
                </th>
                      <td className="py-4 px-6 border-r">ubuntu</td>
                      <td className="py-4 px-6 border-r">1.01.0</td>
                      <td className="py-4 px-6 border-r">True</td>

                      <td className="py-4 px-6 border-r">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{' '}
                          Active
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit user
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4 w-4 border-r">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-table-search-1" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kali linux Desktop
                </th>
                      <td className="py-4 px-6 border-r">ubuntu</td>
                      <td className="py-4 px-6 border-r">1.01.0</td>
                      <td className="py-4 px-6 border-r">True</td>

                      <td className="py-4 px-6 border-r">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{' '}
                          Disabled
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit user
                        </a>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
</div>

        </div>

      </div>




        

        {/* code ened here */}
      </div>
    </>
  )
}
