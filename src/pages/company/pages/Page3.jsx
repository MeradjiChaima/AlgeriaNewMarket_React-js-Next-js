import React, { useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import { Box, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import Dropdown from '../../../shared/components/Dropdown';
import TotalField from '../components/TotalField';
import PourcentageField from '../components/PourcentageField';
import Buttonswitch from '../components/buttonSwitch';
import CardClient from '../components/CardClient';
import CheckList from '../components/Checklist';

export default function Page3() {

    // reglage de la taille des composants selon l'ecran (responsive)
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const pourcentageFieldRef = useRef(null);
    const [inputValue, setInputValue] = useState(''); //pour recuperer la valeur des pourcentages entree par l'utilisateur
    const [totalvalue, setTotalValue] = useState('0'); //pour la partie calcul de la somme des pourcentages

    const handlePourcentageChange = (value) => {
        setInputValue(value); // Met à jour l'état local avec la valeur saisie
        console.log('valeur saisie:', inputValue)
        handleTotalChange(value);
    };

    //pour la partie calcul de la somme des pourcentages, peut etre changee plus tard
    const handleTotalChange = ({ value }) => {
        const numericTotal = Number(totalvalue) + Number(value); //some de la valeur deja existante dans le TotalField qui affiche la somme, avec value
        setTotalValue(numericTotal.toString())
    }

    // labels exterieurs
    const stylelabel = {
        color: '#051C4E',
        fontWeight: 'bold',
        fontSize: '16px',
        fontFamily: 'Raleway',
        paddingTop: 10,
        paddingLeft: 10
    }

    //labels des pays
    const stylelabelinx = {
        color: '#051C4E',
        fontWeight: 'bold',
        fontSize: '13px',
        textalign: 'center',
        fontFamily: 'Raleway',
        paddingTop: 10
    }


    //labels des pays pour les pourcentages
    const labelsArray = ['Amérique du Nord ', 'Amérique du Sud', 'Europe de l Est ', 'Asie du Sud-Est ', 'Afrique ', 'Océanie', 'Moyen-Orient ', 'Asie de l Est ', 'Europe de l Ouest ', 'Amérique centrale ', 'Europe du Nord ', 'Europe du Nord ', 'Asie du Sud ', 'Marché intérieur '];

    //options de "Conditions de livraison acceptées"
    const livraisonOptions = [
        { value: 'FOB', label: 'FOB' }, { value: 'DES', label: 'DES' }, { value: 'DAF', label: 'DAF' }, { value: 'FCA', label: 'FCA' },
        { value: 'EXW', label: 'EXW' }, { value: 'CIF', label: 'CIF' }, { value: 'CFR', label: 'CFR' }, { value: 'DDP', label: 'DDP' },
        { value: 'DEQ', label: 'DEQ' }, { value: 'CPT', label: 'CPT' }, { value: 'CIP', label: 'CIP' }, { value: 'FAS', label: 'FAS' },
        { value: 'DDU', label: 'DDU' }, { value: 'Express Delivery', label: 'Express Delivery' },
    ]

    //options de "Devise de paiement acceptée"
    const deviseOptions = [
        { value: 'USD', label: 'USD' }, { value: 'JPY', label: 'JPY' }, { value: 'HKD', label: 'HKD' },
        { value: 'CAD', label: 'CAD' }, { value: 'CNY', label: 'CNY' }, { value: 'GBP', label: 'GBP' },
        { value: 'CHF', label: 'CHF' }, { value: 'EUR', label: 'EUR' }, { value: 'AUD', label: 'AUD' },
    ]

    //options de "Type de paiement acceptée"
    const paimentOptions = [
        { value: 'T/T', label: 'T/T' }, { value: 'D/P', label: 'D/P' }, { value: 'Carte de crédit', label: 'Carte de crédit' },
        { value: 'D/A', label: 'D/A' }, { value: 'Western Union', label: 'Western Union' }, { value: 'PayPal', label: 'PayPal' },
        { value: 'Cash', label: 'Cash' }, { value: 'L/C', label: 'L/C' }, { value: 'MoneyGram', label: 'MoneyGram' },
    ]

    //options de "Langue"
    const langueOptions = [
        { value: 'Allemand', label: 'Allemand' }, { value: 'Anglais', label: 'Anglais' }, { value: 'Arabe', label: 'Arabe' },
        { value: 'Chinois', label: 'Chinois' }, { value: 'Coréen', label: 'Coréen' }, { value: 'Espagnol ', label: 'Espagnol ' },
        { value: 'Français', label: 'Français' }, { value: 'Hindi', label: 'Hindi' }, { value: 'Italien', label: 'Italien' },
        { value: 'Japonais', label: 'Japonais' }, { value: 'Portugais', label: 'Portugais' }, { value: 'Russe', label: 'Russe' },
    ]


    const testt = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },];

    return (
        <>
            {/* grille exterieures qui contient titre a gauche et les informations le concernant */}
            <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                {/* effacer les titres a gauches si l'utilisateur est sur telephone */}
                {!isMobileOrTablet && (
                    < Grid container item xs={2} textAlign='center'>

                        <Typography style={stylelabel} sx={{ textDecorationLine: "underline" }}>Information d’éxportation</Typography>
                        <span style={{ marginTop: 1100 }}>
                            <Typography style={stylelabel} sx={{ textDecorationLine: "underline" }}>Conditions d’éxportation</Typography>
                        </span>

                    </Grid>
                )}
                {/* partie a droite des informations a remplir par l'utilisateur */}
                <Grid xs={isMobile ? 12 : 10} sm={10}>
                    <Paper
                        elevation={2}
                        sx={{
                            margin: 1,
                            padding: isMobile ? 2 : 4,
                            flexGrow: 1,
                            width: '100%',
                            borderRadius: 5,
                        }}
                    >
                        {/* grille pour separer les labels (revenu annuel total,...) des zone de texte */}
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction={isMobile ? 'column' : undefined}>
                            <Grid container item xs={4.5} justifyContent={isMobile ? undefined : "flex-end"}>
                                <Typography style={stylelabel}>Revenu annuel total :</Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Dropdown list={testt} label='revenu' />
                            </Grid>
                            <Grid container item xs={4.5} justifyContent={isMobile ? undefined : "flex-end"}>
                                <Typography style={stylelabel}>Pourcentage d’exportation :</Typography>
                            </Grid>
                            <Grid item xs={7}>
                            <Dropdown list={testt} label='Pourcentage' />
                            </Grid>
                            <Grid container item xs={4.5} justifyContent={isMobile ? undefined : "flex-end"}>
                                <Typography style={stylelabel}>Principaux marchés et distribution :</Typography>
                            </Grid>
                            <Grid item xs={7}>
                                {/* quand on fait la somme, value de totalfield devient totalvalue */}
                                <Typography style={stylelabel}>Total : <TotalField value={inputValue}></TotalField></Typography>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 8, md: 12 }}>
                                    {/* partie a revoir lors du calcul de la somme des pourcentages*/}
                                    {Array.from(Array(14)).map((_, index) => (
                                        <Grid item xs={2} sm={4} md={4} key={index}>
                                            <PourcentageField onChange={handlePourcentageChange} ref={pourcentageFieldRef}></PourcentageField>
                                            <Typography style={stylelabelinx}>{labelsArray[index]}</Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid container item xs={4.5} justifyContent={isMobile ? undefined : "flex-end"}>
                                <Typography style={stylelabel}>Année début d’exportation :</Typography>
                            </Grid>
                            <Grid item xs={7}>
                            <Dropdown list={testt} label='Année'  />
                            </Grid>
                        </Grid>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction={isMobileOrTablet ? 'column' : undefined}>
                            <Grid container item xs={4.5} justifyContent={isMobileOrTablet ? undefined : "flex-end"}>
                                <Typography style={stylelabel}>Exemple client :</Typography>
                            </Grid>
                            <Grid item xs={isMobileOrTablet ? 12 : 7} >
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '2%',
                                    paddingBottom: 10
                                }}>
                                    <p style={stylelabel}>Affichage</p>
                                    <span style={{ marginTop: 10 }}><Buttonswitch /></span>
                                </div>
                                <CardClient />
                            </Grid>
                        </Grid>
                        <Grid xs={12} sm={10}>
                            <Box
                                elevation={2}
                                sx={{
                                    p: 2,
                                    flexGrow: 1,
                                    borderRadius: '5%',
                                    width: '100%',
                                }}
                            >
                                {/* Partie des checkboxes */}
                                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction={isMobileOrTablet ? 'column' : undefined}>
                                    {/* Options de livraisons  */}
                                    <Grid container item xs={6} justifyContent={isMobileOrTablet ? undefined : "flex-end"}>
                                        <Typography style={stylelabel}>Conditions de livraison acceptées :</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CheckList title='CIF, CPT, EXW DEQ ...' options={livraisonOptions}></CheckList>
                                    </Grid>
                                    {/* Options de devise de paiment */}
                                    <Grid container item xs={6} justifyContent={isMobileOrTablet ? undefined : "flex-end"}>
                                        <Typography style={stylelabel}>Devise de paiement acceptée :</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CheckList title='USD, DZD, EUR,CAD ...' options={deviseOptions}></CheckList>
                                    </Grid>
                                    {/* Options de paiment  */}
                                    <Grid container item xs={6} justifyContent={isMobileOrTablet ? undefined : "flex-end"}>
                                        <Typography style={stylelabel}>Type de paiement accepté :</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CheckList title='D/P,  D/A, Cash, L/C ...' options={paimentOptions}></CheckList>
                                    </Grid>
                                    {/* Options de langue */}
                                    <Grid container item xs={6} justifyContent={isMobileOrTablet ? undefined : "flex-end"}>
                                        <Typography style={stylelabel}>Langue :</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CheckList title='Anglais, Français, Allemand ...' options={langueOptions}></CheckList>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid >
        </>
    )
}