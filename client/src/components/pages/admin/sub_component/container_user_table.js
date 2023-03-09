import React from "react";
import { useState } from "react";
import MaterialTable from "material-table";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



export const Container_user_table = () => {

  const navigate = useNavigate()

  const [user , setUser] =useState(); 







  const fetchData = () => {
    fetch("http://localhost:5000/api/admin/user/list")
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




    const [tableData,setTableData]=useState([
      {
        user_id: "63aa6f3b05e9b6697c2943d9",
        user_image: "https://www.kaorinusantara.or.id/wp-content/uploads/2019/06/fire-force-F.jpg",
        user_name: "Sawyer",
        user_email: "sawyergilbert@mitroc.com",
        user_contact: "+91 9791741613",
        user_status: "false"
      },
      {
        user_id: "63aa6f3b6d67888a2f83120f",
        user_image: "https://www.kaorinusantara.or.id/wp-content/uploads/2019/06/fire-force-F.jpg",
        user_name: "Lindsay",
        user_email: "lindsaygilbert@mitroc.com",
        user_contact: "+91 9791706759",
        user_status: "true"
      },
      {
        user_id: "63aa6f3b2763d58efe84f1e6",
        user_image: "https://www.kaorinusantara.or.id/wp-content/uploads/2019/06/fire-force-F.jpg",
        user_name: "Mercado",
        user_email: "mercadogilbert@mitroc.com",
        user_contact: "+91 9791648137",
        user_status: "false"
      },
      {
        user_id: "63aa6f3bfa066c530c1f0bc3",
        user_image: "https://www.kaorinusantara.or.id/wp-content/uploads/2019/06/fire-force-F.jpg",
        user_name: "Cheri",
        user_email: "cherigilbert@mitroc.com",
        user_contact: "+91 9791698007",
        user_status: "false"
      },
      {
        user_id: "63aa6f3b48f0a974d96827cb",
        user_image: "https://www.kaorinusantara.or.id/wp-content/uploads/2019/06/fire-force-F.jpg",
        user_name: "Bernadette",
        user_email: "bernadettegilbert@mitroc.com",
        user_contact: "+91 9791790967",
        user_status: "true"
      },
      {
        user_id: "63aa6f3b2dcec59fa267e17b",
        user_image: "https://www.kaorinusantara.or.id/wp-content/uploads/2019/06/fire-force-F.jpg",
        user_name: "Pearlie",
        user_email: "pearliegilbert@mitroc.com",
        user_contact: "+91 9791654329",
        user_status: "true"
      },
      {
        user_id: "63aa6f3b69ae56111c7ec1d8",
        user_image: "https://www.kaorinusantara.or.id/wp-content/uploads/2019/06/fire-force-F.jpg",
        user_name: "Madden",
        user_email: "maddengilbert@mitroc.com",
        user_contact: "+91 9791639660",
        user_status: "false"
      }
    ]);
    
      const columns=[
        {title:"Profile",field:"data.imageurl",
        
        render: rowData => <th
        scope="row"
        className="border-r flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          className="w-10 h-10 rounded-full"
          src={rowData.data.imageurl?rowData.data.imageurl:"https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png"}
          alt="Jese image"
        />
        <div className="pl-3">
          <div className="text-base font-semibold">{rowData.name}</div>
          
        </div>
      </th>
        
      ,filtering:false},
        {title:"User ID",field:"_id",},
        {title:"Name",field:"name",},
        {title:"User Email",field:"email",},
        {title:"User Contact",field:"data.phoneno",},

     

        {title:"user Status",field:"accound_status",lookup:{true:"Active",false:"blocked"},render:(rowData)=>
        <span className="mr-2 text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded"
        style={{background:rowData.accound_status===true?"Green":"red"}} >
        {rowData.accound_status===true?"Active":"Blocked"}
      </span>
    
    },
    {title:"Activation Status",field:"data.phoneno",render:(rowData)=>
    <span className="mr-2 text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded"
    style={{background:rowData.data.phoneno?"Green":"red"}} >
    {rowData.data.phoneno?"Activated":"Not Activated"}
  </span>

},

      ]
    
    
    




    return(
        <>
          <MaterialTable 
        options={{
            
//             sorting:true,filtering:true,search:false, exportButton:true,paging:true ,pageSize:2 ,pageSizeOptions:[2,5,10,20,30]
//   , actionsColumnIndex:-1 ,addRowPosition:"first"  ,    showFirstLastPageButtons: true,
//   headerStyle: {
//     backgroundColor: '#01579b',
//     color: '#FFF'
//   },

      
//   ,selection:true


sorting: true, search: false,
searchFieldAlignment: "right",
filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
paginationType: "stepped", showFirstLastPageButtons: false, exportButton: true,
exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
showSelectAllCheckbox: true, showTextRowsSelected: false,columnsButton:true,

  headerStyle: {
    backgroundColor: '#6c99ee',
    color: '#FFF'
  },

  rowStyle:(data,index)=>index%2==0?{background:"#f5f5f5"}:null


}}
        columns={columns} data={user}
        actions={[
         
        {icon:'edit',
        tooltip:"Edit Data",
         onClick:(e,data)=>{console.log(data[0].user_id);
        // navigate('/admin/image/update?id='+data.id)},
      }
      },
      // {icon:'sendrounded',
      //   tooltip:"Edit Data",
      //  onClick:(e,data)=>console.log(data),
      // },
      
      
      {icon:'delete',
      tooltip:"Delete Image ",
     onClick:(e,data)=>console.log(data),
    },
        ]}
        
        title="" 
     
  
        />
        
        </>
    )
}