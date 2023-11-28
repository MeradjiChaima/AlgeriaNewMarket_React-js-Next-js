import { Box, FormControl, TextField, Typography } from "@mui/material"
import ImageUploader from "../../../shared/components/ImageUploader"
import { useState } from "react";



function page3() {
    const [charactersCount, setCharactersCount] = useState(2000);
    const importimages = (images) => {
        console.log(images)
    }

    const handleCharactersCount = (e) => {
        setCharactersCount(2000 - e.target.value.length)
    }
    const limit = 4
  return (
    <>
        <div className="py-6">

            <Box display={"flex"} alignItems={"flex-start"}  py={"10px"} px={"5px"}>
                <Typography variant="h6" width={"20%"} style={{color: "#051C4E", fontWeight: "500", fontSize: "16px"}}>
                    Photo du produit : 
                </Typography>
                <Box>
                    <Box display={"flex"} alignItems={"center"}  gap={"40px"}>
                        <Typography variant="h6"  fontWeight={"400"} px={"40px"} py={"2px"} bgcolor={"#D9D9D9"} borderRadius={"7px"} style={{color: "#000",cursor: "pointer", fontSize: "15px"}}>
                            Parcourir
                        </Typography>
                        <Typography variant="h6"  fontWeight={"300"} style={{color: "#000", fontSize: "15px", cursor: "pointer"}}>
                            Select From Photo Bank
                        </Typography>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"20px"} py={"15px"}>
                        <p className="max-w-6xl text-[#000] font-normal">La taille du fichier image doit être inférieure à 5 Mo. Formats pris en charge : Jpeg,Jpg,Png , La taille d'image recommandée est supérieure à 640px * 640px ,Les images doivent être claires et faciles à visualiser en un coup d'œil pour les acheteurs</p>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"50px"}>
                            <Typography variant="h6"  fontWeight={"300"} style={{color: "#000", fontSize: "15px", cursor: "pointer"}}>images</Typography>
                            <Box>
                                upgrade
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box display={"flex"} alignItems={"flex-start"}  py={"10px"} px={"5px"}>
                <Typography variant="h6" width={"20%"} style={{color: "#051C4E", fontWeight: "500", fontSize: "16px"}}>
                    Video du produit : 
                </Typography>
                <Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"20px"} py={"15px"}>
                        <p className="max-w-6xl text-[#000] font-normal">
                            La durée de la vidéo ne peut pas dépasser 45 secondes et la taille du fichier vidéo ne peut pas dépasser 100 Mo. La vidéo sera affichée dans la première position du carrousel d'images.
                            La longueur de la vidéo détaillée ne peut pas dépasser 10 minutes et la taille du fichier vidéo ne peut pas dépasser 500 Mo. La vidéo sera affichée en haut de la description du produit.
                            Pour encourager les fournisseurs à télécharger des vidéos de haute qualité et des vidéos détaillées, le stockage disponible pour les vidéos a été augmenté de 1 Go à 3 Go
                        </p>
                        <Box display={"flex"} alignItems={"center"}  gap={"50px"} py={"20px"}>
                            <Box width={"30%"}>
                                <Typography variant="h6" fontSize={"0.9375rem"} flexWrap={"500"} color={"#008"} >
                                    Choisissez l'image vidéo
                                </Typography>
                                <ImageUploader importimages={importimages} limit={limit} />
                            </Box>
                            <Box width={"30%"}>
                                <Typography variant="h6" fontSize={"0.9375rem"} flexWrap={"500"} color={"#008"} >
                                    Choisissez la vidéo détaillée
                                </Typography>
                                <ImageUploader importimages={importimages} limit={limit}/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        
            <Box display={"flex"} alignItems={"flex-start"}  py={"10px"} px={"5px"}>
                <Typography variant="h6" width={"20%"} style={{color: "#051C4E", fontWeight: "500", fontSize: "16px"}}>
                    Détail du produit :
                </Typography>
                <Box width={"100%"} px={"20px"}>
                    <FormControl className="w-full" >
                        <TextField
                            helperText={`Restant : ${charactersCount} char`}
                            id="demo-helper-text-misaligned"
                            onChange={handleCharactersCount}
                            width={"100%"}
                            className="w-[90%] font-light"
                        />
                        <p className="text-[#000] opacity-40 text-[0.8125rem] font-semibold pl-4 py-2">
                            taille maximale 30Mb
                        </p>
                    </FormControl>
                </Box>
            </Box>
         
        </div>
    </>
  )
}

export default page3
