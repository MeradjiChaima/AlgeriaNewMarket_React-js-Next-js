import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import { Avatar, Divider, Box } from "@mui/material";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";

import image from "/diamond.png";
import CustomButton from "../../../shared/components/CustomButton";



import { element } from "prop-types";

const firstRowTitles = [
  "Acheteur",
  "Produit",
  "Montant",
  "Export | Gratuit",
  "Statut",
  "Action",
];

const data = [
  {
    OrderId: 1,
    BuyerMail: "example1@gmail.com",
    Buyerimg: image,
    ChatLink: "https://www.google.com/",
    productImg: image,
    ProductName: "Nom de Produit",
    UnitPrice: 1000,
    totalAmount: 5,
    Export: "overSeas",
    Status: "Waiting for Payment Confirmation",
  },
  {
    OrderId: 2,
    BuyerMail: "example2@gmail.com",
    Buyerimg: image,
    ChatLink: "https://www.google.com/",
    productImg: image,
    ProductName: "Nom de Produit",
    UnitPrice: 1000,
    totalAmount: 5,
    Export: "Cooperative",
    Status: "Waiting for Payment Confirmation",
  },
  {
    OrderId: 3,
    BuyerMail: "example3@gmail.com",
    Buyerimg: image,
    ChatLink: "https://www.google.com/",
    productImg: image,
    ProductName: "Nom de Produit",
    UnitPrice: 1000,
    totalAmount: 5,
    Export: "overSeas",
    Status: "Done",
  },
  {
    OrderId: 4,
    BuyerMail: "example4@gmail.com",
    Buyerimg: image,
    ChatLink: "https://www.google.com/",
    productImg: image,
    ProductName: "Nom de Produit",
    UnitPrice: 1000,
    totalAmount: 5,
    Export: "overSeas",
    Status: "Done",
  },
  {
    OrderId: 5,
    BuyerMail: "example1@gmail.com",
    Buyerimg: image,
    ChatLink: "https://www.google.com/",
    productImg: image,
    ProductName: "Nom de Produit",
    UnitPrice: 1000,
    totalAmount: 5,
    Export: "Cooperative",
    Status: "Waiting for Payment Confirmation",
  },
  {
    OrderId: 6,
    BuyerMail: "example2@gmail.com",
    Buyerimg: image,
    ChatLink: "https://www.google.com/",
    productImg: image,
    ProductName: "Nom de Produit",
    UnitPrice: 1000,
    totalAmount: 5,
    Export: "overSeas",
    Status: "Done",
  },
  {
    OrderId: 7,
    BuyerMail: "example3@gmail.com",
    Buyerimg: image,
    ChatLink: "https://www.google.com/",
    productImg: image,
    ProductName: "Nom de Produit",
    UnitPrice: 1000,
    totalAmount: 5,
    Export: "overSeas",
    Status: "Waiting for Payment Confirmation",
  },
  {
    OrderId: 8,
    BuyerMail: "example4@gmail.com",
    Buyerimg: image,
    ChatLink: "https://www.google.com/",
    productImg: image,
    ProductName: "Nom de Produit",
    UnitPrice: 1000,
    totalAmount: 5,
    Export: "intermediary",
    Status: "Waiting for Payment Confirmation",
  },
  {
    OrderId: 9,
    BuyerMail: "example1@gmail.com",
    Buyerimg: image,
    ChatLink: "https://www.google.com/",
    productImg: image,
    ProductName: "Nom de Produit",
    UnitPrice: 1000,
    totalAmount: 5,
    Export: "Cooperative",
    Status: "Waiting for Payment Confirmation",
  },
  {
    OrderId: 10,
    BuyerMail: "example2@gmail.com",
    Buyerimg: image,
    ChatLink: "https://www.google.com/",
    productImg: image,
    ProductName: "Nom de Produit",
    UnitPrice: 1000,
    totalAmount: 5,
    Export: "overSeas",
    Status: "Done",
  },
  {
    OrderId: 11,
    BuyerMail: "example3@gmail.com",
    Buyerimg: image,
    ChatLink: "https://www.google.com/",
    productImg: image,
    ProductName: "Nom de Produit",
    UnitPrice: 1000,
    totalAmount: 5,
    Export: "intermediary",
    Status: "Waiting for Payment Confirmation",
  },
  {
    OrderId: 12,
    BuyerMail: "example4@gmail.com",
    Buyerimg: image,
    ChatLink: "https://www.google.com/",
    productImg: image,
    ProductName: "Nom de Produit",
    UnitPrice: 1000,
    totalAmount: 5,
    Export: "overSeas",
    Status: "Done",
  },
  {
    OrderId: 13,
    BuyerMail: "example1@gmail.com",
    Buyerimg: image,
    ChatLink: "https://www.google.com/",
    productImg: image,
    ProductName: "Nom de Produit",
    UnitPrice: 1000,
    totalAmount: 5,
    Export: "Cooperative",
    Status: "Waiting for Payment Confirmation",
  },
];
const DateOptions = [
  { label: "Descendant", value: "Descendant" },
  { label: "Ascendant", value: "Ascendant" },
];

