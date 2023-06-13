import React,{useState} from 'react'
import Step2 from './steps/Step2';

import Step1 from './steps/Step1';
import Welcome from './steps/Welcome';
import {Button} from 'react-bootstrap';

import Confirm from './steps/Confirm.jsX';

const MultiForm = () => {
  //Steps
  const [activeStep, setActiveStep] = useState(0)

  const getSteps = () => {
    return ["Welcome", "Step1", "Step2", "Confirm"]
  }

  const steps = getSteps()

  //State variables
  const [multiFormValues, setMultiFormValues] = useState({
    qs1: "",
    qs2: "",
    qs3: "",
    qs4: "",
    qs5: "",
    qs6: ""
  })

  //Navigates to the next page
  const handleNext = () => {
    setActiveStep((nextStep) => nextStep + 1)
  }
  //Navigates to the Previous page
  const handleBack = () => {
    setActiveStep((previousStep) => previousStep - 1)
  }

  //Handle form value state on change
  const handleChange = (input) => (e) => {
    setMultiFormValues({...multiFormValues, [input]: e.target.value})
  }
  return (
    <div>
      {activeStep === 0 && (
        <Welcome handleChange={handleChange} />
      )}
      {activeStep === 1 && (
        <Step1 values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 2 && (
        <Step2 values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 3 && (
        <Confirm values={multiFormValues} handleChange={handleChange} />
      )}

      <Button disabled={activeStep === 0} className="mr-5" onClick={handleBack} style={activeStep === 3 ? {display: 'none'} : {}} >Back</Button>

      <Button className="ml-5" variant="contained" onClick={handleNext} style={activeStep === 3 ? {display: 'none'} : {}} >{}{activeStep === steps.length - 2 ? 'Submit' : 'Next'}</Button>
    </div>
  )
}

export default MultiForm