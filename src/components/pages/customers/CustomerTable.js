// import React from "react";
// import styles from "@/styles/customers.module.css";
// import { customerData } from "@/Data";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// export default function CustomerTable() {
//   const columns = [
//     {
//       id: "0",
//       name: "Customer ID",
//     },
//     {
//       id: "1",
//       name: "Join Date",
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
//       name: "Total Spent",
//     },
//     {
//       id: "5",
//       name: "Last Order",
//     },
//   ];
//   return (
//     <>
//       <table className={styles["orderTable"]}>
//         <thead>
//           <tr className={styles["tr"]}>
//             {columns.map((col) => (
//               <TableHead key={col.id} name={col.name} />
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {customerData.map((item) => (
//             <TableRow key={item.id} item={item} />
//           ))}
//         </tbody>
//       </table>
//     </>
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
//           <Image src="/Vector1.png" alt="vector" width={10.5} height={6} />
//           <Image src="/Vector2.png" alt="vector" width={10.5} height={6} />
//         </div>
//       </div>
//     </th>
//   );
// }

// function TableRow(props) {
//   const { item } = props;
//   const route = useRouter();
//   const goToDetails = (id) => {
//     route.push(`/customers/${id}`);
//   };
//   return (
//     <tr
//       className={styles["tr"]}
//       style={{ cursor: "pointer" }}
//       onClick={() => goToDetails(item.id)}
//     >
//       <td className={styles["td"]}>#C-{item.id}</td>
//       <td className={styles["td"]}>{item.date}</td>
//       <td className={styles["td"]}>{item.name}</td>
//       <td className={styles["td"]}>{item.homeLocation}</td>
//       <td className={styles["td1"]}>${item.totalSpend}</td>
//       <td className={styles["td12"]}>${item.lastOrder}</td>
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
import { useRouter } from 'next/navigation';
import styles from "@/styles/customers.module.css";
import { customerData } from "@/Data";

const columns = [
  { id: 'id', label: 'Customer ID', minWidth: 170 },
  { id: 'date', label: 'Join Date', minWidth: 170 },
  { id: 'name', label: 'Customer Name', minWidth: 170 },
  { id: 'homeLocation', label: 'Location', minWidth: 170 },
  { id: 'totalSpend', label: 'Total Spent', minWidth: 170, align: 'right' },
  { id: 'lastOrder', label: 'Last Order', minWidth: 170, align: 'right' },
];

export default function CustomerTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);
  const router = useRouter();

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const goToDetails = (id) => {
    router.push(`/customers/${id}`);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 'auto' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow style={{ backgroundColor: '#2d9cdb' }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || 'left'}
                  style={{ minWidth: column.minWidth, backgroundColor: '#2d9cdb', color: 'white' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {customerData
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

                    if (column.id === 'id') {
                      value = `#C-${row[column.id]}`;
                    } else if (column.id === 'totalSpend' || column.id === 'lastOrder') {
                      value = `$${row[column.id]}`;
                    } else {
                      value = row[column.id];
                    }

                    return (
                      <TableCell
                        key={column.id}
                        align={column.align || 'left'}
                        className={column.id === 'totalSpend' || column.id === 'lastOrder' ? styles['tdMoney'] : ''}
                      >
                        {value}
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
        count={customerData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ marginBottom: '40px' }}
      />
    </Paper>
  );
}
