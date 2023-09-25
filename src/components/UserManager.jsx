import { Table } from "antd";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "UserName",
    dataIndex: "username",
    sorter: true,
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: true,
  },
  {
    title: "Avatar",
    dataIndex: "avatar",
    sorter: true,
  },
  {
    title: "CreatedAt",
    dataIndex: "created",
    sorter: true,
  },
  {
    title: "UpdatedAt",
    dataIndex: "updated",
    sorter: true,
  },
  {
    title: "Action",
    render:(()=>{
        return(
            <div>
            aaaaa
            </div>
        )
    })
  },
];
const data = [
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const UserManager = () => (
  <Table columns={columns} dataSource={data} onChange={onChange} />
);
export default UserManager;
