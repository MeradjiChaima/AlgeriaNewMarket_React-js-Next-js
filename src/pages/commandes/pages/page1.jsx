import React, { useState } from "react";
import Dropdown from "../components/CustomDropdown"; // Assurez-vous que le chemin d'accès est correct

function Page1() {
  const [etatDeCommandeSelectedOption, setEtatDeCommandeSelectedOption] =
    useState("");
  const [compteSelectedOption, setCompteSelectedOption] = useState("");
  const [paysRegionSelectedOption, setPaysRegionSelectedOption] = useState("");
  const [dateCreationSelectedOption, setDateCreationSelectedOption] =
    useState("");
  const [quantiteSelectedOption, setQuantiteSelectedOption] = useState("");
  const [paysAchteurSelectedOption, setPaysAchteurSelectedOption] =
    useState("");
  const [ridegeparSelectedOption, setRidegeparSelectedOption] = useState("");
  const [typeCommandeSelectedOption, setTypeCommandeSelectedOption] =
    useState("");
  const [sourceActiviteSelectedOption, setSourceActiviteSelectedOption] =
    useState("");
  const [methodeLivraisonSelectedOption, setMethodeLivraisonSelectedOption] =
    useState("");
  const [typeExportationSelectedOption, setTypeExportationSelectedOption] =
    useState("");
  const [deviseSelectedOption, setDeviseSelectedOption] = useState("");
  const [promotionSelectedOption, setPromotionSelectedOption] = useState("");
  const [showLessConditions, setShowLessConditions] = useState(true);

  // Function to reset all selected options to their default state
  const handleReset = () => {
    setEtatDeCommandeSelectedOption("");
    setCompteSelectedOption("");
    setPaysRegionSelectedOption("");
    setDateCreationSelectedOption("");
    setQuantiteSelectedOption("");
    setPaysAchteurSelectedOption("");
    setRidegeparSelectedOption("");
    setTypeCommandeSelectedOption("");
    setSourceActiviteSelectedOption("");
    setMethodeLivraisonSelectedOption("");
    setTypeExportationSelectedOption("");
    setDeviseSelectedOption("");
    setPromotionSelectedOption("");
  };

  const handleShowLessConditions = () => {
    setShowLessConditions(!showLessConditions);
  };

  const etatDeCommandeOptions = [
    { label: "Done", value: "Done" },
    {
      label: "Waiting for Payment Confirmation",
      value: "Waiting for Payment Confirmation",
    },
    // ... Autres options pour 'Etat de commande'
  ];

  const compteOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    // ... Autres options pour 'Compte'
  ];

  const paysRegionOPtion = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    // ... Autres options pour 'Compte'
  ];
  const dateCreationOption = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    // ... Autres options pour 'Compte'
  ];
  const quantiteOption = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    // ... Autres options pour 'Compte'
  ];
  const paysachteurOption = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    // ... Autres options pour 'Compte'
  ];
  const ridegeparOption = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    // ... Autres options pour 'Compte'
  ];
  const typecommandeOption = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    // ... Autres options pour 'Compte'
  ];
  const sourceactiviteOption = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    // ... Autres options pour 'Compte'
  ];
  const methodelivraisonOption = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    // ... Autres options pour 'Compte'
  ];
  const typeexportationOption = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    // ... Autres options pour 'Compte'
  ];
  const deviseOption = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    // ... Autres options pour 'Compte'
  ];

  const promotionOption = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    // ... Autres options pour 'Compte'
  ];

  // ... Définir les autres options pour les autres dropdowns

  const styles = {
    container: {
      backgroundColor: "#FFFFF4",
      padding: "0.2rem",
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
      borderRadius: "3px",
      width: "100%", // Set the container width to 100%
      maxWidth: "2400px", // Add a maximum width for larger screens
      margin: "0 auto", // Center the container horizontally
    },
  };

  return (
    <div className="page1">
      <div style={styles.container}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              marginTop: "2rem",
              marginLeft: "4rem",
              marginRight: "2rem",
              justifyContent: "space-around",
            }}
          >
            <div>
              <label
                style={{
                  textAlign: "right",
                  marginRight: "1rem",
                  marginLeft: "4.5rem",
                  color: "#051C4E",
                }}
              >
                Etat de Commande :
              </label>
              <Dropdown
                label="selectioné"
                options={etatDeCommandeOptions}
                value={etatDeCommandeSelectedOption}
                onChange={(event) =>
                  setEtatDeCommandeSelectedOption(event.target.value)
                }
              />
            </div>
            <div>
              <label
                style={{
                  width: "200px",
                  textAlign: "right",
                  marginLeft: "9rem",
                  marginRight: "1rem",
                  color: "#051C4E",
                }}
              >
                Compte :
              </label>

              <Dropdown
                label="selectioné"
                options={compteOptions}
                value={compteSelectedOption}
                onChange={(event) =>
                  setCompteSelectedOption(event.target.value)
                }
              />
            </div>
            <div>
              <label
                style={{
                  width: "200px",
                  textAlign: "right",
                  marginLeft: "8rem",
                  marginRight: "1rem",
                  color: "#051C4E",
                }}
              >
                Pays/Région :
              </label>
              <Dropdown
                label="selectioné"
                options={paysRegionOPtion}
                value={paysRegionSelectedOption}
                onChange={(event) =>
                  setPaysRegionSelectedOption(event.target.value)
                }
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              marginTop: "1rem",
              marginLeft: "4rem",
              justifyContent: "space-around",
            }}
          >
            <div style={{ marginLeft: "1.1rem" }}>
              <label
                style={{
                  width: "200px",
                  textAlign: "right",
                  marginLeft: "2.2rem",
                  marginRight: "1rem",
                  color: "#051C4E",
                }}
              >
                Date de Création :
              </label>
              <Dropdown
                label="selectioné"
                options={dateCreationOption}
                value={dateCreationSelectedOption}
                onChange={(event) =>
                  setDateCreationSelectedOption(event.target.value)
                }
              />
            </div>
            <div>
              <label
                style={{
                  width: "200px",
                  textAlign: "right",
                  marginLeft: "4.2rem",
                  marginRight: "1rem",
                  color: "#051C4E",
                }}
              >
                Quantité :
              </label>

              <Dropdown
                label="selectioné"
                options={quantiteOption}
                value={quantiteSelectedOption}
                onChange={(event) =>
                  setQuantiteSelectedOption(event.target.value)
                }
              />
            </div>
            <div>
              <label
                style={{
                  width: "200px",
                  textAlign: "right",
                  marginLeft: "2rem",
                  marginRight: "1rem",
                  color: "#051C4E",
                }}
              >
                Pays d'achteur :
              </label>
              <Dropdown
                label="selectioné"
                options={paysachteurOption}
                value={paysAchteurSelectedOption}
                onChange={(event) =>
                  setPaysAchteurSelectedOption(event.target.value)
                }
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              marginTop: "1rem",
              marginLeft: "4rem",
              justifyContent: "space-around",
            }}
          >
            <div>
              <label
                style={{
                  width: "200px",
                  textAlign: "right",
                  marginLeft: "6.3rem",
                  marginRight: "1rem",
                  color: "#051C4E",
                }}
              >
                Rédigé par :
              </label>
              <Dropdown
                label="selectioné"
                options={ridegeparOption}
                value={ridegeparSelectedOption}
                onChange={(event) =>
                  setRidegeparSelectedOption(event.target.value)
                }
              />
            </div>
            <div>
              <label
                style={{
                  width: "200px",
                  textAlign: "right",
                  marginLeft: "0.1rem",
                  marginRight: "1rem",
                  color: "#051C4E",
                }}
              >
                Type de commande :
              </label>
              <Dropdown
                label="selectioné"
                options={typecommandeOption}
                value={typeCommandeSelectedOption}
                onChange={(event) =>
                  setTypeCommandeSelectedOption(event.target.value)
                }
              />
            </div>
            <div>
              <label
                style={{
                  width: "200px",
                  textAlign: "right",
                  marginLeft: "2rem",
                  marginRight: "1rem",
                  color: "#051C4E",
                }}
              >
                Source d'activité :
              </label>
              <Dropdown
                label="selectioné"
                options={sourceactiviteOption}
                value={sourceActiviteSelectedOption}
                onChange={(event) =>
                  setSourceActiviteSelectedOption(event.target.value)
                }
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              marginTop: "1rem",
              marginLeft: "4rem",
              justifyContent: "space-around",
            }}
          >
            <div>
              <label
                style={{
                  width: "200px",
                  textAlign: "right",
                  marginLeft: "1.2rem",
                  marginRight: "1rem",
                  color: "#051C4E",
                }}
              >
                Méthode de Livraison :
              </label>
              <Dropdown
                label="selectioné"
                options={methodelivraisonOption}
                value={methodeLivraisonSelectedOption}
                onChange={(event) =>
                  setMethodeLivraisonSelectedOption(event.target.value)
                }
              />
            </div>
            <div>
              <label
                style={{
                  width: "200px",
                  textAlign: "right",
                  //marginLeft : '0.2rem',
                  marginRight: "1rem",
                  color: "#051C4E",
                }}
              >
                Type d'exportation :
              </label>
              <Dropdown
                label="selectioné"
                options={typeexportationOption}
                value={typeExportationSelectedOption}
                onChange={(event) =>
                  setTypeExportationSelectedOption(event.target.value)
                }
              />
            </div>
            <div>
              <label
                style={{
                  width: "200px",
                  textAlign: "right",
                  marginLeft: "5.5rem",
                  marginRight: "1rem",
                  color: "#051C4E",
                }}
              >
                Devise :
              </label>
              <Dropdown
                label="selectioné"
                options={deviseOption}
                value={deviseSelectedOption}
                onChange={(event) =>
                  setDeviseSelectedOption(event.target.value)
                }
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              marginTop: "1rem",
              marginLeft: "4rem",
            }}
          >
            <div>
              <label
                style={{
                  width: "200px",
                  textAlign: "right",
                  marginLeft: "19.1rem",
                  marginRight: "1rem",
                  color: "#051C4E",
                }}
              >
                Promotion :
              </label>

              <Dropdown
                label="selectioné"
                options={promotionOption}
                value={promotionSelectedOption}
                onChange={(event) =>
                  setPromotionSelectedOption(event.target.value)
                }
              />
            </div>
          </div>
          <div styles={{ marginLeft: "20rem", marginRight: "20rem" }}>
            <span
              style={{
                color: "#F84B0E", // Change the text color
                textDecoration: "underline",
                cursor: "pointer",
                borderRadius: "20px",
                margin: "0.5rem",
                fontSize: "14px", // Adjust the font size
                marginLeft: "7rem",
                marginRight: "3rem",
              }}
              onClick={handleShowLessConditions}
            >
              {showLessConditions
                ? "Show Less Conditions"
                : "Show More Conditions"}
            </span>

            <button
              variant="contained"
              color="orange" // Adjust the color to your desired shade of orange
              style={{
                backgroundColor: "#F84B0E",
                color: "white",
                border: "1px solid white",
                borderRadius: "12px", // Rounded corners
                padding: "7px 35px", // Default padding for normal screens
                margin: "5px",
                cursor: "pointer",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)", // Box shadow
                fontSize: "16px",
              }}
              onClick={handleReset}
            >
              {" "}
              rénitialiser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
