import { Container } from '@mui/material';

import { TnnList } from 'components/TTN/TnnList';
import { TnnSearchForm } from 'components/TTN/TnnSearchForm';

const Tnn = () => {
  return (
    <>
      <Container>
        <TnnSearchForm />
        <TnnList />
      </Container>
    </>
  );
};

export default Tnn;
