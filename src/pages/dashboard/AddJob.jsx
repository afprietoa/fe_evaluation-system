import {FormRow} from "../../components"; 
import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormRowSelect from "../../components/FormRowSelect";
import { clearValues, createJob, handleChange } from "../../features/job/jobSlice";
import { useEffect } from "react";

const AddJob = () => {

  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const genderList = ['Femele', 'Male'];
  const departmentList = ['Biology', 'Economy', ',Psicology', 'Law', 'Achitecture', 'Chemestry', 'Music', 'Medicine'];
  const {user} = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(!position || !company || !jobLocation){
      toast.error("Please fill out all fields");
      return;
    }
    dispatch(createJob({position, company, jobLocation, jobType, status}));
  };

  const handleChangeInput = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    dispatch(handleChange({name, value}));
  }
  useEffect(() => {
    if(!isEditing)
    dispatch(handleChange({
      name: 'jobLocation',
      value: user.location,
    }))
  }, []);
  

  return (
    <Wrapper>
      <form className="form" >
        <h3>{isEditing ? 'Editar Estudiante' : 'Añadir Estudiante'}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow 
            type='text'
            labelText='nombre'
            name='position'
            value={position}
            handleChange={handleChangeInput}
          />
          {/* company */}
          <FormRow 
            type='text'
            labelText='email'
            name='company'
            value={company}
            handleChange={handleChangeInput}
          />
          {/* location */}
          <FormRow 
            type='text'
            labelText='carrera'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleChangeInput}
          />
          {/* status */}
          <FormRowSelect 
            labelText='genero'
            name='status'
            value={status}
            handleChange={handleChangeInput}
            list={genderList}
          />
            {/* job type */}
           <FormRowSelect 
            labelText='departamento'
            name='jobType'
            value={jobType}
            handleChange={handleChangeInput}
            list={departmentList}
          />
          <div className="btn-container">
            <button
              type="button" 
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}>
              clear
            </button>
            <button
              type="submit" 
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}>
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob