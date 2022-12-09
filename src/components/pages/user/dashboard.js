import React from "react";
import Header from "../../layout/header/header";
import Iframe from "react-iframe";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="h-screen w-full">
        <header className="bg-white ">
          <div className="mx-auto py-4 mt-3 px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
     
        <div className="grid px-4 grid-flow-row sm:grid-flow-col gap-12">
          <div className="flex text-6xl  rounded-xl max-w-sm ">
            <div className="justify-center pt-2 ">
              <div className="block p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white max-w-sm ">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5">
                  Filter Options
                </h5>
            

                <fieldset className="pt-3 mr-40">
                  <legend className="sr-only">Countries</legend>

                  <div className="flex items-center mb-5">
                    <input
                      id="country-option-1"
                      type="radio"
                      name="countries"
                      value="USA"
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      
                    />
                    <label className="block ml-2 text-sm  text-gray-900 dark:text-gray-300">
                      Active
                    </label>
                  </div>
                  <div className="flex items-center mb-5">
                    <input
                      id="country-option-1"
                      type="radio"
                      name="countries"
                      value="USA"
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      
                    />
                    <label className="block ml-2 text-sm text-gray-900 dark:text-gray-300">
                      Inactive
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="country-option-1"
                      type="radio"
                      name="countries"
                      value="USA"
                      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      
                    />
                    <label className="block ml-2 text-sm  text-gray-900 dark:text-gray-300">
                      Terminated
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="sm:col-span-18 max-w-96 flex justify-center text-6xl rounded-xl  flex flex-col items-center ">
            <div
              className="btn pt-2 w-full md:h-full transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-40 transition ease-in-out duration-300"
              aria-hidden="true"
              onClick={() => console.log("sshi")}
            >
              <div className="p-5 pt-4 border-2 hover:border-gray-400 border-gray-300 bg-white rounded-xl shadow-md">
                <h2 className="text-xs float-right font-bold text-gray-400">
                  #sdfsc32423scdf
                </h2>
                <h2 className="text-lg font-bold text-gray-800">
                  Ubuntu Machine
                </h2>
                <h2 className="text-xs">
                  <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded">
                    Running
                  </span>
                </h2>
                <p className="text-sm pt-2 text-gray-600">
                  Ubuntu is a free and open source operating system and Linux
                  distribution based on Debian. Ubuntu is offered in three
                  official editions: Ubuntu Desktop for personal computers,
                  Ubuntu Server for servers and the cloud, and Ubuntu Core for
                  Internet of things devices
                </p>

                <div className="mt-4 grid  grid-cols-12 ">
                  <div className="col-span-6  md:col-span-2">
                    <div className="text-sm">
                     Operating System : &nbsp;
                      <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">
                        Ubuntu
                      </span>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-2 ">
                    <div className="text-sm">
                      User Name : &nbsp;
                      <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-600 text-white rounded">
                        Cloud
                      </span>
                    </div>
                  </div>
                  <div className="col-span-10 pt-2 md:pt-0 sm:pt-0  md:col-span-2 ">
                    <div className="text-sm">
                      Password : &nbsp;
                      <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                        Kishore@33123
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2 w-full md:w-full">
              <div className="p-7 border-2 border-gray-300 bg-white rounded shadow-md">
                <h2 className="text-sm font-bold text-gray-800">
                  #sdfsc32423scdf2cs34
                </h2>

                <div className="flex pt-5 ">
                  <div className="w-1/6 bg-gray-300 h-12 "></div>
                  <div className="w-1/6 bg-gray-500 h-12"></div>
                  <div className="w-1/6 bg-gray-300 h-12 gap-2">
                    <p className="px-5">s</p>
                  </div>

                  <div className="w-1/6 bg-gray-500 h-12">d</div>
                  <div className="w-1/6 bg-gray-300 h-12"></div>
                  <div className="w-1/6 bg-gray-500 h-12"></div>
                  <div className="w-1/6 bg-gray-300 h-12"></div>
                  <div className="w-1/6 bg-gray-500 h-12"></div>
                  <div className="w-1/6 bg-gray-300 h-12"></div>
                </div>
              </div>
            </div>
            <div className="pt-2 min-w-full">
              <div className="p-8 border-2 border-gray-300 bg-white rounded shadow-md">
                <h2 className="text-sm font-bold text-gray-800">Card Title</h2>
                {/* <p className="text-sm text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Pariatur deserunt quas repellat facere dolor blanditiis
                  tenetur quibusdam corporis quaerat. Impedit, repellendus!
                  Delectus et illum eum ipsa magni? Facilis, molestiae est!
                </p> */}
                <div
                  id="main"
                  className="grid grid-cols-2 sm:grid-cols-5 md-grid-cols-2 max-w-64 justify-evenly break-normal"
                >
                  <div className="w-full h-12 break-word text-sm">
                    Password : &nbsp;
                    <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                      Kishore@33123
                    </span>
                  </div>

                  <div className="break-word  h-12 text-sm">
                    User Name : &nbsp;
                    <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                      Kishore@33123
                    </span>
                  </div>
                  <div className="break-word w-full text-ellipsis h-12 text-sm">
                    Operating System : &nbsp;
                    <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                      Ubuntu
                    </span>
                  </div>
                  <div className="bg-green-500 w-26 h-12">5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
