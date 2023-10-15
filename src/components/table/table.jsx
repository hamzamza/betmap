import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.scss";

function TAble() {
  const createData = (product, customer, date, amount, method, id) => {
    return {
      id: id,
      product: product,
      customer: customer,
      date: date,
      amount: amount,
      method: method,
    };
  };
  const rows = [
    createData("product1", 159, 6.0, 24, 4.0, "1"),
    createData("product2", 237, 9.0, 37, 4.3, "2"),
    createData("product3", 262, 16.0, 24, 6.0, "3"),
    createData("product4", 305, 3.7, 67, 4.3, "4"),
    createData("product5", 356, 16.0, 49, 3.9, "5"),
  ];
  return (
    <div className="boxshadowed rounded">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>products</TableCell>
              <TableCell align="right">customer</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.product}
                </TableCell>
                <TableCell align="right">{row.customer}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.method}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TAble;
