// import React from "react";
import styles from "@/styles/order.module.css";
import { orderListData } from "../../../Data";
import { useRouter } from "next/router";
import Image from "next/image";

// export default function Table() {
//   const columns = [
//     {
//       id: "0",
//       name: "Order ID",
//     },
//     {
//       id: "1",
//       name: "Date",
//     },
//     {
//       id: "2",
//       name: "Customer Name",
//     },
//     {
//       id: "3",
//       name: "Location",
//     },
//     {
//       id: "4",
//       name: "Amount",
//     },
//     {
//       id: "5",
//       name: "Status Order",
//     },
//   ];

//   return (
//     <table className={styles["orderTable"]}>
//       <thead>
//         <tr className={styles["tr"]}>
//           {columns.map((col) => (
//             <TableHead key={col.id} name={col.name} />
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {orderListData.map((item) => (
//           <TableRow key={item.id} item={item} />
//         ))}
//       </tbody>
//     </table>
//   );
// }
// function TableHead({ name }) {
//   return (
//     <th className={styles["th"]}>
//       <div>
//         <p>{name}</p>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             margin: "10px",
//           }}
//         >
//           <Image src="/Vector1.png" alt="vector" width={10.5} height={6}/>
//           <Image src="/Vector2.png" alt="vector" width={10.5} height={6}/>
//         </div>
//       </div>
//     </th>
//   );
// }

// function TableRow(props) {
//   const { item } = props;
//   const route = useRouter();
//   const goToDetails = (id) => {
//     route.push(`/orders/${id}`);
//   };
//   return (
//     <tr
//       className={styles["tr"]}
//       style={{ cursor: "pointer" }}
//       onClick={() => goToDetails(item.id)}
//     >
//       <td className={styles["td"]}>#{item.id}</td>
//       <td className={styles["td"]}>{item.date}</td>
//       <td className={styles["td"]}>{item.customer.name}</td>
//       <td className={styles["td"]}>{item.location}</td>
//       <td className={styles["td"]}>${item.amount}</td>
//       <td className={styles["td"]}>
// {item.status === "On Delivery" ? (
//   <div className={styles["onDelivery"]}>{item.status}</div>
// ) : (
//   ""
// )}
//         {item.status === "New Order" ? (
//           <div className={styles["newOrder"]}>{item.status}</div>
//         ) : (
//           ""
//         )}
//         {item.status === "Delivered" ? (
//           <div className={styles["delivered"]}>{item.status}</div>
//         ) : (
//           ""
//         )}
//       </td>
//     </tr>
//   );
// }


import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'id', label: 'Order ID', minWidth: 170 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'left',
  },
  {
    id: "customerName",
    label: 'Customer Name',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'status',
    label: 'Status Order',
    minWidth: 170,
    align: 'center',
  },
];

const rows = orderListData;

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const route = useRouter();
  const goToDetails = (id) => {
    route.push(`/orders/${id}`);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden',}}>
      <TableContainer sx={{ maxHeight: { xs: 'auto', md: 'auto' } }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow style={{backgroundColor: '#00b074'}}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor: '#00b074', color: 'white' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                  onClick={() => goToDetails(row.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {columns.map((column) => {
                    let value;

                    if (column.id === 'amount') {
                      value = `$${row[column.id]}`;
                    }
                    else if (column.id === 'id') {
                      value = `#${row[column.id]}`;
                    }
                    else {
                      value = row[column.id];
                    }

                    return (
                      <TableCell key={column.id} align={column.align} className={column.id === 'amount' ? styles['amount'] : ''}>
                        {column.id === 'customerName' ? (
                          row.customer?.name || 'N/A'
                        ) : column.id === 'status' ? (
                          <div
                            className={styles['status']}
                            style={{
                              overflow: 'hidden',
                            }}
                          >
                            {row.status === 'On Delivery' ? (
                              <div className={styles['onDelivery']}>{row.status}</div>
                            ) : row.status === 'New Order' ? (
                              <div className={styles['newOrder']}>{row.status}</div>
                            ) : row.status === 'Delivered' ? (
                              <div className={styles['delivered']}>{row.status}</div>
                            ) : (
                              row.status
                            )}
                          </div>
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[12, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{marginBottom: '40px'}}
      />
    </Paper>
  );
}
