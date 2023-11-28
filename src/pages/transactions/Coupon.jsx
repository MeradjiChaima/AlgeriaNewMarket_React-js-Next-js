import React from 'react';
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import SvgComponent from './logo';
import { styled } from '@mui/material/styles';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

//style du bouton "utiliser"
const StyledButton = styled(Button)(() => ({
    color: '#F84B0E',
    fontFamily: 'Poppins',
    fontSize: '15px',
    borderRadius: 25,
    width: 80,
    height: 35,
    border: '1.5px solid #F84B0E',
}));


const Coupon = ({
    texte,              //texte de la Reduction
    dateExpiration,     //date et heure d'expiration
    photo,              //photo dans le coupon (peut ne pas y avoir)
    handleOnClick,      //acion du bouton "Utiliser"
    handleRemove        //action du bouton de suppression
}) => {

    // reglage de la taille des composants selon l'ecran (responsive)
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    /******************** */

    const TexteReduction = {
        color: '#051C4EBF',
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        marginRight: 15
    }

    const TexteExpiration = {
        color: '#6A6A6A',
        fontSize: '10px',
        fontWeight: 'bold',
        fontFamily: 'Poppins'
    }

    //**********Manipulation de la date d'expiration***********
    const eventDate = new Date(dateExpiration);

    // Fonction pour formater le composant de temps
    const formatTimeComponent = component => {
        return component < 10 ? `0${component}` : component;
    };

    // Obtenir les composants de date et d'heure
    const year = eventDate.getFullYear();
    const month = formatTimeComponent(eventDate.getMonth() + 1); // Les mois sont indexés à partir de 0
    const day = formatTimeComponent(eventDate.getDate());
    const hours = formatTimeComponent(eventDate.getHours());
    const minutes = formatTimeComponent(eventDate.getMinutes());
    const seconds = formatTimeComponent(eventDate.getSeconds());

    // Date sous la forme: "YYYY-MM-DD  hh:mm:ss"
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    /********************/

    return (
        <Box
            sx={{
                backgroundColor: '#FFD8B1B5',
                borderRadius: 8,
                width: '80%',
                height: '100%',
                paddingLeft: 2,
                paddingRight: 2,
                paddingBottom: 2
            }}>

            {/* bouton de suppression */}
            <button onClick={handleRemove} style={{
                color: 'red',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginLeft: '95%',
            }}>
                <DoDisturbOnIcon />
            </button>

            {/* logo de l'entreprise avec backgroud transparent */}
            <SvgComponent />

            {/* Grille du contenu de la carte */}
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} paddingTop={0} direction={isMobileOrTablet ? 'column' : undefined}>

                < Grid container item xs={7}>
                    <Typography style={TexteReduction}>{texte}</Typography>
                    {photo ? (
                        <>
                            <Typography style={TexteExpiration}>Expire le : {formattedDate}</Typography>
                            {!isMobileOrTablet && (
                                <span style={{ marginTop: 5 }}>
                                    <StyledButton size='small' onClick={handleOnClick}>Utiliser</StyledButton>
                                </span>
                            )}
                        </>
                    ) : (
                        <span style={{ marginTop: 15 }}>
                            <Typography style={TexteExpiration}>Expire le :{formattedDate}</Typography>
                        </span>
                    )}
                </Grid>
                < Grid container item xs={5} justifyContent='center'>

                    {photo ? (
                        <img
                            src={photo}
                        />
                    ) : !isMobileOrTablet && (
                        <StyledButton size='small' onClick={handleOnClick}>Utiliser</StyledButton>
                    )}
                </Grid>
                {isMobileOrTablet && (
                    < Grid container item xs={5} justifyContent='center'>
                        <StyledButton size='small' onClick={handleOnClick}>Utiliser</StyledButton>
                    </Grid>
                )}
            </Grid>
        </Box >
    )
}

export default Coupon