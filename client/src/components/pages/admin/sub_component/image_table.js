import React from "react";
import { useState } from "react";
import MaterialTable from "material-table";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Image_table = () => {


  const [image, setImage] = useState([])

  const navigate = useNavigate();


    
      const columns=[
        {title:"Image Name",field:"imagename",},
        {title:"Base Image",field:"baseimage"},
        {title:"Image version",field:"imageversion"},
        {title:"Image Status",field:"imagestatus",render:(rowData)=>
          <span className="mr-2 text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded"
          style={{background:rowData.imagestatus.localeCompare("active")===0?"Green":"red"}} >
         {rowData.imagestatus}
        </span>
    
    },
        {title:"Image Description",field:"imagedescription"},
    //     {title:"Image Status",field:"image_status",lookup:{active:"Active",declined:"Declined"},render:(rowData)=>
    //     <span className="mr-2 text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded"
    //     style={{background:rowData.image_status.localeCompare("active")==0?"Green":"red"}} >
    //     {rowData.image_status}
    //   </span>
    
    // },
          {title:"GPU Support",field:"requiregpu",render:(rowData)=>
          <span className="mr-2 text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded"
          style={{background:rowData.requiregpu===true?"Green":"red"}} >
         {rowData.requiregpu.toString()}
        </span>
    
    },
        // {title:"Gender",field:"gender",lookup:{M:"Male",F:"Female"}},
        {title:"Controller",field:"adminUser.name"},
      ]
    
    
      const fetchData = () => {
        fetch("http://localhost:5000/api/image/list")

          .then(response => {
            return response.json()
          })
          .catch((error) => {
            alert("Unable to connect Backend")
           })
          .then(data => {
            setImage(data);
            
          })
      }
    
      useEffect(() => {
        fetchData()
      }, [])

      // TODO add condition for return error

      const deleteimage = (id) => {
        fetch("http://localhost:5000/api/image/delete/"+id, {
          method: "delete",
          headers: {
            "Content-type": "application/JSON",
          },
        })
        .catch((error) => {
          alert("Unable to connect Backend")
         })
          .then((res) => {
            if (res.status >= 400) {
              throw new Error("Server responds with error!");
            }
            return res.json();
          })
          .then((data) => {
            if (data["message"]==="success") {
              alert("done");
            } else {
              alert("no");
            }
          });
      }
    


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
  columns={columns} data={image}
  actions={[
   
  {icon:'edit',
  tooltip:"Edit Data",
 onClick:(e,data)=>{
  if(data.length === 1)
  {
    console.log(data.length);
    navigate('/admin/image/update?id='+data[0]._id);
  }
  else
    alert("select only one data")


},
},


{icon:'delete',
tooltip:"Delete Image ",
onClick:(e,data)=>{
  if(data.length === 1)
  {
    console.log(data.length);
    deleteimage(data[0]._id);
    fetchData();
   }
  else
    alert("select only one data")


},
},
  ]}
  
  title="" 
  
  // components={{
  //   Action: props => (
  //     <button
  //       onClick={(event) => props.action.onClick(event, props.data)}
  //       color="primary"
  //       variant="contained"

  //       style={{textTransform: 'none'}}
  //       size="small"
  //     >
  //       Delete
  //     </button>
  //   ),
  //   isFreeAction: true,
  // }}

  />

       
        
        
        </>
    )
}