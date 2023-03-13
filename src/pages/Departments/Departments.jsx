import { Container } from '@mui/material';

import { DepartmentsList } from 'components/DepartmentsList';
import { DepartmentsSearchForm } from 'components/DepartmentsSearchForm';
import { Pagination } from 'components/Pagination';

const Departments = () => {
  return (
    <>
      <Container>
        <DepartmentsSearchForm />
        <DepartmentsList />
        <Pagination />
      </Container>
    </>
  );
};

export default Departments;
