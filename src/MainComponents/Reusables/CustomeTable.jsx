import { Table } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import styled from "styled-components";
// import TypeActionButton from "./TypeActionButton";
// import EditIcon from "assets/icons/EditIcon";
// import LockIcon from "assets/icons/LockIcon";
// const columns = [
//   {
//     title: "S.No",
//     dataIndex: "key",
//     //fixed: "left",
//     /*   sorter: {
//       compare: (a, b) => a.name - b.name,
//       multiple: 1,
//     }, */
//     width: "40%",
//   },
//   {
//     title: "USER ID",
//     dataIndex: "userId",
//     width: "100%",
//   },
//   {
//     title: "CREATED ON",
//     dataIndex: "date",
//     width: "100%",
//   },
//   {
//     title: "USERNAME",
//     dataIndex: "username",
//     render: (text, record) => (
//       <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//         <span>{text}</span>
//         <span style={{ color: "#8B909A" }}>{record.email}</span>
//       </div>
//     ),
//     width: "160%",
//   },
//   {
//     title: "INST.ID",
//     dataIndex: "instId",
//     // render: () => "Other",
//     width: "100%",
//   },
//   {
//     title: "INST CODE",
//     dataIndex: "instCode",
//     // render: () => "Other 1",
//     width: "100%",
//   },
//   {
//     title: "INSTITUTION",
//     dataIndex: "institution",
//     // render: () => "Other 2",
//     width: "100%",
//   },
//   {
//     title: "STATUS",
//     dataIndex: "status",
//     render: (status) => (
//       <div>
//         {status ? (
//           <TypeActionButton status placeholder="Type A Action" />
//         ) : (
//           <TypeActionButton placeholder="Type B Action" />
//         )}
//       </div>
//     ),
//     width: "100%",
//   },
//   {
//     title: "ACTIONS",
//     dataIndex: "edit",
//     render: (edit) => (
//       <div>
//         {edit && (
//           <div style={{ display: "flex", flexDirection: "row" }}>
//             <div>
//               <EditIcon />
//             </div>
//             <div>
//               <LockIcon />
//             </div>
//           </div>
//         )}
//       </div>
//     ),
//     width: "100%",
//   },
// ];
// const data = [
//   {
//     key: "1",
//     name: "Jane Doe",
//     salary: 23000,
//     userId: "6548",
//     date: "6 April 2023",
//     instId: "B13214",
//     instCode: 2345,
//     edit: true,
//     status: true,
//     institution: "Access Bank",
//     username: "Segun Peters",
//     address: "32 Park Road, London",
//     email: "jane.doe@example.com",
//   },
//   {
//     key: "2",
//     name: "Alisa Ross",
//     salary: 25000,
//     userId: "6548",
//     date: "6 April 2023",
//     instId: "B13214",
//     edit: true,
//     instCode: 2345,
//     status: true,
//     institution: "Access Bank",
//     username: "Segun Peters",
//     address: "35 Park Road, London",
//     email: "alisa.ross@example.com",
//   },
//   {
//     key: "3",
//     name: "Kevin Sandra",
//     salary: 22000,
//     userId: "6548",
//     date: "6 April 2023",
//     instId: "B13214",
//     edit: true,
//     instCode: 2345,
//     status: false,
//     institution: "Access Bank",
//     username: "Segun Peters",
//     address: "31 Park Road, London",
//     email: "kevin.sandra@example.com",
//   },
//   {
//     key: "4",
//     name: "Ed Hellen",
//     salary: 17000,
//     userId: "6548",
//     date: "6 April 2023",
//     instId: "B13214",
//     edit: true,
//     instCode: 2345,
//     status: true,
//     institution: "Access Bank",
//     username: "Segun Peters",
//     address: "42 Park Road, London",
//     email: "ed.hellen@example.com",
//   },
//   {
//     key: "5",
//     name: "William Smith",
//     salary: 27000,
//     userId: "6548",
//     date: "6 April 2023",
//     instId: "B13214",
//     edit: true,
//     instCode: 2345,
//     status: false,
//     institution: "Access Bank",
//     username: "Segun Peters",
//     address: "62 Park Road, London",
//     email: "william.smith@example.com",
//   },
// ];

const CustomTable = ({
  Apidata,
  tableColumns,
  loading,
  noData,
  approvals,
  setCurrentPage,
  currentPage
}) => {
  return (
    <Content>
      <Table
        loading={loading}
        noDataElement={noData}
        columns={tableColumns}
        data={Apidata}
        className="table3"
        onChange={(pagination, changedSorter) => {
          if (pagination.current) {
            setCurrentPage(pagination.current);
          }
        }}
        pagination={{
          total: approvals,
          pageSize: 10,
          current: currentPage,
          pageSizeChangeResetCurrent: true
        }}
        style={{
          padding: "12px 0"
        }}
        scroll={{ x: 2700, y: 1000 }}
        // scroll={{
        //   x: 400,
        //   y: 400
        // }}
      />
    </Content>
  );
};

export default CustomTable;
const Content = styled.div`
  padding-top: 30px;
  width: 100%;
  background: white;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  /* width: 100%;
  min-width: 100%;
  overflow: scroll; */
  .table3 {
    th {
      padding: 0px;
      font-size: 12px;
      font-weight: 600;
      background-color: #f4faff;
      color: #687182;
    }

    td {
      padding: 20px;
      font-size: 12px;
      border-top: 1px solid #e9edf5;
      font-weight: 600;
      color: #23272e;
      /* min-width: 200px; */
      border-bottom: 1px solid #e9edf5;
    }
  }
`;
