import React from 'react'
import Admin_header from '../../layout/header/admin_header'
export const User_profile = () => {
  return (
    <>
      <Admin_header />

      <div className="">
        <header className="bg-white ">
          <div className="mx-auto py-4 mt-3 px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              User Profile
            </h1>
          </div>
        </header>

        <div className=" mx-4 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              {/* <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Personal Information
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Use a permanent address where you can receive mail.
                    </p>
                  </div> */}
              <form action="#" method="POST">
                <div className="border bg-white-900 border-gray-200 overflow-hidden shadow shadow-md  shadow-gray-1200 sm:rounded-md">
                  <div className="px-4 sm:pt-3 lg:pb-3 py-4 sm:p-6 justify-self-center items-center float-center">
                    <img
                      className="rounded-full  border-dashed border-4 border-indigo-600 m-auto"
                      src="https://lh3.googleusercontent.com/a/AEdFTp4444J2XdbG9uMin98OFO93KzOBMHsc7axNj6M7Ig=s96-c"
                      width={150}
                      alt=""
                    />
                  </div>
                  <div className="pb-4">
                    <div className="relative mx-auto justify-self-center items-center float-center">
                      <div className="text-center">
                        <span className="text-sm inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded">
                          sb835490dskf3453
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="/">
                <div className="border border-gray-200 overflow-hidden shadow shadow-md sm:rounded-md">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Full name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-6">
                        <label
                          htmlFor="email-address"
                          className="block text-lg font-medium text-gray-700"
                        >
                          Active Containers :
                        </label>
                        <div className="sm:col-span-18 py-2 max-w-96 flex justify-center text-6xl rounded-xl  flex flex-col items-center ">
                          <div
                            className="btn mb-2 w-full md:h-full transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-40 transition ease-in-out duration-300"
                            aria-hidden="true"
                          >
                            <div className="p-5 pt-4 border-2 hover:border-gray-400 border-gray-300 bg-white rounded-xl shadow-md">
                              <h2 className="text-xs pt-2 float-right font-bold text-gray-400">
                                2016-05-18T16:00:00Z
                              </h2>
                              <h2 className="text-lg font-bold text-gray-800">
                                Android Studio Class
                              </h2>
                              <h2 className="text-xs pt-1 mb-1">
                                <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded">
                                  Running
                                </span>
                              </h2>
                              <p className="text-sm pt-2 text-gray-600">
                                Ubuntu is a free and open source operating
                                system and Linux distribution based on Debian.
                              </p>
                            </div>
                          </div>
                          <div
                            className="btn pt-2 w-full md:h-full transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-40 transition ease-in-out duration-300"
                            aria-hidden="true"
                            onClick={() => console.log('sshi')}
                          >
                            <div className="p-5 pt-4 border-2 hover:border-gray-400 border-gray-300 bg-white rounded-xl shadow-md">
                              <h2 className="text-xs pt-2 float-right font-bold text-gray-400">
                                2016-05-18T16:00:00Z
                              </h2>
                              <h2 className="text-lg font-bold text-gray-800">
                                Ubuntu Machine
                              </h2>
                              <h2 className="text-xs pt-2 mb-1">
                                <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded">
                                  Running
                                </span>
                              </h2>
                              <p className="text-sm pt-2 text-gray-600">
                                Ubuntu is a free and open source operating
                                system and Linux distribution based on Debian.
                                Ubuntu is offered in three official editions:
                              </p>
                            </div>
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
    </>
  )
}
