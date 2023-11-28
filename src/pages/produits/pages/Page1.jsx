import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  TextField,
  InputLabel,
} from "@mui/material";
import CustomButton from "../../../shared/components/CustomButton";

const categoriesData = {
  // les categories de l'industrie
  Industrie: [
    "Industrie et vente Électroménager – Électrique - Électronique",
    "Industrie de textiles et manufacturière",
    "Industrie de l’automobile et concessionnaire",
    "Industrie de l’automobile Équipement et accessoires",
    "Industrie de camion et accessoires",
    "Industrie de produit cosmétique et hygiène",
    "Industrie des détergents",
    "Industrie du bois",
    "Industrie de pétrochimie",
    "Industrie artisanale",
    "Industrie mécanique et de chaudronnerie",
    "Industrie plastique",
  ],

  // les categories de l'agriculture
  Agriculture: [
    "Équipements pour l'industrie agro-alimentaire",
    "Production et vente agro-alimentaire",
    "Stockage, manutention et transport",
    "Élevage et équipement",
    "Production animale et Aliment",
    "Production végétale",
    "Équipement Emballage et conditionnement",
    "Production et vente de produit d’emballage",
    "Matériel et équipement pour la culture",
  ],

  // les categories de la construction
  Construction: [
    "Usine et machine Industrielle",
    "Matériaux de construction",
    "Fabrication et Transformation",
    "Engin et matériel de chantier",
    "Travaux intérieur et revêtement",
    "Travaux d’extérieur et revêtement",
    "Installation électrique et équipement",
    "Travaux publiques et Hydraulique",
    "Préfabriquer",
    "Bâtiment intelligent",
    "Maitres d’œuvres et maitre d’ouvrage",
  ],

  // les categories de IT solution
  "IT Solution": [
    "Matériel Informatique équipements et accessoires",
    "Communication et réseaux",
    "Infrastructure de centre de données",
    "Logiciel et progiciel",
  ],
};

