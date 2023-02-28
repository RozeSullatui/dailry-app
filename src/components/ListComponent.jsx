import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ListComponent = ({ todos, setTodo,itemList,setItemList}) => {
  

  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>日用品の名前</TableCell>
            <TableCell align="right">カテゴリ</TableCell>
            <TableCell align="right">残り(日)</TableCell>
            <TableCell align="right">URL</TableCell>
            <TableCell align="right">URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => {
            const { category } = todo;
            const itemListByCategory = itemList[category] || [];
            return (
              itemListByCategory.map((item) => {
                const { name, day, url } = item;
                return (
                  <TableRow
                    key={name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {name}
                    </TableCell>
                    <TableCell align="right">{category}</TableCell>
                    <TableCell align="right">{day}</TableCell>
                    <TableCell align="right">{url}</TableCell>
                    <TableCell align="right">{url}</TableCell>
                  </TableRow>
                );
              })
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListComponent;