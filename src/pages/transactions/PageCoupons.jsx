import React, { useState, useEffect } from 'react';
import { Paper, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Coupon from './Coupon';
import photoo from "/password.png";

const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
    color: '#051C4E',
    fontFamily: 'Roboto',
    fontSize: '15px',
    textDecoration: 'none',
    '&.Mui-selected': {
        textDecoration: 'none',
        color: '#F84B0E',
    },

}));

const StyledBottomNavigation = styled(BottomNavigation)({
    display: 'flex',
    gap: '3%',
});

const PageCoupons = () => {

    // reglage de la taille des composants selon l'ecran (responsive)
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const styledTitle = {
        color: '#051C4E',
        fontFamily: 'Raleway',
        fontWeight: 'bold',
        fontSize: '30px',
    }

    const styledSecondTitle = {
        color: '#051C4E',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: '18px',
        margin: 20
    }

    // *********Control des parties de la barre de navigation***********
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    /****************************** */


    // cette partie peut etre changer plus tard pour regler le stockage
    const [dataMaps, setDataMaps] = useState([
        //Coupons de la partie "Actifs"
        [
            // Premier Coupon
            {
                id: 1,
                Reduction: 'Réduction de 10$ pour les produits > 500$',
                dateExpiration: '2023-07-31T15:00:00',   // test d'un coupon avec une date expiree 
                photo: ''
            },

            // deuxieme Coupon
            {
                id: 2,
                Reduction: 'Réduction de 100$ ',
                dateExpiration: '2023-08-31T15:00:00',
                photo: photoo
            },

            //informations d'autres coupons...
        ],

        //Coupons de la partie "Déjà utilisé"
        [],

        //Coupons de la partie "Expiré "
        [],
    ]);


    //control du bouton "Utiliser" (deplacer le coupon vers la partie "Deja utilises")
    const handleClickUtilise = (couponId) => {
        const couponToMoveIndex = dataMaps[0].findIndex(coupon => coupon.id === couponId);
        if (couponToMoveIndex !== -1) {
            const couponToMove = dataMaps[0].splice(couponToMoveIndex, 1)[0];
            dataMaps[1].push(couponToMove);
            setDataMaps([...dataMaps]);
        }
    }

    //Control du bouton de suppression du coupon
    const handleClickSup = (elementIndex, couponId) => {
        const updatedDataMaps = [...dataMaps];
        const couponIndex = updatedDataMaps[elementIndex].findIndex(coupon => coupon.id === couponId);

        if (couponIndex !== -1) {
            updatedDataMaps[elementIndex].splice(couponIndex, 1);
            setDataMaps(updatedDataMaps);
        }
    }


    /****************Control de l'expiration d'un coupon *****************/
    //verification date d'expiration
    useEffect(() => {
        // Exécuter la vérification toutes les 1 minute (60000 ms)
        const interval = setInterval(() => {
            checkAndMoveExpiredEvents();
        }, 60000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const checkAndMoveExpiredEvents = () => {
        const now = new Date();

        // Filtrer les événements expirés
        const expiredEvents = dataMaps[0].filter(event => {
            const eventDateTime = new Date(event.dateExpiration);
            return eventDateTime <= now;
        });

        if (expiredEvents.length > 0) {
            const updatedDataMaps = [...dataMaps];
            updatedDataMaps[2] = updatedDataMaps[2].concat(expiredEvents);
            updatedDataMaps[0] = updatedDataMaps[0].filter(event => !expiredEvents.includes(event));
            setDataMaps(updatedDataMaps);
        }
    };
    /********************************************* */

    return (
        <div style={{ padding: '2%' }}>
            {/* Titre exterieur */}
            <Typography style={styledTitle}>Mes coupons</Typography>

            {/* box d'affichage des coupons */}
            <Paper
                elevation={2}
                sx={{
                    marginTop: 3,
                    marginLeft: isMobileOrTablet ? undefined : '10%',
                    padding: isMobile ? 2 : 4,
                    flexGrow: 1,
                    width: isMobile ? '100%' : isMobileOrTablet ? '90%' : '80%',
                    borderRadius: 5,
                    alignItems: 'flex-start'
                }}
            >
                {/* Barre de navigation */}
                <ThemeProvider theme={createTheme()}>
                    <StyledBottomNavigation
                        value={value}
                        onChange={handleChange}
                        showLabels
                        sx={{
                            justifyContent: 'flex-start'
                        }}
                    >
                        <StyledBottomNavigationAction label={<p>Actif({dataMaps[0].length})</p>} />
                        <StyledBottomNavigationAction label={<p> Déjà utilisé({dataMaps[1].length})</p>} />
                        <StyledBottomNavigationAction label={<p> Expiré({dataMaps[2].length})</p>} />
                    </StyledBottomNavigation>
                </ThemeProvider>
                <hr style={{ borderTop: '1px solid #A7A7A7' }} /> {/* ligne de separation */}

                {/* Titre interieur */}
                <Typography style={styledSecondTitle}>Coupons d’adhésion</Typography>

                {/* Grille de coupons */}
                <Grid container rowSpacing={isMobileOrTablet ? 3 : 0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} paddingTop={3} direction={isMobile ? 'column' : undefined}>
                    {/* Affichage des coupons repartis */}
                    {dataMaps[value].map((coupon) => (
                        < Grid container item xs={6} justifyContent='center'>
                            {coupon.Reduction && (
                                <Coupon
                                    texte={coupon.Reduction}
                                    dateExpiration={coupon.dateExpiration}
                                    heureExpiration={coupon.heureExpiration}
                                    photo={coupon.photo}
                                    handleOnClick={() => handleClickUtilise(coupon.id)}
                                    handleRemove={() => handleClickSup(value, coupon.id)}
                                />
                            )}

                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </div >
    )
}

export default PageCoupons