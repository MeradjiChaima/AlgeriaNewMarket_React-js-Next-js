import React , {useState , useEffect}from 'react'
import { Typography  , Grid, Select, MenuItem , Rating , } from '@mui/material'; 
import usersData from './users.json'; // Import user data from the json file 
import User from '/userimg.jpg'
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';
import Popup from './components/Popup'
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft'; 



/*******************Responsive mode************************************ */
const isSmallScreen = window.innerWidth < 1024; 
/********************************************************************** */

//-------------------The Page -------------------------------------------                                   
const Contactes = () => {


/********************Block and unblock contact popup *************************** */
  const [popupOpen, setPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };
/************************************************************************ */




/****************contact drop down menu (Filtrage contacts) ******************************** */
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedUser(null); // Reset selected user when changing options
  };

/*********************************************************************** */



/*****************************Get user data (Liste de contacts avec leurs infos) **************************** */

const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from JSON file (or API)
    setUsers(usersData);
  }, []);
/********************************************************************** */




/*******************************Select user **************************** */
const [selectedUser, setSelectedUser] = useState(null);
const handleUserClick = (user) => {
  setSelectedUser(user);
  setReturnn(true); // in the small screen version 
};
const filteredUsers = selectedOption 
    ? users.filter((user) => user[selectedOption])
    : [];

/********************************************************************* */



/****************************Traitement de demande ******************* */
const handleAcceptDemande = (user) => {
  console.log(`Accepted demande for ${user.name}`);// requete 
};
const handleDeleteDemande = (user) => {
  console.log(`Delete demande for ${user.name}`);//requete 
};

/************************************************************************ */



/***************************Add contact********************************* */

const [addedUsers, setAddedUsers] = useState(new Set());

  const handleAddContact = (userId) => {
    setAddedUsers((prevAddedUsers) => new Set(prevAddedUsers).add(userId));
  };
  
  const isUserAdded = (userId) => addedUsers.has(userId);// requete

/*********************************************************************** */


