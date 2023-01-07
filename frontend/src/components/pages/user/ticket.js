import React from "react";
import Header from "../../layout/header/header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Ticket = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <div className="w-full">
        <header className="bg-white ">
          <div className="mx-auto py-4 mt-3 px-4 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => navigate("/ticket/new")}
              className="float-right text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-bold rounded-lg text-xs px-3 py-2 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              New Ticket{" "}
            </button>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Tickets
            </h1>
          </div>
        </header>

        <div className="grid px-4 sm:px-8 grid-flow-row sm:grid-flow-col gap-12">
          <div className="flex text-6xl  rounded-xl">
            <div className="justify-center pt-2 w-full" >
              <div className="block p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white ">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5">
                  Filters :
                  <span className="float-right items-center text-xs inline-block py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600  text-white rounded-full">
                    1
                  </span>
                </h5>

                <fieldset className="pt-3 mr-40 w-full">
                  <div className="flex items-center mb-5 ">
                    <input
                      id="country-option-1"
                      type="radio"
                      name="filter"
                      value="active"
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    />

                    <label className="ml-2 text-sm text-gray-900 dark:text-gray-300 w-full">
                      Solved
                      <span className="float-right items-center text-xs inline-block py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-400  text-white rounded-full">
                        1
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center mb-5">
                    <input
                      id="country-option-1"
                      type="radio"
                      name="filter"
                      value="inactive"
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="block ml-2 text-sm text-gray-900 dark:text-gray-300 w-full">
                      Unsolved
                      <span className="float-right items-center text-xs inline-block py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-400  text-white rounded-full">
                        1
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="country-option-1"
                      type="radio"
                      name="filter"
                      value="terminated"
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="block ml-2 text-sm  text-gray-900 dark:text-gray-300 w-full">
                      Terminated
                      <span className="float-right items-center text-xs inline-block py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-400  text-white rounded-full">
                        1
                      </span>
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="sm:col-span-18 py-2 max-w-96 flex justify-center text-6xl rounded-xl  flex flex-col items-center">
            <div
              className="btn mb-2 w-full md:h-full transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-40 transition ease-in-out duration-300"
              aria-hidden="true"
              onClick={() => navigate("/ticket/details")}
            >
              <div className="p-5 pt-4 border-2 hover:border-gray-400 border-gray-300 bg-white rounded-xl shadow-md">
                <h2 className="text-xs sm:pt-0 mb-2 sm:float-right font-bold text-gray-400">
                  #2349493021
                </h2>
                <h2 className="text-lg font-bold text-gray-800 mb-3">
                  Image Not Working
                </h2>

                <div className="mb-4 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className="h-4 bg-red-600 rounded-md dark:bg-red-500 text-xs font-bold text-red-100 text-center"
                    style={{ width: "100%" }}
                  >
                    DECLINED
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    src="https://lh3.googleusercontent.com/a/AEdFTp4444J2XdbG9uMin98OFO93KzOBMHsc7axNj6M7Ig=s96-c"
                    alt="Bordered avatar"
                  />
                  <p className="text-sm px-2 font-medium text-gray-600"> kishore D</p>
                </div>

                <div className="text-sm pt-3 text-gray-600">
                  <span className="mr-2 text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Machine
                  </span>
                  <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Installation
                  </span>
                  <h2 className="text-xs sm:pt-0 pt-4 sm:float-right font-bold text-gray-400">
                    2016-05-18T16:00:00Z
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="btn pt-2 mb-2 w-full md:h-full transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-40 transition ease-in-out duration-300"
              aria-hidden="true"
              onClick={() => navigate("/ticket/details")}
            >
              <div className="p-5 pt-4 border-2 hover:border-gray-400 border-gray-300 bg-white rounded-xl shadow-md">
                <h2 className="text-lg font-bold text-gray-800 mb-3">
                  Image Not Working
                </h2>

                <div className="mb-4 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className="h-4 bg-yellow-600 rounded-full dark:bg-yellow-500 text-xs font-bold text-blue-100 text-center"
                    style={{ width: "50%" }}
                  >
                    UNSOLVED
                  </div>
                </div>
                <p className="text-sm pt-2 text-gray-600">
                  Ubuntu is a free and open source operating system and Linux
                  distribution based on Debian. Ubuntu is offered in three
                  official editions: Ubuntu Desktop for personal computers,
                  Ubuntu Server for servers and the cloud, and Ubuntu Core for
                  Internet of things devices
                </p>
                <div className="text-sm pt-3 text-gray-600">
                  <span className="mr-2 text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Machine
                  </span>
                  <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Installation
                  </span>
                  <h2 className="text-xs sm:pt-0 pt-4 sm:float-right font-bold text-gray-400">
                    2016-05-18T16:00:00Z
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="btn pt-2 w-full md:h-full transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-40 transition ease-in-out duration-300"
              aria-hidden="true"
              onClick={() => navigate("/ticket/details")}
            >
              <div className="p-5 pt-4 border-2 hover:border-gray-400 border-gray-300 bg-white rounded-xl shadow-md">
                <h2 className="text-lg font-bold text-gray-800 mb-3">
                  Image Not Working
                </h2>

                <div className="mb-4 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className="h-4 bg-green-600 rounded-full dark:bg-green-500 text-xs font-bold text-blue-100 text-center"
                    style={{ width: "100%" }}
                  >
                    SOLVED
                  </div>
                </div>
                <p className="text-sm pt-2 text-gray-600">
                  Ubuntu is a free and open source operating system and Linux
                  distribution based on Debian. Ubuntu is offered in three
                  official editions: Ubuntu Desktop for personal computers,
                  Ubuntu Server for servers and the cloud, and Ubuntu Core for
                  Internet of things devices
                </p>
                <div className="text-sm pt-3 text-gray-600">
                  <span className="mr-2 text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Machine
                  </span>
                  <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                    #Installation
                  </span>
                  <h2 className="text-xs sm:pt-0 pt-4 sm:float-right font-bold text-gray-400">
                    2016-05-18T16:00:00Z
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <div className="mt-3 sm:flex">
                                <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-red-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                    <h4 className="text-lg font-medium text-gray-800">
                                        Delete account ?
                                    </h4>
                                    <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua.
                                    </p>
                                    <div className="items-center gap-2 mt-3 sm:flex">
                                        <button
                                            className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                            onClick={() =>
                                                setShowModal(false)
                                            }
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                            onClick={() =>
                                                setShowModal(false)
                                            }
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div> */}
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="authentication-modal"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Platform Login Credentials
                  </h3>
                  <form className="space-y-6" action="#">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your Username :
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        value="name@company.com"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your password :{" "}
                      </label>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        value="kishore@123"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        readOnly
                      />
                    </div>

                    {/* <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button> */}
                    <div className="bg-gray-50  sm:flex sm:flex-row-reverse ">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => navigate("/home")}
                      >
                        Proceed
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );

  //sdfdsfsdsdd
};
