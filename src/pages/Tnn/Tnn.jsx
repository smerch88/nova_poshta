import { Container } from '@mui/material';

import { TnnList } from 'components/TnnList';
import { TnnSearchForm } from 'components/TnnSearchForm';

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
