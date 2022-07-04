import "./serviceprovider.scss";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import {
  serviceproviderColumns,
  serviceProviderRow,
} from "../../../temp/ListofAllServiceProvider";
import { Link } from "react-router-dom";
import { useState } from "react";

const Allusers = () => {
  const [data, setData] = useState(serviceProviderRow);


  const enableUserhanler=(id)=>{
    console.log(id-1);
    data.forEach((da,ind)=>{
      if (id-1==ind) {
        da.status="inactive";
      }
    })
  }
  const disableuserhandler=(id)=>{
    console.log(id-1);
      data.forEach((da,ind)=>{
        if (id-1==ind) {
          da.status="active";
        }
      })
    }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/serviceprovider/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
      
            <div className="cellAction">
              <div>
               {(params.row.status=="active")?<span onClick={()=>enableUserhanler(params.row.id)} className="deleteButton">inactive</span>:<span onClick={()=>disableuserhandler(params.row.id)} className="actioButton">active</span>}
              </div>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        className="dat
        agrid"
        rows={data}
        columns={serviceproviderColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Allusers;
