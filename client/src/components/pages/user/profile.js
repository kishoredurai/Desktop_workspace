import { React, useState } from "react";

import Header from "../../layout/header/header";
import { useEffect } from "react";

export const Profile = () => {
  const [profile,setProfile]=useState({});
  var item_value = JSON.parse(sessionStorage.getItem("item_key"));
const pp=item_value.picture;

const [profiles,setProfiles] = useState();

const fetchData = () => {
  var item_value = JSON.parse(sessionStorage.getItem("item_key"));

  fetch("http://localhost:5000/api/user/getinfo", {
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
      setProfiles(data);

    
      console.log(data);
    });
};

useEffect(() => {
  fetchData();
}, []);



  return (
    <>
    <Header />
      
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
                  <div className=" px-4 py-5 sm:p-6 justify-self-center items-center float-center">
                  <img
                              className="rounded-full  border-dashed border-4 border-indigo-600 m-auto"
                              src={pp}
                              width={150}
                              alt=""
                            />
                             
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
                          placeholder={profiles?profiles.name:null}
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
                          placeholder={profiles?profiles.email:null}

                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

        
                     

                   
                      <div className="col-span-6 sm:col-span-6">
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          name="region"
                          id="region"
                          placeholder={profiles?profiles.data.phoneno:null}

                          autoComplete="address-level1"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
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
  );
};
