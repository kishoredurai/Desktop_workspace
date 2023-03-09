import React from "react";
import Admin_header from "../../../layout/header/admin_header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

export const AdminUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [singleuser , setsingleUser] = useState();
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    user_type: "admin",
    password: "",
  });

  //  get admin detaisl htmlFor update
  const getadmin = (user) => {
    setsingleUser(user)
    setEditModal(true);
  };

  const renderTable = () => {
    return user.map((user,i) => {
      return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={i}>
          <td className="p-4 w-4 border-r">
            <div className="flex items-center ">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="checkbox-table-search-1" className="sr-only">
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
              src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png"
              alt="Jese image"
            />
          </th>
          <td className="py-4 px-6 border-r">{user.name}</td>

          <td className="py-4 px-6 border-r">{user.email}</td>
          <td className="py-4 px-6 border-r">
            <div className="flex items-center">
              <div
                className={
                  user.accound_status === true
                    ? "h-2.5 w-2.5 rounded-full bg-green-600 mr-2"
                    : "h-2.5 w-2.5 rounded-full bg-red-600 mr-2"
                }
              ></div>{" "}
              {user.accound_status === true ? "active" : "blocked"}
            </div>
          </td>
          <td className="py-4 px-6">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => getadmin(user)}
            >
              <div className="pr-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M7 17.013l4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z" />
                  <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" />
                </svg>
              </div>{" "}
              edit
            </button>
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              <div className="pr-2">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
                </svg>
              </div>
              delete
            </button>
          </td>
        </tr>
       
      );
    });
  };

  const fetchData = () => {
    fetch("http://localhost:5000/api/admin/list")
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        alert("Unable to connect Backend");
      })
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submit_form = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/api/admin/create", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/JSON",
      },
    })
      .catch((error) => {
        alert("Unable to connect Backend");
      })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Server responds with error!");
        }
        return res.json();
      })
      .then((data) => {
        if (data["message"] === "success") {
          setTimeout(() => {
            toast.success("User Added Successfully !!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }, 20);

          setShowModal(false);
        } else {
          alert("no");
        }
      });
  };

  return (
    <div>
      <Admin_header />
      <ToastContainer />

      <div className="pt-6 p-2 sm:p-6 mt-3 py-6">
        <nav
          className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <button
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                onClick={() => navigate("/admin/dashboard")}
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
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <button className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                  Admin Users
                </button>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <header className="px-4">
        <button
          type="button"
          className="float-right text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-bold rounded-lg text-xs px-3 py-2 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          onClick={() => setShowModal(true)}
        >
          Add user
        </button>
        <div className=" p-2">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Admin User Details
          </h1>
        </div>
      </header>

      {/* modal  */}
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
                    New Admin User
                  </h3>

                  <form className="space-y-6" onSubmit={submit_form}>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Name :
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Username :
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        password :
                      </label>
                      <input
                        type="password"
                        name="password"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    </div>

                    {/* <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button> */}
                    <div className="sm:flex sm:flex-row-reverse ">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        create
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

      {/* end of modal  */}

      {/* Edit modal  */}
      {editModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              // onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="authentication-modal"
                  onClick={() => setEditModal(false)}
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
                    Edit Admin User
                  </h3>

                  <form className="space-y-6" onSubmit={submit_form}>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Name :
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={singleuser.name}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Username :
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={singleuser.email}

                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        password :
                      </label>
                      <input
                        type="password"
                        name="password"

                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Account Status :
                      </label>
                      <div className="flex">
                        <div className="flex items-center mr-4">
                          <input
                            id="inline-radio"
                            type="radio"
                            name="requiregpu"
                            defaultChecked={singleuser.accound_status===true?true:false}
                            onClick={(e) =>   setFormData({ ...formData, [e.target.name]: true })}

                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="inline-radio"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Active
                          </label>
                        </div>
                        <div className="flex items-center mr-4">
                          <input
                            id="inline-2-radio"
                            type="radio"
                            name="requiregpu"
                            required
                            defaultChecked={singleuser.accound_status===false?true:false}

                            onClick={(e) =>   setFormData({ ...formData, [e.target.name]: false })}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="inline-2-radio"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Disable
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button> */}
                    <div className="sm:flex sm:flex-row-reverse ">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setEditModal(false)}
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

      {/* end of edit modal  */}

      <div className="p-2 sm:p-5">
        <div className="border-2 border-gray-3000 rounded-lg shadow-xl ">
          <div className="p-2 overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="p-2 float-right flex justify-between items-center pb-4 bg-white dark:bg-gray-900">
              <label htmlFor="table-search" className="sr-only">
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
                  placeholder="Search htmlFor users"
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
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="py-3 px-6 border-r">
                    Profile
                  </th>
                  <th scope="col" className="py-3 px-6 border-r">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6 border-r">
                    User Name
                  </th>

                  <th scope="col" className="py-3 px-6 border-r">
                    Account Status
                  </th>
                  <th scope="col" className="py-3 px-6 border-r">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="border-b">
                {renderTable()}

                {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-4 border-r">
                    <div className="flex items-center ">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-table-search-1" className="sr-only">
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
                    </div>
                  </th>
                  <td className="py-4 px-6 border-r">
                    kishore.ct19@bitsathy.ac.in
                  </td>

                  <td className="py-4 px-6 border-r">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-600 mr-2"></div>{" "}
                      Blocked
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      edit
                    </button>
                    <button
                      type="button"
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                      delete
                    </button>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