const subCategoriesData = {
  // les sous categorier de partie industrie

  "Industrie et vente Électroménager – Électrique - Électronique": [
    "Fabrication d’appareils et produits électrique et accessoires",
    "Fabrication d’appareils et produits électroménagères et accessoires",
    "Fabrication d’appareils et produits électronique et accessoires",
    "Fabrication de d’équipement et produit divers",
    "Fabrication de la téléphonie",
    "Fabrication de produit et équipement d’Energie renouvelable",
    "Fabrication de système de sécurité",
    "Fabrication des câbles",
  ],
  "Industrie de textiles et manufacturière": [
    "Article scolaire et Bureautique",
    "Chaussure",
    "Textile",
  ],
  "Industrie de l’automobile et concessionnaire": [
    "Chevrolet",
    "Fiat",
    "Hyundai, Kia",
    "Mercedes",
    "Renault, Peugeot, Dacia, Citroën",
    "Toyota",
    "Volkswagen, Audi, Opel",
  ],
  "Industrie de l’automobile Équipement et accessoires": [
    "Aménagement d’atelier et de magasin",
    "Éclairage et de signalisation",
    "Électriques et électroniques",
    "Équipements Chauffage et climatisation",
    "Équipements de démarrage et d’allumage",
    "Équipements de levage",
    "Équipements de réparation",
    "Équipements et produits d’entretien",
    "Équipements et produits pour carrosserie et Rénovation",
    "Équipements pour contrôle technique",
    "Équipements pour le moteur",
    "Equipment et accessoire divers",
    "Fabrication des pneus",
    "Organe de direction - Suspension et Freinage",
    "Pièces détachées",
    "Pneumatiques et accessoires",
    "Service et commerce",
    "Technologies et équipements pour le contrôle",
  ],
  "Industrie de camion et accessoires": [
    "Fabrication d’équipement divers",
    "Fabrication de accessoires",
    "Fabrication de pneus",
    "Fabrication de remorque et autre équipement",
    "Fabrication des semi-remorques",
  ],
  "Industrie de produit cosmétique et hygiène": [
    "Parfum",
    "Crèmes, émulsions, lotions, gels et huiles",
    "Masques de beauté",
    "Fonds de teint (liquides, pâtes, poudres)",
    "Poudres diverses",
  ],
  "Industrie des détergents": [
    "Anticalcaires",
    "Solvants",
    "Eau de javel",
    "Blanchisseurs et décolorants",
    "Désinfectant",
    "Savon et dérivé",
    "Abrasifs",
  ],
  "Industrie du bois": [
    "Équipement – outillage – Produit",
    "Machines et process",
    "Matière et panneau",
    "Matière première",
    "Meuble et aménagement",
    "Technologies et Automatisation",
  ],
  "Industrie de pétrochimie": [
    "Fabrication de la peinture – vernis et dérivés",
    "Fabrication de produit de nettoyage",
    "Fabrication des batteries",
    "Fabrication des canalisation industrielles",
    "Fabrication des détergents et produits d’entretien",
    "Fabrication des produits d’hygiène Lingettes et autres produits",
    "Fabrication des verres et abrasifs",
    "Fabrication parfum et Cosmétique",
    "Produits pétroliers et dérivés",
    "Recyclage",
    "Traitement des déchets",
    "Transformation de la matière plastique et caoutchouc",
  ],
  "Industrie artisanale": [
    "Bijoux traditionnels",
    "Bois",
    "Cuir",
    "Métal, Cuivre, Argent et divers",
    "Poterie",
    "Textiles",
  ],
  "Industrie mécanique et de chaudronnerie": [
    "Chaudronnerie industrielle",
    "Fabrication de la charpente métallique",
    "Fabrication de la tuyauterie",
    "Fabrication de pipe",
    "Fabrication de produit de fonderie",
    "Fabrication de produit de sidérurgie",
    "Fabrication de réservoirs et citerne",
    "Fabrication de tôles et tubes",
    "Fabrication des produits de boulonnerie",
  ],
  "Industrie plastique": [
    "Fabrication des citernes",
    "Fabrication d’emballage",
    "Fabrication de la tuyauterie",
    "Fabrication de mousse et literie",
  ],

  // les sous categorier de partie Agriculture

  "Équipements pour l'industrie agro-alimentaire": [
    "Biscuit et gaufrettes",
    "Boisson",
    "Céréale",
    "Chocolat",
    "Confiserie",
    "Eau de source",
    "Fruit",
    "Huile d’olive",
    "Huiles grasses et margarines",
    "Lait et produits laitiers",
    "Légume",
    "Pâtes, couscous et dérivé",
    "Plats cuisinés et conserves",
    "Viande, volaille et poisson",
    "Vinaigre et vinaigrette",
    "Équipement divers",
  ],

  "Production et vente agro-alimentaire": [
    "Production de céréale",
    "Production confiserie",
    "Production du vinaigre et vinaigrette",
    "Production des pâtes, couscous et dérivé",
    "Production de chocolat",
    "Production de fruit",
    "Production de l’huile d’olive",
    "Production de biscuit et gaufrettes",
    "Production de légume",
    "Production de l’eau de source",
    "Production de l’huiles grasses et margarines",
    "Production de la boisson",
    "Production de la viande",
    "Production du poisson",
    "Production de la vinaigrette épices et assaisonnements",
    "Production de le plats cuisinés et conserves",
    "Production des dates et dérivés",
    "Production du lait et des produits laitiers",
  ],

  "Stockage, manutention et transport": [
    "Matériel et équipement de stockage",
    "Matériel et équipement pour la manutention",
    "Matériel et équipement pour les chambres froides",
    "Pièces de rechange et accessoires",
    "Transport, logistique",
  ],

  "Élevage et équipement": [
    "Bâtiment d’élevage",
    "Broyeurs",
    "Climatisation, chauffage et ventilation",
    "Équipement divers pour l’abattage",
    "Équipement divers pour la transformation du lait",
    "Équipement pour la pêche et l’aquaculture",
    "Équipement pour le traitement des œufs",
    "Installation et équipement d’élevage divers",
    "Matériaux et équipement d’élevage",
    "Mélangeur",
    "Trémie et doseur",
    "Équipement divers",
  ],

  "Production animale et Aliment": [
    "Aliment de bétail",
    "Alimentation pour poisson",
    "Aliments concentrés",
    "Bovin",
    "Ovins",
    "Poisson",
    "Poules",
    "Poussins",
    "Vaches laitières",
    "Volaille",
  ],

  "Production végétale": [
    "Engrais et produit de protection pour la culture",
    "Production fruit",
    "Production légumes",
    "Production des plantes",
  ],

  "Équipement Emballage et conditionnement": [
    "Équipement pour emballage Bois",
    "Équipement pour emballage Métal",
    "Équipement pour emballage Papier et Carton",
    "Équipement pour emballage Plastique",
    "Équipement pour emballage sous vide et soufflage",
    "Équipement pour emballage Verre",
    "Équipement pour étiquetage",
    "Équipement pour fermer agrafeuse, colleuse et autres",
  ],

  "Production et vente de produit d’emballage": [
    "Agrafeuse, colleuse et autres",
    "Bois",
    "Étiquetage",
    "Métal",
    "Papier et Carton",
    "Plastique",
    "Verre",
  ],

  "Matériel et équipement pour la culture": [
    "Matériel d’ensilage",
    "Matériel d’irrigation et pompe",
    "Matériel de plantation divers",
    "Matériel de traction divers",
    "Matériel de travail du sol",
    "Matériel divers pour la récolte",
  ],

  //les sous categories de la partie construction

  "Usine et machine Industrielle": [
    "Machine de fabrication d’emballage",
    "Machine de fabrication de brique et tuile",
    "Machine de fabrication de carrelage et plainte",
    "Machine de fabrication de Clôture, grillage et divers",
    "Machine de fabrication de mortier, colle et joints",
    "Machine de fabrication de peinture",
    "Machine de fabrication de PVC et aluminium",
    "Machine de fabrication des carreaux et divers",
    "Machine de fabrication du céramique",
    "Machine de transformation du marbre et granite",
  ],
  "Matériaux de construction": [
    "Agrégats",
    "Brique, tuile et céramique",
    "Carrelage et plainte",
    "Ciment et plâtre",
    "Marbre et granite",
  ],
  "Fabrication et Transformation": [
    "Fabrication en acier et divers",
    "Menuiserie de Bois",
    "Menuiserie de l’aluminium et dérivé",
    "Menuiserie de PVC",
    "Menuiserie métallique",
    "Profilés",
    "Vitrerie",
  ],
  "Engin et matériel de chantier": [
    "Central à béton",
    "Emballage et rayonnage",
    "Engins et matériel roulon divers",
    "Équipement",
    "Groupe de soudage",
    "Groupe électrogène",
    "Hygiène et Propreté",
    "Instrument de mesure",
    "Manutention, levage et transport",
    "Outillage bâtiment et travaux publics",
    "Pièce de rechange",
    "Pompe à béton",
    "Protection et Sécurité",
  ],
  "Travaux intérieur et revêtement": [
    "Cloison",
    "Faux plafonds",
    "Meuble et aménagement",
    "Peinture, vernis et enduits",
    "Placo plâtre",
    "Plâtrerie",
    "Plomberie et Pompe à eau",
    "Porte, fenêtres et serrurerie",
    "Revêtement sol, mur et plafond",
    "Sanitaire et salle de bain",
  ],
  "Travaux d’extérieur et revêtement": [
    "Chaudronnerie et Charpente",
    "Coffrage, échafaudage",
    "Étanchéité",
    "Grillages et clôtures métalliques",
    "Isolation thermique",
    "Mortier, colle et joints",
    "Portails, barrières automatiques",
    "Revêtements de façade",
  ],
  "Installation électrique et équipement": [
    "Ascenseurs",
    "Câblerie",
    "Chaudière et chauffage",
    "Climatisation",
    "Éclairage",
    "Électricité",
    "Énergie solaire et dérivé",
    "Escalier mécanique",
    "Ventilation",
  ],
  "Travaux publiques et Hydraulique": [
    "Aménagement urbain",
    "Éclairage",
    "Espace Vert et jardinage",
    "Mobilier urbain",
    "Ouvrage d’art et autoroute",
    "Sondage et Forage",
    "Travaux hydraulique divers",
    "Voirie et réseau divers",
  ],
  Préfabriquer: [
    "Construction modulaire",
    "Panneaux de sandwich",
    "Préfabriquer divers",
  ],
  "Bâtiment intelligent": [
    "Alarme et contrôle d’accès",
    "Automatisme",
    "Domotique",
    "Vidéo surveillance",
  ],
  "Maitres d’œuvres et maitre d’ouvrage": [
    "Bureaux d’études et architecte",
    "Bureaux de contrôle et d’expertise",
    "Entreprise de réalisation",
    "Promoteur Immobilier",
  ],

  //les sous categories de la partie IT solution

  "Matériel Informatique équipements et accessoires": [
    "Accessoires",
    "Composant serveur et périphériques",
    "Composants et périphériques informatiques",
    "Dispositifs d'affichage et audio",
    "Imprimante jet d’encre et laser",
    "Terminaux mobiles",
  ],

  "Communication et réseaux": [
    "Communication et réseau sans fil wifi",
    "Services de réseau et de communication",
    "Systèmes de réseaux – composants et périphériques",
  ],

  "Infrastructure de centre de données": [
    "Data centre",
    "Services informatiques pour centres de données",
    "Systèmes de sécurité physique",
    "Systèmes de stockage et technologies de serveur",
    "Technologies et solutions de centres de données",
  ],

  "Logiciel et progiciel": [
    "ERP – CRM – solutions RH",
    "Gestion de contenu d'entreprise et gestion de documents",
    "Logiciel industriel et logiciel logistique",
    "Logiciels et solutions pour la gestion d'entreprise",
    "Paiement mobile et billetterie mobile",
    "Solutions cloud pour les solutions ERP et RH et commerce",
    "Solutions de saisie de documents",
  ],
};

