import React from 'react'
import { Button, FormControl, RadioGroup, Spinner, HStack,Container } from "@chakra-ui/react";
import { DivForm, FormStyle, RadioStyled, LabelStyled, ContainerStyled } from "../../assets/wrappers/Evaluation";

const Step1 = ({ values, handleChange }) => {
  return (
    <>
      <FormStyle>
        

        <FormControl  as='fieldset'>

        <LabelStyled as='legend'>El desempeño global de este docente fue:</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="'Muy alto"
          onChange={handleChange("qs1")}
        >Muy alto</RadioStyled>
        <RadioStyled
          value="Alto"
          onChange={handleChange("qs1")}
          >Alto</RadioStyled>
        <RadioStyled
          value="Bajo"
          onChange={handleChange("qs1")}
          >Bajo</RadioStyled>
       <RadioStyled
          value="Muy bajo"
          onChange={handleChange("qs1")}
          >Muy bajo</RadioStyled>
        </HStack>
        </RadioGroup>
        

        <LabelStyled as='legend'>¿El docente dedicó tiempo suficiente o adecuado para asesorar, orientar y aclarar dudas?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>    
        <RadioStyled          
         value="Siempre"
          onChange={handleChange("qs2")}
          >Siempre</RadioStyled>
        <RadioStyled          value="Frecuentemente"
          onChange={handleChange("qs2")}
          >Frecuentemente</RadioStyled>
       <RadioStyled          
         value="A veces"
          onChange={handleChange("qs2")}
          >A veces</RadioStyled>
       <RadioStyled          
          value="Nunca"
          onChange={handleChange("qs2")}
          >Nunca</RadioStyled>
      <RadioStyled          
          value="No se aplica"
          onChange={handleChange("qs2")}
          >No se aplica</RadioStyled>
        </HStack>
        </RadioGroup>



        <LabelStyled as='legend'>¿El docente fue justo e imparcial durante las actividades académicas y en las evaluaciones?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled          
          value="Siempre"
          onChange={handleChange("qs3")}
          >Siempre</RadioStyled>
        <RadioStyled          
          value="Frecuentemente"
          onChange={handleChange("qs3")}
          >Frecuentemente</RadioStyled>
       <RadioStyled          
          value="A veces"
          onChange={handleChange("qs3")}
          >A veces</RadioStyled>
       <RadioStyled          
          value="Nunca"
          onChange={handleChange("qs3")}
          >Nunca</RadioStyled>
      <RadioStyled          
          value="No se aplica"
          onChange={handleChange("qs3")}
          >No se aplica</RadioStyled>
        </HStack>
        </RadioGroup>

        <LabelStyled as='legend'>¿El docente fue respetuoso con usted y tolerante con sus puntos de vista?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="Siempre"
          onChange={handleChange("qs4")}
          >Siempre</RadioStyled>
        <RadioStyled
          value="Frecuentemente"
          onChange={handleChange("qs4")}
          >Frecuentemente</RadioStyled>
       <RadioStyled
          value="A veces"
          onChange={handleChange("qs4")}
          >A veces</RadioStyled>
       <RadioStyled
          value="Nunca"
          onChange={handleChange("qs4")}
          >Nunca</RadioStyled>
      <RadioStyled
          value="No se aplica"
          onChange={handleChange("qs4")}
          >No se aplica</RadioStyled>
        </HStack>
        </RadioGroup>

        <LabelStyled as='legend'>¿El docente inspiró o motivó su interés por los temas tratados?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="Sí"
          onChange={handleChange("qs5")}
          >Sí</RadioStyled>
        <RadioStyled
          value="No"
          onChange={handleChange("qs5")}
          >No</RadioStyled>
        </HStack>
        </RadioGroup>

        <LabelStyled as='legend'>¿El docente promovió en usted la argumentación o la reflexión crítica?</LabelStyled>    
        <RadioGroup spacing='24px'>
        <HStack>
        <RadioStyled
          value="Sí"
          onChange={handleChange("qs6")}
          >Sí</RadioStyled>
        <RadioStyled
          value="No"
          onChange={handleChange("qs6")}
          >No</RadioStyled>
        </HStack>
        </RadioGroup>

        <LabelStyled as='legend'>Estime el rango de horas en las que estuvo en contacto en este semestre con este docente:</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="1-48 horas"
          onChange={handleChange("qs7")}
        >1-48 horas</RadioStyled>
        <RadioStyled
          value="49-96 horas"
          onChange={handleChange("qs7")}
          >49-96 horas</RadioStyled>
        <RadioStyled
          value="Más de 96 horas"
          onChange={handleChange("qs7")}
          >Más de 96 horas</RadioStyled>
        </HStack>
        </RadioGroup>

        </FormControl>
      </FormStyle>
    </>
  )
}

export default Step1;