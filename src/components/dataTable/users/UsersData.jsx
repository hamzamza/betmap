import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
function UserTable() {
  const { data, loading, error,reFetch } = useFetch("http://localhost:5000/api/users/");
  const columns = [
    { field: "id", headerName: "ID", width: 170 },
    { field: "username", headerName: "Username", width: 100 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 170 },
    /* 
    { username: "dsfsddfdf", email: "sdfsfds", phone: "sdfsfs", password: "sdf", country: "sdfds", city: "sdf" }
    */
    { field: "country", headerName: "Country", width: 170 },
    { field: "city", headerName: "City", width: 170 },
    {
      field: "acction",
      headerName: "Action",
      description: "for delete and so on",
      sortable: false,
      width: 200,
      renderCell: () => (
        <div className="cellAction d-flex gap-1">
          <div className="btn btn-success w-50">view</div>
          <div className="btn btn-danger w-50">delete</div>
        </div>
      ),
    },
  ];

  return (
    <div className="dataTAble p-2" style={{ width: "100%" }}>
      {loading ? (
        "loading "
      ) : (
        <DataGrid
          rows={data.map((item) => {
            const {
              isAdmin,
              createdAt,
              updatedAt,
              __v,
              _id,
              password,
              ...others
            } = item;
            console.log({ id: _id, ...others });
            return { id: _id, ...others };
          })}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          autoHeight={true}
        />
      )}
    </div>
  );
}

export default UserTable;