let displayedData = data;
const AllOrders = (props) => {
  const buyerOptionsList = [];
  const exportOptionsList = [];
  const [dateOption, SetdateOption] = useState("");
  const [buyerOption, SetBuyerOption] = useState("");
  const [exportOption, SetExportOption] = useState("");
  const [buyerOptions, setBuyerOptions] = useState([]);
  const [exportOptions, setExportOptions] = useState([]);
  const [activeFilter, setActiveFilter] = useState(false);

  const TrierDate = () => {};

  /********************************************************************************* */
  const fillOptions = () => {
    data.forEach((element) => {
      if (
        buyerOptionsList.length === 0 ||
        !buyerOptionsList.find(
          (option) =>
            option.label === element.BuyerMail &&
            option.value === element.BuyerMail
        )
      ) {
        buyerOptionsList.push({
          label: element.BuyerMail,
          value: element.BuyerMail,
        });
      }
      if (
        exportOptionsList.length === 0 ||
        !exportOptionsList.find(
          (option) =>
            option.label === element.Export && option.value === element.Export
        )
      ) {
        exportOptionsList.push({
          label: element.Export,
          value: element.Export,
        });
      }
    });
    // console.log(buyerOptionsList)
    setBuyerOptions(Array.from(new Set(buyerOptionsList)));
    setExportOptions(Array.from(new Set(exportOptionsList)));
  
  };
  const restParametres = () => {
    SetBuyerOption("");
    SetExportOption("");
  };
  /*************************************************************************************************/
  //handles the pagination and its parametres
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); //seting numbers of rows displayed per page

  const handleChangePage = (event, newPage) => {
    setPage(newPage); //handles changing the page number
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10)); //handels the page' row's  nb changing
    setPage(1);
  };

 
  /*************************************************************************************** */
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  /*************************************************************************************** */
  useEffect(() => {
    // This function will be executed when the component mounts
    fillOptions();
  }, []);

  /***************************************************************************************** */
  return (
    <>
      {/* Orders area */}
      <div
        style={{
         padding:'190px',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          //justifyContent: "flex-start",
          gap: "40px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          {/* search and delete area */}
          <div
            style={{
              display: "inline-flex",
              //  borderRadius: "50px",
              gap: "60%",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            
            
          </div>
          {/* Pagination area Ends */}
          {/* Table's header area */}
          <Table
            style={{ background: "white", width: "100%", fontSize: "16px" }}
          >
            <TableHead>
              <TableRow
                sx={{
                  background: "rgba(255,255,255,1)",
                  border: "1px solid #ccc",
                  boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                {firstRowTitles.map((column) => (
                  <>
                    {/* Displaying the culomns names*/}
                    <TableCell
                      sx={{
                        textAlign: "center",
                        fontFamily: "Raleway ",
                        fontWeight: 900,
                        fontSize: "0.8vw",
                        borderRight: "0.1px solid darkblue",
                      }}
                      key={column}
                    >
                      {column}
                    </TableCell>
                  </>
                ))}
              </TableRow>
            </TableHead>
            {/* Table's header area ends */}
            <TableBody>
              {
              data 
                .filter(
                  (option) =>
                    ((buyerOption == option.BuyerMail || buyerOption == "") &&
                      (exportOption == option.Export || exportOption == ""))
                )
                .slice(startIndex, endIndex)
                .map((rowData, index) => (             
                  <>
                    {/* for pagination */}

                    <Typography
                      sx={{
                        p: 2,
                        margin: "auto",
                        fontFamily: "Raleway ",
                        fontWeight: 500,
                        fontSize: "0.8vw",
                        flexGrow: 1,
                        alignItems: "center",
                        justifyContent: "space-between",
                        display: "flex",
                      }}
                    >
                      Order ID: {rowData.OrderId}
                    </Typography>
                    {/* Orders Display area */}
                    <TableRow
                      key={index}
                      sx={{
                        boxShadow: "5px 5px 5px rgba(5, 5, 5, 0.5)",
                        backgroundColor: "rgba(216, 123, 15, 0.03)",
                        "&:hover": {
                          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
                          transition:
                            "background 0.3s ease, box-shadow 0.3s ease",
                        },
                      }}
                    >
                      {" "}
                      {/*section 1 buyer's contact */}
                      <TableCell
                        sx={{
                          borderRight: "0.1px solid grey",
                          display: "table-cell",
                        }}
                      >
                        <div
                          style={{
                            padding: "0.2vw",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.8vw",
                            alignItems: "center",
                          }}
                        >
                          <Avatar
                            alt="Remy Sharp"
                            src={rowData.Buyerimg}
                            sx={{ width: "3.8vw", height: "3.8vw" }}
                          />
                          <ButtonBase
                            component="a"
                            href={`mailto:${rowData.BuyerMail}`}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "30px",
                                marginRight: "0.9vw",
                              }}
                            >
                              {" "}
                            {/*   <Box
                                sx={{ width: "1.2vw", height: "1.2vw" }}
                                component="img"
                                src="https://img.icons8.com/color/48/gmail--v1.png"
                              /> */}
                              <Typography
                                variant="caption"
                                sx={{
                                  fontFamily: "Raleway ",
                                  fontWeight: 500,
                                  fontSize: "0.8vw",
                                }}
                              >
                                {" "}
                                {rowData.BuyerMail}{" "}
                              </Typography>
                            </div>
                          </ButtonBase>
                          <a href={rowData.ChatLink}>
                            <Button
                              variant="contained"
                              sx={{
                                fontSize: "0.8vw",
                                flexBasis: "15%",
                                width: "5vw",
                                height: "2vw",
                                backgroundColor: "white",
                                color: "blue",

                                "&:hover": {
                                  //limiting the hover color changing
                                  backgroundColor: "white",
                                  color: "blue",
                                },
                              }}
                              startIcon={
                                <MapsUgcOutlinedIcon
                                  color="primary"
                                  sx={{ width: "0.8vw", height: "0.8vw" }}
                                />
                              }
                            >
                              Chat
                            </Button>
                          </a>
                        </div>
                      </TableCell>
                      {/*section 2 product brief details */}
                      <TableCell
                        sx={{
                          borderRight: "0.1px solid grey",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Avatar
                            alt="Remy Sharp"
                            src="/diamond.png"
                            sx={{ width: "3.8vw", height: "3.8vw" }}
                          />

                          <div style={{ padding: "0.8vw" }}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontFamily: "Raleway ",
                                fontWeight: 520,
                                fontSize: "1vw",
                              }}
                            >
                              {" "}
                              {rowData.ProductName}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "rgba(248, 75, 14, 1)",
                                fontFamily: "Raleway ",
                                fontWeight: 620,
                                fontSize: "0.8vw",
                              }}
                            >
                              {rowData.UnitPrice} ${" "}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                fontFamily: "Raleway ",
                                fontWeight: 520,
                                fontSize: "0.8vw",
                              }}
                            >
                              Le nombre total: {rowData.totalAmount}{" "}
                            </Typography>
                          </div>
                        </div>
                      </TableCell>
                      {/*section 3 the total price */}
                      <TableCell
                        sx={{
                          borderRight: "0.1px solid grey",
                        }}
                      >
                        <p
                          style={{
                            color: "rgba(248, 75, 14, 1)",
                            fontFamily: "Reboto ",
                            fontWeight: 920,
                            fontSize: "1vw",
                            textAlign: "center",
                          }}
                        >
                          {rowData.totalAmount * rowData.UnitPrice}$
                        </p>
                      </TableCell>
                      {/*section 4 the Export type */}
                      <TableCell
                        sx={{
                          borderRight: "0.1px solid grey",
                        }}
                      >
                        <p
                          style={{
                            color: "rgba(5, 28, 78, 1)",
                            fontFamily: "Raleway ",
                            fontWeight: 920,
                            fontSize: "0.8vw",
                            textAlign: "center",
                          }}
                        >
                          {rowData.Export}
                        </p>
                      </TableCell>
                      {/*section 5 the status about the shipping/ order*/}
                      <TableCell sx={{ borderRight: "0.1px solid grey" }}>
                        <div style={{ padding: "1.5vw", textAlign: "center" }}>
                          <Typography
                            variant="body1"
                            sx={{
                            
                              fontFamily: "Raleway ",
                              fontWeight: 520,
                              fontSize: "0.8vw",
                            }}
                          >
                            {rowData.Status}
                          </Typography>
                        </div>
                      </TableCell>
                      {/*section 6 the action button */}
                      <TableCell
                        sx={{
                          borderRight: "0.1px solid grey",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <div style={{ padding: "2vw" }}>
                            <a
                              style={{
                                textDecoration: "none",
                                display: "inline-block",
                              }}
                            >
                              <Button
                                variant="contained"
                                sx={{
                                  backgroundColor: "rgba(248, 75, 14, 1)",
                                  color: "white",
                                  fontSize: "0.7vw",
                                  width: "6vw",
                                  height: "2vw",
                                }}
                              >
                                Action
                              </Button>
                            </a>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                    {/* Orders Display area ends */}
                  </>
                ))}
            </TableBody>
          </Table>
        </div>
        {/* Pagination area */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "5%",
          }}
        >
          <div>
            <FormControl>
              <Select
                value={rowsPerPage}
                onChange={handleChangeRowsPerPage}
                style={{
                  backgroundColor: "rgba(217, 217, 217, 1)",
                  color: "gray",
                  fontFamily: "Raleway",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  height: "30px",
                }}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Pagination
            count={parseInt(displayedData.length / rowsPerPage + 1)}
            page={page}
            onChange={handleChangePage}
            sx={{
              "& .MuiPaginationItem-root": {
                backgroundColor: "rgba(5, 28, 78, 1)",
                color: "white",
                borderRadius: "5px",
              },
              "& .MuiPaginationItem-page": {
                backgroundColor: "rgba(248, 75, 14, 0.5)",
                color: "white",
                fontFamily: "Raleway",
                fontWeight: "bold",
                borderRadius: "5px",
              },
              "& .Mui-selected": {
                backgroundColor: "rgba(248, 75, 14, 0.8)",
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AllOrders;