import React from 'react';
import { styled, Box } from '@mui/system';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const InfoTitleContainer = styled(Box)({
  color: '#051C4E',
  backgroundColor: '#DEF4E1',
  padding: 10,
  borderRadius: 15,
  width: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3%',
});

const StyledInfoTitle = ({NameOfEntreprise}) => {
  return (
    <InfoTitleContainer>
      <TaskAltIcon sx={{ color: '#2ABF42', height: '40%' }} />
      Bonjour {NameOfEntreprise} vous êtes inscrit avec succès.<br/> Dites-nous en plus sur votre entreprise pour débloquer plus d’avantage.
    </InfoTitleContainer>
  );
};

export default StyledInfoTitle;
