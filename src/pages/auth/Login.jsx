import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Linkedin from '/linkedin.png';
import Google from '/Google.png';
import { useMediaQuery } from '@mui/material';

const Login = () => {
  const isMobileOrTablet = useMediaQuery('(max-width: 1000px)');
  return (
    <div className='app' style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {/* Le box de Log in */}
      <div style={{
        width: 800,
        height: 800,
        background: 'white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 15,
        marginTop: '4rem',
        marginBottom: '1.5rem',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          width: 180,
          textAlign: 'center',
          color: '#F84B0E',
          fontSize: 34,
          fontFamily: 'Raleway',
          fontWeight: '700',
          marginBottom: '1.5rem',
          
        }}>
          Bienvenue
        </div>

        <div style={{ width: 280, textAlign: 'center', color: '#051C4E', fontSize: 20, fontFamily: 'Raleway', fontWeight: '550' }}>
          Veuillez entrer les détails de votre compte
        </div>
        

{/* Log in avec Google */}




        <div style={{ marginTop: '2rem' }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<img src={Google} alt="Google Icon" 
            style={{ width: 30, height: 30 }} />}
            style={{
              width: 360,
              height: 60,
              background: 'white',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: 15,
              border: '0.50px rgba(0, 0, 0, 0.25) solid',
              color: 'black' // Couleur du texte à l'intérieur du bouton
            }}
          >
            <span
             style={{
              
              marginRight:'0.8rem',
              color: 'black',
              fontSize: 20,
              fontFamily: 'Raleway',
              fontWeight: '700',
              textTransform: 'capitalize',
            }}> Continuer avec Google</span>
          </Button>
        </div>

        {/* Log in avec LinkeDin */}
        <div style={{ marginTop: '1.5rem' }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<img src={Linkedin} alt="" 
            style={{ width: 30, height: 30 }} />}
            style={{
              width: 360,
              height: 60,
              background: 'white',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: 15,
              border: '0.50px rgba(0, 0, 0, 0.25) solid',
              color: 'black' // Couleur du texte à l'intérieur du bouton
            }}
          >
            <span
             style={{
              
              marginRight:'0.5rem',
              color: 'black',
              fontSize: 20,
              fontFamily: 'Raleway',
              fontWeight: '700',
              textTransform: 'capitalize',
              
            }}> Continuer avec Linkedin</span>
          </Button>
        </div>
        {/* La ligne au milieu  */}
        <div style={{display:'flex',}}>
        <div style={{width: 165, height: 0, border: '0.50px black solid', marginTop:'2rem'}}></div>
        <div style={{color: 'black', fontSize: 21, fontFamily: 'Raleway', fontWeight: '700', marginTop:'1.3rem',marginLeft:'0.7rem',marginRight:'0.7rem'}}>Ou</div>
        <div style={{width: 165, height: 0, border: '0.50px black solid', marginTop:'2rem'}}></div>
        </div>  
          <br/>
        {/* email password  */}
        
          {/* partie mail */}
        <div style={{ color: '#051C4E', fontSize: 17, fontFamily: 'Raleway', fontWeight: '600',float: 'left',marginRight:'20rem',marginBottom:'1rem'}}>
          Email :</div>
        
        
        
        <TextField
        variant="outlined"
        placeholder="Email"
        style={{
          width: 370,
          height: 60,
          borderRadius: 10,}}/>

        {/* partie password */}
        <div style={{ color: '#051C4E', fontSize: 17, fontFamily: 'Raleway', fontWeight: '600',float: 'left',marginRight:'17rem',
        marginBottom:'1rem', marginTop:'1rem'}}>
          Mot de passe :</div>
        
        
        
        <TextField
        variant="outlined"
        type="password"
        placeholder="Mot de Passe"
        style={{
          width: 370,
          height: 60,
          borderRadius: 10,}}/>
          <div style={{ marginLeft:'15rem',marginBottom:'2rem' }}>
  <a
    href="/lien-vers-page-mot-de-passe-oublie"
    style={{
      color: '#F84B0E',
      fontSize: 17,
      fontFamily: 'Raleway',
      fontWeight: '700',
      textDecoration: 'underline',
      
    }}
  >
    Mot de passe oublié
  </a>
</div>


<Button
            variant="contained"
            color="primary"
            style={{
              width: 360,
              height: 60,
              background: '#F84B0E',
              
              borderRadius: 15,
              border: '0.50px rgba(0, 0, 0, 0.25) solid',
              color: 'white' // Couleur du texte à l'intérieur du bouton
            }}
          >
            <span
             style={{
              
              marginRight:'0.5rem',
              color: 'white',
              fontSize: 24,
              fontFamily: 'Raleway',
              fontWeight: '800',
              textTransform: 'capitalize',
              
            }}> Se Connecter</span>
          </Button>
       
       

      
      <div style={{ textAlign: 'center' ,marginTop:'4rem'}}>
  <span
    style={{
      color: '#24282C',
      fontSize: 17,
      fontFamily: 'Raleway',
      fontWeight: '600',
      lineHeight: '23.80px', // Utilisez 'px' pour spécifier la hauteur de ligne
      letterSpacing: 0.17,
      wordWrap: 'break-word',
    }}
  >
    Vous n'avez pas de compte ? 
  </span>
  <span
    style={{
      color: '#24282C',
      fontSize: 17,
      fontFamily: 'Raleway',
      fontWeight: '800',
      textDecoration: 'underline',
      lineHeight: '23.80px', // Utilisez 'px' pour spécifier la hauteur de ligne
      letterSpacing: 0.17,
      wordWrap: 'break-word',
    }}
  >
    <a
      href="/lien-vers-page-inscription"
      style={{
        color: '#F84B0E',
        fontSize: 17,
        fontFamily: 'Raleway',
        fontWeight: '800',
        textDecoration: 'underline',
      }}
    >
      S'inscrire maintenant
    </a>
  </span>
</div>


      


      </div>

      {/* Le box orange */}
      {!isMobileOrTablet && (
        <div style={{
          width: 350,
          height: 800,
          background: 'rgba(248, 75, 14, 0.78)',
          boxShadow: '4px 5px 4px rgba(0, 0, 0, 0.25)',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          marginRight: '12rem',
          marginTop: '4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 42,
            fontFamily: 'Poppins',
            fontWeight: '500',
            lineHeight: 1.2,
            wordWrap: 'break-word'
          }}>
            Se<br />connecter
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
