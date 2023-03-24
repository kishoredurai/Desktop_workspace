import React from 'react'
import Header from '../../layout/header/header'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
export const Dashboard = () => {
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const [container,setContainer] = useState();

  const [password,setPassword] = useState();

  const [totalcontainer,setTotalcontainer] = useState(0);
  const [runningcontainer,setRunningcontainer] = useState(0);
  const [terminatedcontainer,setTerminatedcontainer] = useState(0);
  const [stoppedcontainer,setStoppedcontainer] = useState(0);


  const renderdata = () => {
    return container && container.map((data,i) => {
    return(
      <>
        <div key={i}
      className="btn mb-2 w-full md:h-full transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-40 transition ease-in-out duration-300"
      aria-hidden="true"
      onClick={() => getcredentails(data._id)}
    >
      <div className="p-5 pt-4 border-2 hover:border-gray-400 border-gray-300 bg-white rounded-xl shadow-md">
        <h2 className="text-xs pt-2 float-right font-bold text-gray-400">
          {data.batchdetails._id}
        </h2>
        <h2 className="text-lg font-bold text-gray-800">
          {data.batchdetails.batchname}
        </h2>
        <h2 className="text-xs pt-1 mb-1">
          <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded">
            {data.status}
          </span>
        </h2>
        <p className="text-sm pt-2 text-gray-600">
        {data.batchdetails.batchdescription}

        </p>

      

        <div className="mt-4 grid  grid-cols-12 ">
          <div className="col-span-6  md:col-span-2">
            <div className="text-sm">
              System : &nbsp;
              <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-600 text-white rounded">
                Ubuntu
              </span>
            </div>
          </div>
          <div className="col-span-6 md:col-span-2 ">
            <div className="text-sm">
              Total Days : &nbsp;
              <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-lime-500  text-white rounded">
                {data.batchdetails.totaldays}
              </span>
            </div>
          </div>
          <div className="col-span-10 pt-2 md:pt-0 sm:pt-0  md:col-span-2 ">
            <div className="text-sm">
              End Date : &nbsp;
              <span className="text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-fuchsia-600 text-white rounded">
              {data.batchdetails.enddate}

              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
    )
    })
  }


  const getcredentails = (id) => {

    fetch("http://localhost:5000/api/user/containerpass", {
      method: "post",
      body: JSON.stringify( 	
      {
        "containerid": id
      }),
      headers: {
        "Content-type": "application/JSON",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        alert("Unable to connect Backend");
      })
      .then((data) => {
        setPassword(data);
        console.log(data);
      });

      setShowModal(true)
  };


  const fetchData = () => {
    var item_value = JSON.parse(sessionStorage.getItem("item_key"));

    fetch("http://localhost:5000/api/user/containerlist", {
      method: "post",
      body: JSON.stringify( 	
      {
        "userid": item_value.userid
      }),
      headers: {
        "Content-type": "application/JSON",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        alert("Unable to connect Backend");
      })
      .then((data) => {
        setContainer(data);
        setRunningcontainer(data.filter(obj => obj.status === 'running').length);
        setTerminatedcontainer(data.filter(obj => obj.status === 'terminated').length);
        setStoppedcontainer(data.filter(obj => obj.status === 'stopped').length);

        setTotalcontainer(data.length);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>
      <Header />
      <div className="w-full">
        <header className="bg-white ">
          <div className="mx-auto py-4 mt-3 px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>

        <div className="grid px-4 sm:px-8 grid-flow-row sm:grid-flow-col gap-12">
          <div className="flex text-6xl rounded-xl">
            <div className="justify-center pt-2 w-full">
              <div className="block p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white ">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5">
                  Filter Options : &nbsp;
                  <span className="float-right items-center text-xs inline-block py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600  text-white rounded-full">
                    {totalcontainer}
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
                      Active
                      <span className="float-right items-center text-xs inline-block py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-400  text-white rounded-full">
                      {runningcontainer}
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
                      Inactive
                      <span className="float-right items-center text-xs inline-block py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-400  text-white rounded-full">
                        {stoppedcontainer}
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
                        {terminatedcontainer}
                      </span>
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="sm:col-span-18 py-2 max-w-96 flex justify-center text-6xl rounded-xl  flex flex-col items-center ">
           {renderdata()}
           
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
                  <div
                    className="flex p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
                    role="alert"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 inline w-5 h-5 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                      <span className="font-medium">Info alert!</span> Copy the user
                      Credentials to login to system
                    </div>
                  </div>
                  <form className="space-y-6" action="#">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your Username :
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        value="cloud"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your password :{' '}
                      </label>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        value={password?password.containerpassword:null}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        readOnly
                      />
                    </div>

                    {/* <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button> */}
                    <div className="sm:flex sm:flex-row-reverse ">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => navigate('/home')}
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
  )

  //sdfdsfsdsdd
}
