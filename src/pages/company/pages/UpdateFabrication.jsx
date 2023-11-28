import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Grid from '@mui/material/Grid';
import { Paper, useMediaQuery, useTheme , Button , Typography } from '@mui/material';
import CardProcessus from '../components/CardProcessus'
import UpdateFabricationPart from "../components/UpdateFabrication";
import {  useEditingCard} from '../Functions';
import { ProcessCards } from '../data';


export default function UpdateFabrication() {

  // reglage de la taille des composants selon l'ecran (responsive)
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  /***************Fonctions Processus card******************************* */
  const initialCards = [...ProcessCards]; 
  const {
    cards,
    handleEdit,
    handleDelete,
    handleAddCard,
    handleUpdate,
    handleCancel,
  } = useEditingCard(initialCards);


  /*********************************************************** */

  return (

    <div style={{
      display: 'flex ',
      flexDirection: 'row',
      justifyContent: 'start',
      gap: '10%'
    }}>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        {!isMobileOrTablet && (
          <Grid container item xs={2} justifyContent='center'>
            <Typography style={{
              color: 'rgba(5, 28, 78, 1)',
              fontFamily: 'Raleway , sans',
              fontSize: ' 19px',
              textDecoration: 'underline',
              fontWeight: 'bold',
              paddingTop: 5,
             
            }}>
              Fabrication</Typography>
          </Grid>
        )}

       
        <Grid xs={15} sm={10} sx={{ width: "100%" }}>
          <Paper
            elevation={2}
            sx={{
              margin: 1,
              padding: isMobile ? 2 : 3,
              justifyContent: 'center',
              width: '100%',
              borderRadius: 5,
            }}
          >
             
            <UpdateFabricationPart/>
              
             
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction={isMobile ? 'column' : undefined}>
              <Grid container item xs={4.5} justifyContent={isMobile ? undefined : "flex-end"}>
                <Typography style={{
                  color: 'rgba(5, 28, 78, 1)',
                  fontFamily: 'Raleway , sans',
                  fontSize: ' 16px',
                  fontWeight: 'bold',
                }}>
                  Processus de fabrication :
                </Typography>
              </Grid>
              <Grid item xs={7}>

                {/* Partie de la carte */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4%',
                  width: isMobile ? '100%' : '80%',
                }}>
                 {cards.map((card) => (
        <CardProcessus
          key={card.id}
          cardData={card}
          isEditing={card.isEditing}
          handleEdit={() => handleEdit(card.id)}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          handleCancel={handleCancel}
        />
      ))}
                  

                  {cards.length < 10 && (
                    <Button onClick={handleAddCard} style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '2%',
                      fontSize: '13px',
                      color: 'rgba(0, 0, 0, 0.4)',
                      fontWeight: 'bold',
                      textTransform:'none'
                    }}>
                      <AddBoxOutlinedIcon />
                      Nombre maximale de processus : 15
                    </Button>
                  )}
                </div>
              </Grid>
            </Grid>

           
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}


