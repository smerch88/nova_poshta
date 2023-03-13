import { DepartmentsList } from 'components/DepartmentsList';
import { DepartmentsSearchForm } from 'components/DepartmentsSearchForm';
import { Pagination } from 'components/Pagination';

const Departments = () => {
  return (
    <>
      <DepartmentsSearchForm />
      <DepartmentsList />
      <Pagination />
    </>
  );
};

export default Departments;
