import { Add, Search } from '@mui/icons-material';
import { Box, Button, IconButton, InputBase, Paper } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridRowModes,
  GridSlots,
  GridToolbarContainer
} from '@mui/x-data-grid';
import { useState } from 'react';
import { rows } from '../../utils/data';
import { randomId } from '@mui/x-data-grid-generator';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name' },
  { field: 'lastName', headerName: 'Last name' },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number'
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    minWidth: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`
  }
];

const TableList = () => {
  const [row, setRow] = useState<any[]>(rows); // Dữ liệu hàng
  const [selectedRows, setSelectedRows] = useState<any[]>([]); // Hàng đã chọn

  const handleSelectionModelChange = (selection: any) => {
    setSelectedRows(selection);
  };

  const handleDeleteSelectedRows = () => {
    const updatedRows = row.filter((row) => !selectedRows.includes(row?.id));
    setRow(updatedRows);
    setSelectedRows([]);
  };

  const EditToolbar = (props: any) => {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const id = randomId();
      setRows((oldRows: any) => [
        ...oldRows,
        { id, lastName: '', firstName: '', isNew: true }
      ]);
      setRowModesModel((oldModel: any) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' }
      }));
    };

    return (
      <GridToolbarContainer
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Button color="primary" startIcon={<Add />} onClick={handleClick}>
          Add
        </Button>
        <IconButton
          type="button"
          sx={{ p: '10px', color: 'red', fontSize: '18px' }}
          aria-label="delete"
          onClick={handleDeleteSelectedRows}
          disabled={selectedRows?.length === 0}
        >
          <DeleteIcon />
        </IconButton>
      </GridToolbarContainer>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
        margin: '10px 30px'
      }}
    >
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <Search />
        </IconButton>
      </Paper>
      <DataGrid
        sx={{ minHeight: '80%' }}
        rows={row}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10, 20, 50]}
        checkboxSelection
        disableColumnMenu
        rowSelectionModel={selectedRows}
        // hideFooterSelectedRowCount={true}
        onRowSelectionModelChange={handleSelectionModelChange}
        slots={{
          toolbar: EditToolbar as GridSlots['toolbar'],
          footer: EditToolbar
        }}
      />
    </Box>
  );
};

export default TableList;
