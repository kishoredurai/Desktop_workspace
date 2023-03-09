  import React from "react";
import { useState } from "react";
import MaterialTable from "material-table";
import { useEffect } from "react";
export const Container_table = () => {


  const [container,setContainer]=useState();

    // container details fetch
    const fetchData = () => {
      fetch("http://localhost:5000/api/container/list")

        .then(response => {
          return response.json()
        })
        .catch((error) => {
          alert("Unable to connect Backend")
         })
        .then(data => {
          setContainer(data);
          
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])



  
  // TODO: add csv import to react

  // 

    const [tableData,setTableData]=useState([
        {container_id:"#356512441211sdf1",user_name:"kishore",batch_name:"Linux Training Batch - I",image_name:"editing desktop",container_name:"remote_192CT120",container_status:"running",gpu_support:"YES",cpu_limit:5},
        {container_id:"356512441211sdf1",user_name:"kumar",batch_name:"Linux Training Batch - I",image_name:"kali desktop",container_name:"remote_192CT120",container_status:"stopped",gpu_support:"NO",cpu_limit:4},
        {container_id:"67567dfg4t5sdfxd4",user_name:"rameshraja",batch_name:"Linux Training Batch - II",image_name:"ubuntu desktop",container_name:"remote_192CT120",container_status:"running",gpu_support:"NO",cpu_limit:'2'},
        {container_id:"356512441211sdf1",user_name:"suersh",batch_name:"Linux Training Batch - II",image_name:"centos hacking",container_name:"remote_192CT120",container_status:"stopped",gpu_support:"YES",cpu_limit:'1'},
        {container_id:"356512441211sdf1",user_name:"varunraja",batch_name:"Linux Training Batch - I",image_name:"kali hacking",container_name:"remote_192CT120",container_status:"running",gpu_support:"YES",cpu_limit:'2'},
        {container_id:"sdfsdf3433w34 ",user_name:"kumaran",batch_name:"Kalilinux training",image_name:"programing desktop",container_name:"remote_192CT120",container_status:"stopped",gpu_support:"YES",cpu_limit:'2'  },

      ]);
    
      const columns=[
        {title:"Container ID",field:"containerid"},
        {title:"Container User",field:"userData.name"},
        {title:"Batch Name",field:"batchData.batchname",},
        {title:"Container Name",field:"containername",},
        {title:"Image Name",field:"batchData.imageData.imagename",},
        {title:"Start Date",field:"batchData.startdate",},

        {title:"Container Status",field:"status",lookup:{running:"running",stopped:"stopped"},render:(rowData)=>
        <span className="mr-2 text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded"
        style={{background:rowData.status.localeCompare("running")==0?"Green":"red"}} >
        {rowData.status}
      </span>
      
    
    },
    {title:"Admin Name",field:"adminData.name",},

        // {title:"Cpu Limit",field:"cpu_limit"},
        // {title:"GPU Support",field:"gpu_support",lookup:{YES:"YES",NO:"NO"}},
                
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
        columns={columns} data={container}
        actions={[
         
        {icon:'edit',
        tooltip:"Edit Container",
       onClick:(e,data)=>console.log(data),
      },
      {icon:'send',
        tooltip:"Start Container",
       onClick:(e,data)=>console.log(data),
      },
      {icon:'stop',
      tooltip:"Stop Container",
     onClick:(e,data)=>console.log(data),
    },
      {icon:'delete',
      tooltip:"Terminate Container ",
     onClick:(e,data)=>console.log(data),
    },
        ]}
        
        title="" 
     
  
        />
        
        </>
    )
}