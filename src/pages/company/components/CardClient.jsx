import React, { useState } from 'react';
import ImageUploader from '../../../shared/components/ImageUploader';
import TextFieldHiddenLabel from '../../../shared/components/TextFieldHiddenLabel';
import { Grid, Paper, Typography } from '@mui/material';
import Dropdown from '../../../shared/components/Dropdown';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import { useMediaQuery, useTheme } from '@mui/material';

export default function CardClient() {

    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const limit = 4;
    const importimages = (imag) => {
        console.log(imag);
    }

    /***************Fonctions Processus card******************************* */
    const [cards, setCards] = useState([1]);

    const handleAddCard = () => {
        //controler le numero de processus cards
        if (cards.length < 15) {
            const lastIndex = cards[cards.length - 1];
            setCards([...cards, lastIndex + 1]);
        }
    };

    const handleRemoveCard = (index) => {
        //Supprimer une card 
        setCards((prevCards) => prevCards.filter((cardIndex) => cardIndex !== index));
    };
    /*********************************************************** */

    const stylelabel = {
        color: '#051C4E',
        fontWeight: 'bold',
        fontSize: '13px',
        fontFamily: 'Raleway',
        paddingTop: 10,
        paddingLeft: 10
    }

    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];

    return (
        <>
            {cards.map((index) =>
                <Paper
                    sx={{
                        p: 2,
                        margin: 'auto',
                        width: '100%',
                        flexGrow: 1,
                        borderRadius: '20px',
                        marginBottom: 2,
                    }}
                >

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'end',
                    }}>
                        {index > 1 && (
                            <button onClick={() => handleRemoveCard(index)} style={{
                                color: 'red',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}>
                                <DoDisturbOnIcon />
                            </button>
                        )}
                    </div>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction={isMobileOrTablet ? 'column' : undefined}>
                        <Grid container item xs={4.5} justifyContent={isMobile ? undefined : "flex-end"}>
                            <Typography style={stylelabel}>Nom client :</Typography>
                        </Grid>
                        <Grid item xs={7} >
                            <TextFieldHiddenLabel />
                        </Grid>
                        <Grid container item xs={4.5} justifyContent={isMobile ? undefined : "flex-end"}>
                            <Typography style={stylelabel}>Pays/région du client :</Typography>
                        </Grid>
                        <Grid item xs={7}>
                        <Dropdown list={currencies} label='Pays/région'  />
                        </Grid>
                        <Grid container item xs={4.5} justifyContent={isMobile ? undefined : "flex-end"}>
                            <Typography style={stylelabel}>Produits que vous
                                fournissez aux clients :</Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <TextFieldHiddenLabel />
                        </Grid>
                        <Grid container item xs={4.5} justifyContent={isMobile ? undefined : "flex-end"}>
                            <Typography style={stylelabel}>Chiffre d’affaire annuel :</Typography>
                        </Grid>
                        <Grid item xs={7} justifyContent="flex-end">
                            <Grid container direction="row" >
                                <Grid item xs={isMobileOrTablet ? 8 : 11}>
                                    <TextFieldHiddenLabel />
                                </Grid>
                                <Grid item xs={1}>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        defaultValue="EUR"
                                        size="small"
                                        sx={{ width: isMobileOrTablet ? '7ch' : '5ch' }}

                                    >
                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item xs={4.5} justifyContent={isMobile ? undefined : "flex-end"}>
                            <Typography style={stylelabel}>photos de coopération :</Typography>

                        </Grid>
                        <Grid item xs={7}>
                            <div className="photo">
                                <ImageUploader importimages={importimages}
                                    limit={limit}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            )}
            {cards.length < 10 && (
                <button onClick={handleAddCard} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '2%',
                    fontSize: '13px',
                    color: 'rgba(0, 0, 0, 0.4)',
                    fontWeight: 'bold',
                }}>
                    <AddBoxOutlinedIcon />
                    Nombre maximale de processus : 15
                </button>
            )}

        </>
    )
}