/*****************handle return list contact (small screen version)***** */
const [returnn , setReturnn]= useState(false) ; 
const handleReturn =() => {
  setReturnn(false); 
  setSelectedUser(null);

}
/*********************************************************************** */


  return (
    
    <div className='w-full flex lg:items-center md:items-start justify-center flex-row gap-4 bg-gray-100'>
      {/*Return button */}
      {(isSmallScreen && selectedUser ) &&
      
      (
        <div className='flex justify-start items-start py-4'>
          <button style={{color:'rgba(248, 75, 14, 1)'}} onClick={()=>handleReturn()}>
          <SubdirectoryArrowLeftIcon />
          </button>        
        </div>
      )  }



      {/*Liste contactes*/}
      <div className={`lg:w-1/4 md:w-3/4 h-[calc(100vh-2rem)] overflow-y-auto bg-white  gap-10 items-center p-4 ${
             ( selectedUser && isSmallScreen )? 'hidden' : 'flex flex-col'}`} >

        {/*Type de user : acheteur/vendeur*/}
          <div className='hidden md:hidden lg:flex flex-row gap-2 justify-start w-full'>
            <div className='w-1/4 h-8 rounded-md flex justify-center items-center' style={{ 
            background:'rgba(248, 75, 14, 1)' ,
            boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)'}}>
              <Typography 
              fontFamily="Poppins"
              fontSize="1vw"
              fontWeight={700}
              color={'white'}
              >
                Vendeur 
              </Typography>
            </div>
            
            <div className='w-1/4 h-8 rounded-md flex justify-center items-center' style={{ 
            background:'white' ,
            boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)' , 
            border:'1px solid rgba(248, 75, 14, 1) '}}>
              <Typography 
              fontFamily="Poppins"
              fontSize="1vw"
              fontWeight={700}
              color={'rgba(248, 75, 14, 1)'}
              >
                Acheteur 
              </Typography>
            </div>
          </div>


        {/*Ma carte*/}
        <div className='hidden md:hidden lg:flex w-2/3  rounded-xl justify-center items-center' style={{ 
            background:'rgba(248, 75, 14, 1)' ,
            }}>
              <Typography 
              fontFamily="Poppins"
              fontSize="1.5vw"
              fontWeight={700}
              color={'white'}
              >
                Ma carte
              </Typography>
        </div>


        {/*Contact menu */ }
      
        <Select
        value={selectedOption}
        onChange={handleOptionChange}
        displayEmpty
        className='w-4/5 h-11 p-2'
        >
        <MenuItem value="" disabled >
          <Typography 
          fontFamily="Poppins"
          fontSize="1.2vw"
          fontWeight={500}
          color={'rgba(0, 0, 0, 0.63)'}>
          Séléctionner contact ... 
          </Typography>
          
        </MenuItem>
        <MenuItem value="contact" > 
        <Typography 
          fontFamily="Poppins"
          fontSize="1.2vw"
          fontWeight={500}
          color={'rgba(0, 0, 1)'}>Tous les contacts
          </Typography>
        </MenuItem>
        <MenuItem value="mescontacts"> <Typography 
          fontFamily="Poppins"
          fontSize="1.2vw"
          fontWeight={500}
          color={'rgba(0, 0, 0, 1)'}>Mes contacts
          </Typography>
        </MenuItem>
        <MenuItem value="blocked"> 
          <Typography 
          fontFamily="Poppins"
          fontSize="1.2vw"
          fontWeight={500}
          color={'rgba(0, 0, 0, 1)'}>Contacts bloqués
          </Typography>
        </MenuItem>
        <MenuItem value="demande">
          <Typography 
          fontFamily="Poppins"
          fontSize="1.2vw"
          fontWeight={500}
          color={'rgba(0, 0, 0, 1)'}> Demande Contact 
          </Typography>
        </MenuItem>
      </Select>

      {/*when no contact ( user ) is selected */}
      {filteredUsers.length==0 && ( 
      <div className='hidden lg:hidden md:flex w-full justify-center items-center p-5' >
      <Typography 
                  fontFamily="Poppins"
                  fontSize="4vw"
                  fontWeight={700}
                  color={'rgba(0, 0, 0, 1)'}
                  textAlign="center">Séléctionner un contact pour avoir plus de détails ! 
           </Typography>
      </div>
    )}


        {/*Filtred Contacts ( user ) List */}
     <div className='w-full'>
      {filteredUsers.map((user) => (
          <div
            key={user.id}
            className={`cursor-pointer p-4 flex flex-row gap-4 w-full border-t  border-gray-300 ${
              selectedUser === user ? 'bg-gray-300 text-white '  : ''
            }`}
            onClick={() => handleUserClick(user)}
          >
            <img src={User} href='userimg' className=' w-12 h-12 rounded-full'/>
            <div>
            <Typography 
                  fontFamily="Poppins"
                  fontSize="1.3vw"
                  fontWeight={700}
                  color={'rgba(0, 0, 0, 1)'}>{user.name} 
           </Typography>
           <Rating
                name="rating"
                value={4.5} // {user.rating}
                precision={0.5}
                readOnly
              />
           </div>
           {user.demande && (
            <div className='flex flex-row justify-end gap-4 items-center w-full'>
                <button className=' w-7 h-7 rounded-md flex justify-center items-center cursor-grabbing ' style={{background:'rgba(223, 4, 4, 1)'}}
                onClick={()=> handleDeleteDemande(user)}>
                <ClearSharpIcon style={{ color:'white'}}/>
                </button>
                <button className=' w-7 h-7 rounded-md flex justify-center items-center' style={{background:'rgba(33, 249, 57, 1)'}} 
                onClick={()=> handleAcceptDemande(user)}>
                <CheckSharpIcon style={{ color:'white'}}/>
                </button>
                
            </div>
           )}
           {user.blocked && ( 
           <div className='flex flex-row justify-end items-center w-full px-4'> 
            <button onClick={handlePopupOpen}>
              <RemoveCircleSharpIcon style={{ color:'rgba(223, 4, 4, 1)'}}/>
            </button>
            <Popup open={popupOpen} onClose={handlePopupClose} userName={user.name} userImg={User} text={'Voulez-vous vraiment débloquer cet utilisateur?'}/>
           </div> 
           )}
          </div>
        ))}
      </div>
 

      </div>

   {/*User Informations */}
   {(selectedUser && !selectedUser.blocked ) ? ( 
      
      <div className={`lg:w-3/4 lg:h-[calc(100vh-2rem)] lg:overflow-y-auto p-4 gap-4 md:w-full ${
        (!returnn && isSmallScreen)? 'hidden' : 'flex flex-col'}`}>

      {/*Buttons contact*/}
      <div className='w-full bg-white p-4 flex flex-row gap-4'>
        <div className=' w-1/5 h-9 px-2  flex items-center justify-center text-white rounded-xl' style={{
          background:'rgba(248, 75, 14, 1)', 
        }}>
          <Typography
        fontFamily="Poppins"
        fontSize="1.3vw"
        fontWeight={500}
        lineHeight="30px"
        textAlign="center"
      >
        Informations
      </Typography>
        </div>
             {/*If user isn't in ( mes contacts ) or ( Demandes) then display 'Ajouter Contact' */ }
          {!selectedUser.mescontacts && !selectedUser.demande && (

              <button
              className={`h-9 px-2 rounded-xl cursor-pointer`}
              style={{
                backgroundColor: isUserAdded(selectedUser.id) ? 'rgba(5, 231, 0, 1)' : 'white',
                color: isUserAdded(selectedUser.id) ? 'white' : 'black',
                border: isUserAdded(selectedUser.id) ? 'none' : '0.5px solid rgba(0, 0, 0, 0.32)',
              }}
              
              onClick={() => handleAddContact(selectedUser.id)}
              disabled={isUserAdded(selectedUser.id)}
            >
          <Typography 
          fontFamily="Poppins"
          fontSize="1.3vw"
          textAlign="center" 
          fontWeight= {isUserAdded(selectedUser.id) ? 700 : 'normal' } > {isUserAdded(selectedUser.id) ? (
            <>
              Contact ajouté
              <CheckSharpIcon style={{ marginLeft: '0.5rem' , fontWeight:'bolder'
            }} /> 
            </>
          ) : (
            'Ajouter Contact'
          )}</Typography>

           </button>
        ) }
        


        <button className=' h-9 px-2 rounded-xl' style={{
          border :'0.5px solid rgba(0, 0, 0, 0.32)',
        }}>
          <Typography 
          fontFamily="Poppins"
          fontSize="1.3vw"
          fontWeight={500}
          lineHeight="30px"
          textAlign="center" onClick={handlePopupOpen}>Bloquer</Typography>
        </button>
        <Popup open={popupOpen} onClose={handlePopupClose} userName={selectedUser.name} userImg={User} text={'Voulez-vous vraiment bloquer cet utilisateur ? '}/>
        <button className=' h-9 px-2 rounded-xl' style={{
          border :'0.5px solid rgba(0, 0, 0, 0.32)',
        }}>
          <Typography 
          fontFamily="Poppins"
          fontSize="1.3vw"
          fontWeight={500}
          lineHeight="30px"
          textAlign="center">Envoyer votre carte</Typography>
        </button>

        
      </div>


      {/*User*/}
      <div className='w-full bg-white flex flex-row justify-start items-center py-5 px-8 gap-6'>
                <img src={User} href='userimg' className=' w-12 h-12 rounded-full '/>
                <div className=' flex flex-col justify-start '>
                  <Typography 
                  fontFamily="Poppins"
                  fontSize="1.3vw"
                  fontWeight={700}
                  color={'rgba(0, 0, 0, 1)'}>{selectedUser.name}</Typography>
                  <div className='flex flex-row gap-1 justify-start items-center'>
                  <a>
                    <Typography
                    fontFamily="Poppins"
                    fontSize="1vw"
                    fontWeight={500}
                    color={'rgba(248, 75, 14, 1)'}
                    >
                      Ajouter Tags |</Typography>
                  </a>
                  <a>
                    <Typography
                    fontFamily="Poppins"
                    fontSize="1vw"
                    fontWeight={500}
                    color={'rgba(248, 75, 14, 1)'}
                    >
                      Ajouter remarques</Typography>
                  </a>
                  </div>
                  

                </div>
        
      </div>


      {/*Contacts*/}
      <div className='w-full bg-white p-6 flex flex-col gap-4 '>
          <Typography
          fontFamily="Poppins"
          fontSize="1.3vw"
          fontWeight={600}
          color={'rgba(0, 0, 0, 1)'}
          >Contacts</Typography>



       <div className='px-8'>
       <Grid container spacing={3}>
        {/* First Grid */}
        <Grid item xs={6}>
          
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Pays/région: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Algérie/Alger 
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Date de création: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  20/12/2020 
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Département: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Finance 
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Poste de travail: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Manager 
                </Typography>
              </Grid>
            </Grid>
          
        </Grid>

          {/* Second Grid */}
        <Grid item xs={6}>
          
            <Grid container spacing={1}>
            <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Adresse: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Street45, road12 
                </Typography>
              </Grid>


              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Email: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  user@gmail.com 
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Téléphone: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  +213666564123 
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Fax: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  +21337832021 
                </Typography>
              </Grid>
            </Grid>
          
        </Grid>
      </Grid>
      </div>
      </div>
      




      {/*Information de l’entreprise*/}
      <div className='w-full bg-white p-6 flex flex-col gap-4 '>
          <Typography
          fontFamily="Poppins"
          fontSize="1.3vw"
          fontWeight={600}
          color={'rgba(0, 0, 0, 1)'}
          >Information de l'entreprise</Typography>



       <div className='px-8'>
       <Grid container spacing={3}>
        {/* First Grid */}
        <Grid item xs={6}>
          
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Nom de l'entreprise: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Company name 
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Type: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Type 
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Production contractuelle: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Caché 
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Certificats de l'entreprise: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Caché 
                </Typography>
              </Grid>
            </Grid>
          
        </Grid>

          {/* Second Grid */}
        <Grid item xs={6}>
          
            <Grid container spacing={1}>
            <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Produits principales:  
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Nom produit  
                </Typography>
              </Grid>


              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Marché principal 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Nom marché  
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Bureaux extèrieurs: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  bureau
                </Typography>
              </Grid>

  
            </Grid>
          
        </Grid>
      </Grid>
      </div>
      </div>

      {/*Information sur les  activitées*/}
      <div className='w-full bg-white p-6 flex flex-col gap-4 '>
          <Typography
          fontFamily="Poppins"
          fontSize="1.3vw"
          fontWeight={600}
          color={'rgba(0, 0, 0, 1)'}
          >Information sur les  activitées</Typography>
          

          {/*Interactions*/}
          <div className='w-full flex px-6 flex-col gap-3'>
 
          <Typography
          fontFamily="Poppins"
          fontSize="1.2vw"
          fontWeight={500}
          color={'rgba(0, 0, 0, 1)'}
          >Interactions</Typography>

          
          <div className='px-6'>
            <Grid container spacing={1}>
            <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                 Date d'échange: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  20/12/2020
                </Typography>
              </Grid>


              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Ajouter à la liste bloquée: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  non  
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Ajouter comme contact: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  non 
                </Typography>
              </Grid>
            </Grid>
            </div> 
          </div>
          <div className='w-full bg-gray-400 h-px '></div>
          
          {/*RFQ*/}
          <div className='w-full flex px-6 flex-col gap-3'>
 
          <Typography
          fontFamily="Poppins"
          fontSize="1.2vw"
          fontWeight={500}
          color={'rgba(0, 0, 0, 1)'}
          >RFQ</Typography>

          
          <div className='px-6'>
            <Grid container spacing={1}>
            <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  RFQ enregistrés: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  oui 
                </Typography>
              </Grid>


              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Reception fournisseurs: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  oui 
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Quotation approuvée: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  non 
                </Typography>
              </Grid>
            </Grid>
            </div> 
          </div>
          <div className='w-full bg-gray-400 h-px '></div>
          


          {/*Transactions*/}
          <div className='w-full flex px-6 flex-col gap-3'>
 
          <Typography
          fontFamily="Poppins"
          fontSize="1.2vw"
          fontWeight={500}
          color={'rgba(0, 0, 0, 1)'}
          >Transactions</Typography>

          
          <div className='px-6'>
            <Grid container spacing={1}>
            <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Transactions online: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  oui 
                </Typography>
              </Grid>
            </Grid>
            </div> 
          </div>
          <div className='w-full bg-gray-400 h-px '></div>
          

          {/*Demande de clarification*/}
          <div className='w-full flex px-6 flex-col gap-3'>
 
          <Typography
          fontFamily="Poppins"
          fontSize="1.2vw"
          fontWeight={500}
          color={'rgba(0, 0, 0, 1)'}
          >Demandes de clarification</Typography>

          
          <div className='px-6'>
            <Grid container spacing={1}>
            <Grid item xs={6}>
                <Typography  
                color={'rgba(0, 0, 0, 0.63)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  Taux de réponses fournisseur: 
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography  
                color={'rgba(0, 0, 0, 1)'}
                fontFamily="Poppins"
                fontSize="1vw"
                fontWeight={500}
                >
                  90%
                </Typography>
              </Grid>
            </Grid>
            </div> 
          </div>

          
          
      </div>
      </div>
   ) : (
       

        <div className='hidden md:hidden lg:flex w-3/4 h-screen p-4 '>
          <div className='bg-white flex justify-center items-center w-full h-full  p-10 text-center  '>
               <Typography 
                  fontFamily="Poppins"
                  fontSize="4vw"
                  fontWeight={700}
                  color={'rgba(0, 0, 0, 1)'}>Séléctionner contact pour avoir plus de détails</Typography>
          </div>
        </div>
    )}
    </div>
  )
}



export default Contactes
