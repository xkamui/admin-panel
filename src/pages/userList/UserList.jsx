import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <figure className="userListAvatarName">
            <img
              src={params.row.avatar}
              alt={params.row.userName}
              title={params.row.userName}
            />
            <figcaption>{params.row.userName}</figcaption>
          </figure>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 90,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      type: "number",
      width: 90,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
          return (
              <div className="userListActions">
                <button className="userListEdt">Edit</button>
                <button className="userListDel">Delete</button>
              </div>
          )
      }
    },
  ];

  const rows = [
    {
      id: 1,
      status: "Alive",
      userName: "Jon Snow",
      avatar: "https://i.imgur.com/o9Qoiyi.jpg",
      email: "jon@got.com",
      transaction: "350.00",
    },
    {
      id: 2,
      status: "Dead",
      userName: "Cersei Lannister",
      avatar: "https://i.imgur.com/O1Lx47S.png",
      email: "cersei@got.com",
      transaction: "420.00",
    },
    {
      id: 3,
      status: "Dead",
      userName: "Jaime Lannister",
      avatar: "https://i.imgur.com/JRGxnRM.png",
      email: "jaime@got.com",
      transaction: "450.00",
    },
    {
      id: 4,
      status: "Alive",
      userName: "Arya Stark",
      avatar: "https://i.imgur.com/Kt5YyQg.png",
      email: "arya@got.com",
      transaction: "160.00",
    },
    {
      id: 5,
      status: "Dead",
      userName: "Daenerys Targaryen",
      avatar: "https://i.imgur.com/ybvyXdg.jpg",
      email: "daenerys@got.com",
      transaction: "0.00",
    },
    {
      id: 6,
      status: "Dead",
      userName: "Melisandre",
      avatar: "https://i.imgur.com/yBISiB6.jpg",
      email: "melisandre@got.com",
      transaction: "1500.00",
    },
    {
      id: 7,
      status: "Dead",
      userName: "Kal Drogo",
      avatar: "https://i.imgur.com/iV2l6mC.jpg",
      email: "kal@got.com",
      transaction: "440.00",
    },
    {
      id: 8,
      status: "Alive",
      userName: "Tyrion Lannister",
      avatar: "https://i.imgur.com/D7Fvke1.png",
      email: "tyrion@got.com",
      transaction: "360.00",
    },
    {
      id: 9,
      status: "Alive",
      userName: "Sansa Stark",
      avatar: "https://i.imgur.com/DVxMyhv.jpg",
      email: "sansa@got.com",
      transaction: "650.00",
    },
  ];

  return (
    <div className="page userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        className="userListTable"
      />
    </div>
  );
}
