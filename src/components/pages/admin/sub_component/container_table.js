import React from "react";
import { useState } from "react";
import MaterialTable from "material-table";
export const Container_table = () => {


    const [tableData,setTableData]=useState([
        {container_id:"#356512441211sdf1",user_name:"kishore",image_version:"1.02.0",image_status:"active",gpu_support:"YES",controller:"admin"},
        {container_id:"356512441211sdf1",user_name:"kumar",image_version:"1.02.0",image_status:"declined",gpu_support:"NO",controller:"admin"},
        {container_id:"67567dfg4t5sdfxd4",user_name:"rameshraja",image_version:"1.02.0",image_status:"declined",gpu_support:"NO",controller:"testuser"},
        {container_id:"356512441211sdf1",user_name:"suersh",image_version:"1.02.0",image_status:"active",gpu_support:"YES",controller:"admin"},
        {container_id:"356512441211sdf1",user_name:"varunraja",image_version:"1.02.0",image_status:"active",gpu_support:"YES",controller:"admin"},
        {container_id:"sdfsdf3433w34 ",user_name:"kumaran",image_version:"1.02.0",image_status:"declined",gpu_support:"YES",controller:"admin"},

      ]);
    
      const columns=[
        {title:"Container ID",field:"container_id",},
        {title:"User Name",field:"user_name",},
        {title:"Batch Name",field:"image_name",},
        {title:"Container Name",field:"image_name",},
        {title:"Image Name",field:"image_name",},
        {title:"Container Status",field:"image_status",lookup:{active:"Active",declined:"Declined"},render:(rowData)=>
        <span className="mr-2 text-xs inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded"
        style={{background:rowData.image_status.localeCompare("active")==0?"Green":"red"}} >
        {rowData.image_status}
      </span>
    
    },
        {title:"Cpu Limit",field:"base_image"},
        {title:"GPU Support",field:"gpu_support"},
                
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
        tooltip:"Edit Data",
       onClick:(e,data)=>console.log(data),
      },{icon:'delete',
      tooltip:"Delete Image ",
     onClick:(e,data)=>console.log(data),
    },
        ]}
        
        title="" 
     
  
        />
        
        </>
    )
}