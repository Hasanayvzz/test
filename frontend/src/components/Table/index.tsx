import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "../../contexts/Theme/ThemeContext";
import { useRouter } from "next/router";
import { LoaderContext } from "../../contexts/loaderContext";
import { useTranslation } from "react-i18next";
import { ApiRequest } from "../../pages/api";
import { toast } from "react-toastify";

interface MUITable {
  rows: any;
  columns: any;
  setDetailItem?: any;
  setActivePage?: any;
  aprSelect?: any;
  trigger?: any;
  setTrigger?: any;
  setAprSelect?: any;
  modalData?: any;
  setModalData?: any;
  headFontSize?: any;
  filters?: any;
  pagination?: boolean;
  blogTrigger?: any;
  setBlogTrigger?: any;
  setFilters?: any;
  isBorderRadius?: any;
}
const UsersTable: React.FC<MUITable> = ({
  rows,
  columns,
  filters,
  setActivePage,
  setDetailItem,
  pagination,
  trigger,
  setTrigger,
  blogTrigger,
  setBlogTrigger,
  headFontSize,
  isBorderRadius,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [claimModal, setClaimModal] = React.useState(false);
  const [unlockedBalance, setUnlockedBalance] = React.useState("");
  const [perDay, setPerDay] = React.useState("");
  const [lockedBalance, setLockedBalance] = React.useState("");
  const [initialBalance, setInitialBalance] = React.useState("");
  const { handleLoading } = React.useContext(LoaderContext);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const { t } = useTranslation();
  const handleClose = () => {
    setClaimModal(false);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const theme = useTheme();

  console.log("table filtre", filters);
  let filteredData = rows;

  const router = useRouter();

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        boxShadow: "none",
        borderRadius: 4,
        padding: "0.5rem",
        background: theme.theme === "light" ? "#FBFBFB" : "#333333",
      }}>
      <TableContainer
        className="pointer"
        sx={{ borderRadius: isBorderRadius ? isBorderRadius : 0 }}>
        <Table stickyHeader aria-label="sticky table" className="px-3 py-2 ">
          <TableHead
            style={{
              backgroundColor: theme.theme === "light" ? "#F0F0F0" : "#1F1F1F",
            }}>
            <TableRow style={{ borderRadius: 99 }}>
              {columns?.map((column: any, index: number) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    color: theme.theme === "light" ? "#7B809A" : "#f9f9f9",
                    background: "transparent",
                    fontSize: headFontSize ? headFontSize : 18,
                    fontWeight: 500,

                    borderBottom: !(
                      index === columns.length && theme.theme === "light"
                    )
                      ? "1px solid #D8D8D8"
                      : "1px solid #D7D7D7",
                  }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody
            style={{
              backgroundColor: theme.theme === "light" ? "#fbfbfb" : "#333333",
            }}>
            {filteredData
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index: number) => {
                console.log("rowlar ne", row);
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns?.map((column) => {
                      const value = row[column.id];

                      if (column.id === "detailBtn") {
                        return (
                          <TableCell
                            onClick={() => {
                              setDetailItem(row);
                              setActivePage("detail");
                            }}
                            style={{
                              color: "#E91F63",
                              fontSize: 18,
                              lineHeight: "21.78px",
                              fontWeight: 500,
                            }}
                            key={column.id}
                            align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      } else if (column.id === "delete") {
                        return (
                          <TableCell
                            onClick={() => {
                              ApiRequest.deleteUser({
                                userId: row.id,
                              }).then((res) => {
                                setTrigger(!trigger);
                                toast.success("Kullanıcı başarıyla silindi.", {
                                  position: "top-right",
                                  hideProgressBar: false,
                                  closeOnClick: false,
                                  pauseOnHover: true,
                                  draggable: false,
                                  progress: undefined,
                                  theme: "light",
                                  autoClose: 3000,
                                });
                              });
                              console.log("row ne", row);
                              // setDetailItem(row);
                              //  setActivePage("detail");
                            }}
                            style={{
                              color: "#f7626f",
                              fontSize: 18,
                              lineHeight: "21.78px",
                              fontWeight: 500,
                            }}
                            key={column.id}
                            align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      } else if (column.id === "deleteBlog") {
                        return (
                          <TableCell
                            onClick={() => {
                              ApiRequest.deleteBlog({
                                blogId: row.id,
                              }).then((res) => {
                                setBlogTrigger(!blogTrigger);
                                toast.success("Blog başarıyla silindi.", {
                                  position: "top-right",
                                  hideProgressBar: false,
                                  closeOnClick: false,
                                  pauseOnHover: true,
                                  draggable: false,
                                  progress: undefined,
                                  theme: "light",
                                  autoClose: 3000,
                                });
                              });
                              // setDetailItem(row);
                              //  setActivePage("detail");
                            }}
                            style={{
                              color: "#f7626f",
                              fontSize: 18,
                              lineHeight: "21.78px",
                              fontWeight: 500,
                            }}
                            key={column.id}
                            align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      } else if (column.id === "status") {
                        return (
                          <TableCell
                            onClick={() => {
                              console.log("row ne", row);
                              // setDetailItem(row);
                              //  setActivePage("detail");
                            }}
                            style={{
                              color: "#00D66B",
                              fontSize: 18,
                              lineHeight: "21.78px",
                              fontWeight: 500,
                            }}
                            key={column.id}
                            align={column.align}>
                            <div>
                              {value === "Rejected" ? (
                                <p style={{ color: "#f7626f" }}>Reddedildi</p>
                              ) : (
                                <div className="d-flex align-items-center gap-2">
                                  {value === "waitingApproval" ? (
                                    <>
                                      <button
                                        onClick={() => {
                                          ApiRequest.updateBlog({
                                            blogId: row.id,
                                            status: "Approved",
                                          }).then((res) => {
                                            setBlogTrigger(!blogTrigger);
                                            toast.success(
                                              "Blog Başarıyla Onaylandı!",
                                              {
                                                position: "top-right",
                                                hideProgressBar: false,
                                                closeOnClick: false,
                                                pauseOnHover: true,
                                                draggable: false,
                                                progress: undefined,
                                                theme: "light",
                                                autoClose: 3000,
                                              }
                                            );
                                          });
                                        }}
                                        className="btn-rounded-green">
                                        Onayla
                                      </button>
                                      <button
                                        onClick={() => {
                                          ApiRequest.updateBlog({
                                            blogId: row.id,
                                            status: "Rejected",
                                          }).then((res) => {
                                            setBlogTrigger(!blogTrigger);
                                            toast.success(
                                              "Blog Başarıyla Reddedildi!",
                                              {
                                                position: "top-right",
                                                hideProgressBar: false,
                                                closeOnClick: false,
                                                pauseOnHover: true,
                                                draggable: false,
                                                progress: undefined,
                                                theme: "light",
                                                autoClose: 3000,
                                              }
                                            );
                                          });
                                        }}
                                        className="btn-rounded-red">
                                        Reddet
                                      </button>
                                    </>
                                  ) : (
                                    <p>Onaylandı</p>
                                  )}
                                </div>
                              )}
                            </div>
                          </TableCell>
                        );
                      } else if (column.id === "blogDetail") {
                        return (
                          <TableCell
                            onClick={() => {
                              router.push(`blogs/${row.id}`);
                            }}
                            style={{
                              color: "#f9b34d",
                              fontSize: 18,
                              lineHeight: "21.78px",
                              fontWeight: 500,
                            }}
                            key={column.id}
                            align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell
                            style={{
                              color:
                                theme.theme === "light" ? "#344767" : "#f6f6f6",
                              fontSize: 16,
                              lineHeight: "21.78px",
                              fontWeight: 400,
                              borderBottom:
                                theme.theme === "light"
                                  ? "1px solid #D8D8D8"
                                  : "1px solid #D7D7D7",
                            }}
                            key={column.id}
                            align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {pagination && (
        <TablePagination
          style={{
            color: theme.theme === "light" ? "#344767" : "#f9f9f9",
          }}
          rowsPerPageOptions={[10, 25, 100]}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage={t("dashboard.rowsPer")}
          page={page}
          component="div"
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
};

export default UsersTable;
