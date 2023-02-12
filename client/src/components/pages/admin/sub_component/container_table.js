  import React from "react";
import { useState } from "react";
import MaterialTable from "material-table";
export const Container_table = () => {


  // TODO: remove cpulimit and gpu support
  
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
        {title:"Container ID",field:"container_id",},
        {title:"User Name",field:"user_name",},
        {title:"Batch Name",field:"batch_name",},
        {title:"Container Name",field:"container_name",},
        {title:"Image Name",field:"image_name",},
        {title:"Container Status",field:"container_status",lookup:{running:"Running",stopped:"Stopped"},render:(rowData)=>
        <span className="mr-2 text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded"
        style={{background:rowData.container_status.localeCompare("running")==0?"Green":"red"}} >
        {rowData.container_status}
      </span>
    
    },
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
        columns={columns} data={tableData}
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