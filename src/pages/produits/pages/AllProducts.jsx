import { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";

import image from "/diamond.png";
import CustomButton from "../../../shared/components/CustomButton";
const data = [
  {
    id: 1,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 2,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 3,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 3,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 4,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 6,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 7,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 8,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 9,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 10,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 11,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 12,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 13,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 14,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 15,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 16,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 17,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
  {
    id: 18,
    name: "Volkswagen Golf 8",
    img: image,
    secteur: "Industrie",
    categorie: "Automobile",
    description:
      "Lorem ipsum dolor sit amet. 33 magni recusandae At  consectetur nihil est harum atque ex porro sequi sit ",
    Prix: "90,000 - 120,000",
    Statut: "Approuvé",
    vente: "10",
  },
];

const columns = [
  "Produit",
  "Secteur",
  "Catégorie",
  "Description",
  "Prix",
  "Statut",
  "Nombre de vente",
  "Action",
];

const AllProducts = (props) => {
  //pour la pagination et le choix de nombre de ligne par page
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  //////////////////////////////////////////////////////////

  //Pour limiter la taille de description dans la table
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRowExpansion = (rowId) => {
    if (expandedRow === rowId) {
      setExpandedRow(null);
    } else {
      setExpandedRow(rowId);
    }
  };

  //////////////////////////////////////////////////////////
  return (
    <>
      <div
        style={{
          padding: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "40px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              fontFamily: "Poppins",
              fontWeight: "bolder",
              color: "rgba(0, 0, 0, 1)",
              fontSize: "3vw",
              margin: "0", // Remove default margin to prevent unwanted spacing
            }}
          >
            Liste de produits
          </p>
          <CustomButton
            style={{ fontSize: "1vw", marginLeft: "62%" }}
            onClick={() => props.setListerProduits(!props.ListerProduits)}
            // Add this onClick handler
          >
            Ajouter
          </CustomButton>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "2%",
            gap: "40px",
            background: "rgba(217, 217, 217, 1)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5%",
              width: "100%",
            }}
          >
            <p
              style={{
                color: "rgba(5, 28, 78, 1)",
                fontFamily: "Poppins",
                fontSize: "1vw",
                fontWeight: "bold",
              }}
            >
              Trier par statut marketing:
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5%",
                color: "rgba(0, 0, 0, 1)",
                fontFamily: "Poppins",
                fontSize: "1vw",
                width: "70%",
              }}
            >
              <p>Tous({data.length})</p>
              <p>Approuvé(0)</p>
              <p>Modification requise(0)</p>
              <p>En attente d'approbation(0)</p>
              <p>Brouillons(0)</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2%",
            }}
          >
            <input
              placeholder="Nom du produit"
              style={{
                outline: "none",
                padding: "2%",
                borderRadius: "5px",
                border: "0.09rem solid rgba(46, 85, 169, 0.75)",
                height: "5px",
                width: "28%",
                fontFamily: "Poppins",
                fontSize: "1vw",
                color: "rgba(0, 0, 0, 1)",
                textAlign: "center",
              }}
            />
            <input
              placeholder="Modèle du produit"
              style={{
                outline: "none",
                padding: "2%",
                borderRadius: "5px",
                border: "0.09rem solid rgba(46, 85, 169, 0.75)",
                height: "5px",
                width: "32%",
                fontFamily: "Poppins",
                fontSize: "1vw",
                color: "rgba(0, 0, 0, 1)",
                textAlign: "center",
              }}
            />
            <CustomButton
              style={{
                background: "white",
                color: "rgba(0, 0, 0, 1)",
                border: "0.09rem solid rgba(46, 85, 169, 0.75)",
                width: "10%",
                fontSize: "1vw",
              }}
            >
              All
            </CustomButton>
            <CustomButton style={{ width: "10%", fontSize: "1vw" }}>
              Rechercher
            </CustomButton>
            <CustomButton style={{ width: "10%", fontSize: "1vw" }}>
              Annuler
            </CustomButton>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Table style={{ background: "white", width: "100%" }}>
            <TableHead>
              <TableRow sx={{ background: "rgba(217, 217, 217, 1)" }}>
                {columns.map((column) => (
                  <TableCell
                    sx={{
                      fontFamily: "Open sans",
                      textAlign: "center",
                      fontSize: "1.3vw",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                    key={column}
                  >
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(startIndex, endIndex).map((rowData, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:hover": {
                      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
                      transition: "background 0.3s ease, box-shadow 0.3s ease",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={`${rowData.img}`}
                      style={{
                        width: "20vw",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                    />
                    <a
                      style={{
                        color: "rgba(5, 28, 78, 1)",
                        fontFamily: "Poppins",
                        fontSize: "1vw",
                        fontWeight: "bold",
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                    >
                      {rowData.name}
                    </a>
                  </TableCell>

                  <TableCell>
                    <p
                      style={{
                        color: "rgba(5, 28, 78, 1)",
                        fontFamily: "Poppins",
                        fontSize: "1.3vw",
                        fontWeight: "bold",
                      }}
                    >
                      {rowData.secteur}
                    </p>
                  </TableCell>

                  <TableCell>
                    <p
                      style={{
                        color: "rgba(0, 0, 0, 1)",
                        fontFamily: "Poppins",
                        fontSize: "1vw",
                        fontWeight: "bold",
                      }}
                    >
                      {rowData.categorie}
                    </p>
                  </TableCell>

                  <TableCell
                    sw={{
                      fontFamily: "Poppins",
                      fontSize: "0.8vw",
                      color: "rgba(0 0 0 1)",
                    }}
                  >
                    {expandedRow === rowData.id ? (
                      rowData.description
                    ) : (
                      <div>
                        {rowData.description.length > 50 ? (
                          <div>
                            {rowData.description.substring(0, 50)}
                            <span
                              style={{
                                color: "black",
                                cursor: "pointer",
                                fontSize: "1vw",
                                fontWeight: "bold",
                              }}
                              onClick={() => toggleRowExpansion(rowData.id)}
                            >
                              ...
                            </span>
                          </div>
                        ) : (
                          rowData.description
                        )}
                      </div>
                    )}
                  </TableCell>

                  <TableCell>
                    <p
                      style={{
                        color: "rgba(5, 28, 78, 1)",
                        fontFamily: "Poppins",
                        fontSize: "0.9vw",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {rowData.Prix}$
                    </p>
                  </TableCell>

                  <TableCell>
                    <p
                      style={{
                        color: "rgba(5, 28, 78, 1)",
                        fontFamily: "Poppins",
                        fontSize: "0.9cw",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {rowData.Statut}
                    </p>
                  </TableCell>

                  <TableCell>
                    <p
                      style={{
                        color: "rgba(5, 28, 78, 1)",
                        fontFamily: "Poppins",
                        fontSize: "0.9vw",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {rowData.vente}
                    </p>
                  </TableCell>

                  <TableCell>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <CustomButton
                        style={{ width: "100%", fontSize: "0.9vw" }}
                      >
                        Modifier
                      </CustomButton>
                      <CustomButton
                        style={{
                          background: "rgba(255, 0, 0, 0.64)",
                          fontSize: "0.9vw",
                        }}
                      >
                        Supprimer
                      </CustomButton>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

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
                  fontFamily: "Poppins",
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
            count={parseInt(data.length / rowsPerPage + 1)}
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
                fontFamily: "Poppins",
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

export default AllProducts;
