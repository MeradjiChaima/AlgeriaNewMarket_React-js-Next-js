import React from "react";
import { Table, TableHead, TableRow, TableCell, Button } from "@mui/material";


//les titre de premier ligne
const firstRowTitles = [
  "Numéro de commande",
  "Numéro de dossier",
  "Date de la demande",
  "Montant de remboursement",
  "Statut",
];
//les data des autres ligne 
const secondRowData = [
  "45d534ebc7",
  "16599886",
  "7/19/2023",
  "Waiting For Payment Confirmation",
  "Action",
];


const OrderBox2 = () => {
  return (
    <Table style={{ background: "white", width: "100%" }}>
      <TableHead>
        <TableRow
          sx={{
            background: "rgba(255,255,255,1)",
            border: "1px solid #ccc",
            boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          {firstRowTitles.map((column, index) => (
            <TableCell
              key={index}
              sx={{
                textAlign: "center",
                fontFamily: "Raleway",
                fontWeight: "bold",
                fontSize: "17px",
                borderRight: "0.1px solid darkblue",
                color: "#051C4E",
              }}
            >
              {column}
            </TableCell>
          ))}
        </TableRow>
        <br/>
        <br/>
        <TableRow
          sx={{
            background: "rgba(255,255,255,1)",
            border: "1px solid #ccc",
            boxShadow: "0px 4px 21px 0px #00000040",
          }}
        >
          {secondRowData.map((value, index) => (
            <TableCell
              key={index}
              sx={{
                textAlign: "center",
                fontFamily: "Raleway",
                fontWeight: index === 0 || index === 1 || index === 2 ? "bold" : "normal",
                fontSize: "17px",
                borderRight: "0.1px solid darkblue",
                color: index === 0 ? "black" : index === 1 || index === 2 ? "#F84B0E" : "black",
                height: '50px',
                backgroundColor: '#FEFBF8',
              }}
            >
              {index === 4 ? (
                <Button variant="contained" style={{ backgroundColor: "#F84B0E", color: "white" }}>
                  {value}
                </Button>
              ) : (
                value
              )}
            </TableCell>
          ))}
        </TableRow>

      <br/>
        <TableRow
          sx={{
            background: "rgba(255,255,255,1)",
            border: "1px solid #ccc",
            boxShadow: "0px 4px 21px 0px #00000040",
          }}
        >
          {secondRowData.map((value, index) => (
            <TableCell
              key={index}
              sx={{
                textAlign: "center",
                fontFamily: "Raleway",
                fontWeight: index === 0 || index === 1 || index === 2 ? "bold" : "normal",
                fontSize: "17px",
                borderRight: "0.1px solid darkblue",
                color: index === 0 ? "black" : index === 1 || index === 2 ? "#F84B0E" : "black",
                height: '50px',
                backgroundColor: '#FEFBF8',
              }}
            >
              {index === 4 ? (
                <Button variant="contained" style={{ backgroundColor: "#F84B0E", color: "white" }}>
                  {value}
                </Button>
              ) : (
                value
              )}
            </TableCell>
          ))}
        </TableRow>
        <br/>
        <TableRow
          sx={{
            background: "rgba(255,255,255,1)",
            border: "1px solid #ccc",
            boxShadow: "0px 4px 21px 0px #00000040",
          }}
        >
          {secondRowData.map((value, index) => (
            <TableCell
              key={index}
              sx={{
                textAlign: "center",
                fontFamily: "Raleway",
                fontWeight: index === 0 || index === 1 || index === 2 ? "bold" : "normal",
                fontSize: "17px",
                borderRight: "0.1px solid darkblue",
                color: index === 0 ? "black" : index === 1 || index === 2 ? "#F84B0E" : "black",
                height: '50px',
                backgroundColor: '#FEFBF8',
              }}
            >
              {index === 4 ? (
                <Button variant="contained" style={{ backgroundColor: "#F84B0E", color: "white" }}>
                  {value}
                </Button>
              ) : (
                value
              )}
            </TableCell>
          ))}
        </TableRow>
        <br/>
        <TableRow
          sx={{
            background: "rgba(255,255,255,1)",
            border: "1px solid #ccc",
            boxShadow: "0px 4px 21px 0px #00000040",
          }}
        >
          {secondRowData.map((value, index) => (
            <TableCell
              key={index}
              sx={{
                textAlign: "center",
                fontFamily: "Raleway",
                fontWeight: index === 0 || index === 1 || index === 2 ? "bold" : "normal",
                fontSize: "17px",
                borderRight: "0.1px solid darkblue",
                color: index === 0 ? "black" : index === 1 || index === 2 ? "#F84B0E" : "black",
                height: '50px',
                backgroundColor: '#FEFBF8',
              }}
            >
              {index === 4 ? (
                <Button variant="contained" style={{ backgroundColor: "#F84B0E", color: "white" }}>
                  {value}
                </Button>
              ) : (
                value
              )}
            </TableCell>
          ))}
        </TableRow>
        <br/>
        <TableRow
          sx={{
            background: "rgba(255,255,255,1)",
            border: "1px solid #ccc",
            boxShadow: "0px 4px 21px 0px #00000040",
          }}
        >
          {secondRowData.map((value, index) => (
            <TableCell
              key={index}
              sx={{
                textAlign: "center",
                fontFamily: "Raleway",
                fontWeight: index === 0 || index === 1 || index === 2 ? "bold" : "normal",
                fontSize: "17px",
                borderRight: "0.1px solid darkblue",
                color: index === 0 ? "black" : index === 1 || index === 2 ? "#F84B0E" : "black",
                height: '50px',
                backgroundColor: '#FEFBF8',
              }}
            >
              {index === 4 ? (
                <Button variant="contained" style={{ backgroundColor: "#F84B0E", color: "white" }}>
                  {value}
                </Button>
              ) : (
                value
              )}
            </TableCell>
          ))}
        </TableRow>
        <br/>
        <TableRow
          sx={{
            background: "rgba(255,255,255,1)",
            border: "1px solid #ccc",
            boxShadow: "0px 4px 21px 0px #00000040",
          }}
        >
          {secondRowData.map((value, index) => (
            <TableCell
              key={index}
              sx={{
                textAlign: "center",
                fontFamily: "Raleway",
                fontWeight: index === 0 || index === 1 || index === 2 ? "bold" : "normal",
                fontSize: "17px",
                borderRight: "0.1px solid darkblue",
                color: index === 0 ? "black" : index === 1 || index === 2 ? "#F84B0E" : "black",
                height: '50px',
                backgroundColor: '#FEFBF8',
              }}
            >
              {index === 4 ? (
                <Button variant="contained" style={{ backgroundColor: "#F84B0E", color: "white" }}>
                  {value}
                </Button>
              ) : (
                value
              )}
            </TableCell>
          ))}
        </TableRow>
        <br/>
        <TableRow
          sx={{
            background: "rgba(255,255,255,1)",
            border: "1px solid #ccc",
            boxShadow: "0px 4px 21px 0px #00000040",
          }}
        >
          {secondRowData.map((value, index) => (
            <TableCell
              key={index}
              sx={{
                textAlign: "center",
                fontFamily: "Raleway",
                fontWeight: index === 0 || index === 1 || index === 2 ? "bold" : "normal",
                fontSize: "17px",
                borderRight: "0.1px solid darkblue",
                color: index === 0 ? "black" : index === 1 || index === 2 ? "#F84B0E" : "black",
                height: '50px',
                backgroundColor: '#FEFBF8',
              }}
            >
              {index === 4 ? (
                <Button variant="contained" style={{ backgroundColor: "#F84B0E", color: "white" }}>
                  {value}
                </Button>
              ) : (
                value
              )}
            </TableCell>
          ))}
        </TableRow>
        <br/>
        <TableRow
          sx={{
            background: "rgba(255,255,255,1)",
            border: "1px solid #ccc",
            boxShadow: "0px 4px 21px 0px #00000040",
          }}
        >
          {secondRowData.map((value, index) => (
            <TableCell
              key={index}
              sx={{
                textAlign: "center",
                fontFamily: "Raleway",
                fontWeight: index === 0 || index === 1 || index === 2 ? "bold" : "normal",
                fontSize: "17px",
                borderRight: "0.1px solid darkblue",
                color: index === 0 ? "black" : index === 1 || index === 2 ? "#F84B0E" : "black",
                height: '50px',
                backgroundColor: '#FEFBF8',
              }}
            >
              {index === 4 ? (
                <Button variant="contained" style={{ backgroundColor: "#F84B0E", color: "white" }}>
                  {value}
                </Button>
              ) : (
                value
              )}
            </TableCell>
          ))}
        </TableRow>


        </TableHead>  
      
    </Table>
  );
};

export default OrderBox2;
