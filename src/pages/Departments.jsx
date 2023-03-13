import { DepartmentsList } from 'components/DepartmentsList';
import { DepartmentsSearchForm } from 'components/DepartmentsSearchForm';

const Departments = () => {
  return (
    <>
      <DepartmentsSearchForm />
      <DepartmentsList />
    </>
  );
};

export default Departments;
