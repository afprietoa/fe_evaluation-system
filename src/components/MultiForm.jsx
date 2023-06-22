import {useState} from 'react'
import Step3 from './steps/Step3';
import Step2 from './steps/Step2';
import Step1 from './steps/Step1';

import Confirm from './steps/Confirm';
import { Button, Stack, Flex, Spacer } from "@chakra-ui/react";
import { ContainerStyled, DivForm } from '../assets/wrappers/Evaluation';


const MultiForm = () => {
  //Steps
  const [activeStep, setActiveStep] = useState(0)

  const getSteps = () => {
    return ["Step1", "Step2", "Step3", "Confirm"]
  }

  const steps = getSteps()

  //State variables
  const [multiFormValues, setMultiFormValues] = useState({
    qs1: "",
    qs2: "",
    qs3: "",
    qs4: "",
    qs5: "",
    qs6: "",
    qs7: "",
    qs8: "",
    qs9: "",
    qs10: "",
    qs11: "",
    qs12: "",
    qs13: "",
    qs14: "",
    qs15: "",
    qs16: "",
    qs17: "",
    qs18: "",
    qs19: "",
    qs20: "",
    qs21: "",
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
    <ContainerStyled>
    <DivForm>
      {activeStep === 0 && (
        <Step1 values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 1 && (
        <Step2 values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 2 && (
        <Step3 values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 3 && (
        <Confirm values={multiFormValues} handleChange={handleChange} />
      )}
<Flex >
      <Button    
  height='48px'
  width='100px'
  border='2px'
  p='4'
            colorScheme='teal' disabled={activeStep === 0} onClick={handleBack} style={activeStep === 3 ? {display: 'none'} : {}} >Back</Button>

<Spacer />
      <Button    size='md'
  height='48px'
  width='100px'
  border='2px'
  p='4'
  borderColor='green.500' onClick={handleNext} style={activeStep === 3 ? {display: 'none'} : {}} >{}{activeStep === steps.length - 2 ? 'Submit' : 'Next'}</Button>
    </Flex>
    </DivForm>
    </ContainerStyled>
  )
}

export default MultiForm