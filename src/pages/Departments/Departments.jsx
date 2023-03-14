import { Container } from '@mui/material';

import { DepartmentsList } from 'components/DepartmentsList';
import { DepartmentsSearchForm } from 'components/DepartmentsSearchForm';
import { PaginationComponent } from 'components/PaginationComponent';

const Departments = () => {
  return (
    <>
      <Container>
        <DepartmentsSearchForm />
        <DepartmentsList />
        <PaginationComponent />
      </Container>
    </>
  );
};

export default Departments;