// ...

const Page1 = (props) => {
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [error, setError] = useState("");

  const handleSectorChange = (event) => {
    const newSelectedSector = event.target.value;
    setSelectedSector(newSelectedSector);
    setSelectedCategory(""); // Reset category selection when changing sector
    setSelectedSubCategory(""); // Reset subcategory selection when changing sector
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory(""); // Reset subcategory selection when changing category
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleTerminerClick = () => {
    if (!productName.trim()) {
      setError("Veuillez entrer le nom du produit.");
    } else {
      console.log("Terminer button clicked!");
      props.handleNext();
      setError("");
    }
  };

  const isCategoryDisabled = selectedSector === null;
  const isSubCategoryDisabled = selectedCategory === "";
  const hasSelectedCategory = selectedCategory !== null;
  const hasSelectedSubCategory = selectedSubCategory !== null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "65%",
          padding: "2%",
          borderRadius: "5px",
          backgroundColor: "#F5F5F5",
          "@media (max-width: 600px)": {
            backgroundColor: "white",
            border: "1px solid #ccc",
          },
          position: "relative",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <FormLabel
            component="legend"
            style={{ color: "#051C4E", fontSize: "1.2rem" }}
          >
            Secteur d'activité:
          </FormLabel>
          <RadioGroup
            row
            value={selectedSector}
            onChange={handleSectorChange}
            sx={{ Color: "#2E55A9", borderRadius: "5px", padding: "8px" }}
          >
            <FormControlLabel
              value="Industrie"
              control={<Radio />}
              label="Industrie"
              size="small"
            />
            <FormControlLabel
              value="Agriculture"
              control={<Radio />}
              label="Agriculture"
              size="small"
            />
            <FormControlLabel
              value="Construction"
              control={<Radio />}
              label="Construction"
              size="small"
            />
            <FormControlLabel
              value="IT Solution"
              control={<Radio />}
              label="IT Solution"
              size="small"
            />
          </RadioGroup>
        </Box>

        <Box>
          <h2 style={{ color: "#051C4E" }}>
            {selectedSector || "Sélectionnez un secteur"}
          </h2>

          <FormControl fullWidth>
            <InputLabel
              htmlFor="category-dropdown"
              style={{ visibility: hasSelectedCategory ? "hidden" : "visible" }}
            >
              Sélectionner une catégorie
            </InputLabel>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              displayEmpty
              id="category-dropdown"
              sx={{ backgroundColor: "white" }}
              disabled={isCategoryDisabled}
            >
              <MenuItem value="" disabled>
                Sélectionner une catégorie
              </MenuItem>
              {isCategoryDisabled
                ? null
                : categoriesData[selectedSector].map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ mt: 2 }}>
          <FormControl fullWidth>
            <InputLabel
              htmlFor="subcategory-dropdown"
              style={{
                visibility: hasSelectedSubCategory ? "hidden" : "visible",
              }}
            >
              Sélectionner une sous-catégorie
            </InputLabel>
            <Select
              value={selectedSubCategory}
              onChange={handleSubCategoryChange}
              displayEmpty
              id="subcategory-dropdown"
              sx={{ backgroundColor: "white" }}
              disabled={isSubCategoryDisabled}
            >
              <MenuItem value="" disabled>
                Sélectionner une sous-catégorie
              </MenuItem>
              {isSubCategoryDisabled
                ? null
                : subCategoriesData[selectedCategory].map((subcategory) => (
                    <MenuItem key={subcategory} value={subcategory}>
                      {subcategory}
                    </MenuItem>
                  ))}
            </Select>
          </FormControl>
        </Box>

        <Box>
          <TextField
            fullWidth
            placeholder="Nom de produit"
            variant="outlined"
            value={productName}
            onChange={handleProductNameChange}
            sx={{ mt: 2, mb: 2, backgroundColor: "white" }}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CustomButton onClick={handleTerminerClick}>Suivant</CustomButton>
        </Box>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </Box>
    </div>
  );
};

export default Page1;
