
import { styled } from '@mui/system';

const WarningTitle = styled('div')({
  color: '#051C4E',
  backgroundColor: 'rgba(248, 75, 14, 0.34)',
  padding: 10,
  borderRadius: 15,
  textAlign: 'center',
});

export default function StyledWarningTitle() {
  return <WarningTitle>Choisissez la méthode qui vous convient le mieux pour vérifier votre entreprise.</WarningTitle>;
}

