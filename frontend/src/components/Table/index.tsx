import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
interface EnhancedTableProps {
  rows: any[];
  headCells: any[];
  tableName: string;
  isEditable?: boolean;
  filterData?: any;
  editableColumn?: any;
  trigger?: any;
  setTrigger?: any;
  isDeletable?: boolean;
  isCode?: boolean;
  statusColumn?: boolean;
}
export const EnhancedTable: React.FC<EnhancedTableProps> = ({
  tableName,
  rows,
  headCells,
  isEditable = false,
  filterData,
  editableColumn,
  trigger,
  setTrigger,
  isDeletable = false,
  isCode = false,
  statusColumn = false,
}) => {
  const [order, setOrder] = React.useState<any>("desc");
  const [orderBy, setOrderBy] = React.useState<any>("orderDate");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [isActiveModal, setIsActiveModal] = React.useState(false);
  // const [trigger, setTrigger] = React.useState<boolean>(false);
  const [updatedPrice, setUpdatedPrice] = React.useState<any>();
  const [showDeleteModal, setShowDeleteModal] = React.useState<boolean>(false);

  const [deleteModalItemId, setDeleteModalItemId] = React.useState<any>();

  const [modalItem, setModalItem] = React.useState<{
    itemId: string;
    salePrice: string;
    sku: string;
  }>({ itemId: "", salePrice: "", sku: "" });
  const [deleteModalItem, setDeleteModalItem] = React.useState<{
    id: string;
  }>({ id: "" });
  const [productPrice, setProductPrice] = React.useState<number>();

  const handleModalOpenClick = (item: any) => {
    setModalItem(item);
    setIsActiveModal(true);
  };

  const handleModalCloseClick = () => {
    setIsActiveModal(false);
  };
  const handleDeleteItemModalOpen = (item: any) => {
    setDeleteModalItem({
      id: item._id,
    });

    setShowDeleteModal(true);
  };

  console.log("deletemodalItem", deleteModalItem);
  const handleDeleteItemModalClose = () => {
    setShowDeleteModal(false);
  };

  //   const downloadMetadata = () => {
  //     let csvContent = "data:text/csv;charset=utf-8,";

  //     // Generate column headers dynamically
  //     const columnHeaders = Object.keys(headCells).map(
  //       (key: any) => headCells[key].label
  //     );

  //     csvContent += columnHeaders.join(";") + "\n";

  //     rows.map((item) => {
  //       let rowData = "";
  //       headCells.map((head) => {
  //         let cellValue = item[head.id];

  //         if (typeof cellValue === "number") {
  //           cellValue = cellValue.toString().replace(".", ",");
  //         }
  //         if (head.id == "orderDate") {
  //           cellValue = new Date(cellValue * 1000).toLocaleDateString();
  //         }

  //         rowData += `${cellValue};`;
  //       });

  //       csvContent += rowData + "\n";
  //     });

  //     var encodedUri = encodeURI(csvContent);
  //     window.open(encodedUri);
  //   };

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  type Order = "asc" | "desc";

  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
  ): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
  ) => number {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  const getStatusColor = (status: any) => {
    switch (status) {
      case "In Progress":
        return "#FC9926";
      case "Verified":
        return "#24D072";
      case "Rejected":
        return "#F24747";
    }
  };

  // Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
  // stableSort() brings sort stability to non-modern browsers (notably IE11). If you
  // only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
  // with exampleArray.slice().sort(exampleComparator)
  function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
  ) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }
  const EnhancedTableHead = (props: EnhancedTableProps) => {
    const { onSelectAllClick, order, orderBy, rowCount, onRequestSort } = props;
    const createSortHandler =
      (property: any) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell: any) => (
            <TableCell
              style={{
                backgroundColor: "#F9F9F9",
              }}
              key={headCell.id}
              align="center"
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                style={{ fontSize: 15, color: "#848484", fontWeight: "bold" }}
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  interface EnhancedTableToolbarProps {
    numSelected: number;
  }

  const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const { numSelected } = props;

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            <div>{tableName}</div>
          </Typography>
        )}
        {/* <img
          src={downloadIcon}
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
          onClick={downloadMetadata}
          alt="download-icon"
        /> */}
      </Toolbar>
    );
  };
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: any
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const handleSelectAllClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {};

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  return (
    <Paper sx={{ width: "100%", mb: 2 }}>
      {tableName && <EnhancedTableToolbar numSelected={selected.length} />}
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={dense ? "small" : "medium"}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {visibleRows.map((row: any, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={null}>
                  {headCells.map((item: any, index) => {
                    if (item.id !== "createDate" && item.id != "Status") {
                      if (item.id === "Status") {
                        return (
                          <TableCell key={index} align="center">
                            <div className="editCard">{row[item.id]}</div>
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell
                            style={{
                              fontSize: 15,
                              fontWeight: 500,
                              color: "#535353",
                            }}
                            key={index}
                            align="center"
                          >
                            {row[item.id]}
                          </TableCell>
                        );
                      }
                    } else if (item.id == "createDate") {
                      return (
                        <TableCell
                          style={{
                            fontWeight: 500,
                            fontSize: 15,
                            color: "#535353",
                          }}
                          key={index}
                          align="center"
                        >
                          {new Date(
                            Number(row[item.id]) * 1000
                          ).toLocaleDateString()}
                        </TableCell>
                      );
                    } else if (item.id == "Status") {
                      return (
                        <TableCell
                          style={{
                            color: getStatusColor(row[item.id]),
                            fontSize: 15,
                            fontWeight: 500,
                          }}
                          key={index}
                          align="center"
                        >
                          {row[item.id]}
                        </TableCell>
                      );
                    } else {
                      <TableCell
                        style={{ fontSize: 15, fontWeight: 500 }}
                        key={index}
                        align="center"
                      >
                        {row[item.id]}
                      </TableCell>;
                    }
                  })}
                  {/* {isEditable == true && (
                    <TableCell>
                      <img
                        style={{
                          height: "20px",
                          width: "20px",
                          cursor: "pointer",
                        }}
                        onClick={handleModalOpenClick}
                        src={EditIcon}
                        alt=""
                      />
                    </TableCell>
                  )} */}
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (dense ? 33 : 53) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
