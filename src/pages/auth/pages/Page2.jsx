import * as React from 'react';
import Paper from '@mui/material/Paper';
import StyledInfoTitle from '../components/infoTItle';
import TextFieldComponent from '../components/TextfieldComp';
import Dropdown from '../../../shared/components/Dropdown';
import OrangeCheckBox from '../../../shared/components/OrangeCheckBox';
import ImageUploader from '../../../shared/components/ImageUploader';
import CustomButton from '../../../shared/components/CustomButton';
import useMediaQuery from '@mui/material/useMediaQuery';


//image uploader limit 
const limit=3;
  const importimages =(imag)=>{
    console.log(imag);
}

// normal input
const InputLabel = ({ text }) => (
    <label style={{ width: '45%', display: 'flex', justifyContent: 'flex-end' }}>
      {text}
    </label>
  );

  
  const FormField = ({ label, children }) => (
    <div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
      <InputLabel text={label} />
      {children}
    </div>
  );

//required input label style
  const ReqInputLabel = ({ text }) => (
    <label style={{ width: '45%', display: 'flex', justifyContent: 'flex-end' }}>
        <p style={{ 
          color: 'red' , 
          fontSize:' 20px' ,  
          fontWeight:'bold'}}>*</p>
      {text}
    </label>
  );

  const ReqFormField = ({ label, children }) => (
    <div style={{ display: 'flex',flexDirection:"row", alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
      <ReqInputLabel text={label} />
      {children}
    </div>
  );

export default function Page2() {
    const isMobile = useMediaQuery('(width: 640px)');
    return (
      <>

        {/* insert nav bar here  */}

      <div style={{
        textAlign:'center',
        fontSize:"30px",
        fontWeight:"bold",
        color:"#051C4E",
      }}>
        Complètez vos information commercials
        </div>
     <Paper
            sx={{
                p: 4,
                margin: 'auto',
                maxWidth: 637,
                Height:1200,
                display:'flex',
                flexDirection:'column',
                gap:'10px',
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <StyledInfoTitle
          NameOfEntreprise="Entreprise"
          />
        </div>
           
        <ReqFormField label="Type d'activité:" style={{ flexDirection: isMobile ? 'row' : 'column'}}> 
          <Dropdown /> {/*should be changed */}
        </ReqFormField>

            <ReqFormField label="Type d'entreprise:" style={{ flexDirection: isMobile ? 'column' : 'row'}}>
          <TextFieldComponent sparkholder="Sarl, Eurl, Ltd, LLc"/> 
          </ReqFormField>
            

          <FormField label="Chiffre annuel d'affaire:">
          <Dropdown />
        </FormField>

        <ReqFormField label="Adress:" >
          <TextFieldComponent sparkholder="Rue, Boulevard"/>
        </ReqFormField>
        
        <FormField >
          <TextFieldComponent sparkholder="Complément d'adresse"/>
        </FormField>
   
            <FormField label="Code postal:">
            <TextFieldComponent sparkholder="xxxx"/>
          </FormField>
           
          <FormField label="Ville:">
          <TextFieldComponent error sparkholder="Ville"/>
        </FormField>

        <ReqFormField label="Pays/Régions:">
          <Dropdown />
        </ReqFormField>

           <FormField label="Site Web:" >
          <TextFieldComponent sparkholder="https//entreprise.com"/>
        </FormField>
        
        <label style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginTop:'5%',marginLeft:"5%", fontWeight:'bold' }}>Documents de vérification:</label>
            
            <div
            style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center",
                gap:"10px",
                width:"100%",
        }}
            >

        <ReqFormField label="Nom légal de l'entreprise:" >
          <TextFieldComponent sparkholder="Nom de l'entreprise"/>
            </ReqFormField>
                
                
                <div style={{
                width:"100%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                
            </div>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    textAlign:"center",
                    alignItems:"center"
                }}
                >
                <p>Téléchargez les déclarations de revenus ou les relevés bancaires</p>
                <div style={{
                    width:"75%",
                    
                alignItems:"center",
                justifyContent:"center",
                    
                }}>
                <ImageUploader style={{
                width:"100%",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
            }}
            importimages={importimages}
            limit={limit}
            
                />
                </div>
                <p style={{fontWeight:"500", }}>Obtenez le résultat dans les 2 à 4 jours ouvrables</p>
        </div>        
        
        
        <div>
                <OrangeCheckBox/>
                <label>J'accepte CGU-CGV de la Marketplace</label>
                </div>
                
                <CustomButton>Continue</CustomButton>
            </div>
      </Paper>
      </>
    )
  }
  