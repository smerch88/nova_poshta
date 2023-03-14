import { Container } from '@mui/material';

import { DepartmentsList } from 'components/Departments/DepartmentsList';
import { DepartmentsSearchForm } from 'components/Departments/DepartmentsSearchForm';
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
