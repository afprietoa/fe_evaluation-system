import React from "react";
import { Button, FormControl, RadioGroup, Spinner, HStack,Container, Text, Textarea } from "@chakra-ui/react";
import { DivForm, FormStyle, RadioStyled, LabelStyled, ContainerStyled } from "../../assets/wrappers/Evaluation";


const Step3 = ({values, handleChange}) => {
  const [resize, setResize] = React.useState('horizontal')
  return (
    <>
      <FormStyle>
        

        <FormControl  as='fieldset'>

        <LabelStyled as='legend'>¿El docente respetó las reglas y fechas acordadas para las actividades académicas, incluidas las evaluaciones?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="Siempre"
          onChange={handleChange("qs15")}
        >Siempre</RadioStyled>
        <RadioStyled
          value="Frecuentemente"
          onChange={handleChange("qs15")}
          >Frecuentemente</RadioStyled>
        <RadioStyled
          value="A veces"
          onChange={handleChange("qs15")}
          >A veces</RadioStyled>
        <RadioStyled
          value="Nunca"
          onChange={handleChange("qs15")}
          >Nunca</RadioStyled>
        </HStack>
        </RadioGroup>
        

        <LabelStyled as='legend'>¿Las evaluaciones hechas por el docente lo condujeron a mejorar su aprendizaje?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="Siempre"
          onChange={handleChange("qs16")}
        >Siempre</RadioStyled>
        <RadioStyled
          value="Frecuentemente"
          onChange={handleChange("qs16")}
          >Frecuentemente</RadioStyled>
        <RadioStyled
          value="A veces"
          onChange={handleChange("qs16")}
          >A veces</RadioStyled>
        <RadioStyled
          value="Nunca"
          onChange={handleChange("qs16")}
          >Nunca</RadioStyled>
        </HStack>
        </RadioGroup>



        <LabelStyled as='legend'>¿Con este docente aprendió con suficiencia y a profundidad lo tratado en las actividades académicas?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="Sí"
          onChange={handleChange("qs17")}
        >Sí</RadioStyled>
        <RadioStyled
          value="No"
          onChange={handleChange("qs17")}
          >No</RadioStyled>
        </HStack>
        </RadioGroup> 


<LabelStyled as='legend'>¿Este docente transformó su manera de pensar, sentir o actuar en relación con la(s) asignatura(s) o las actividades tomada(s) con él?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="Sí"
          onChange={handleChange("qs18")}
        >Sí</RadioStyled>
        <RadioStyled
          value="No"
          onChange={handleChange("qs18")}
          >No</RadioStyled>
        </HStack>
        </RadioGroup> 


<LabelStyled as='legend'>¿Inscribiría con gusto otra actividad académica con este docente?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="Sí"
          onChange={handleChange("qs19")}
        >Sí</RadioStyled>
        <RadioStyled
          value="No"
          onChange={handleChange("qs19")}
          >No</RadioStyled>
        </HStack>
        </RadioGroup> 

        <LabelStyled as='legend'>¿Cuál fue el aspecto que más lo impactó o la principal fortaleza del docente que le ayudó a aprender en las actividades académicas?</LabelStyled>
      <Textarea
        value={values.qs20}
        onChange={handleChange("qs20")}
        placeholder='Cual sería tu sugerencia'
        size='sm'
        variant='filled'
        focusBorderColor='#00BB9C'
        resize={resize}
      />

<LabelStyled as='legend'>¿Qué podría haber hecho adicionalmente el docente para mejorar su aprendizaje o cuál es el aspecto en el que el docente debería mejorar su proceso de enseñanza?</LabelStyled>
      <Textarea
        value={values.qs21}
        onChange={handleChange("qs21")}
        placeholder='Cual sería tu sugerencia'
        size='sm'
        variant='filled'
        focusBorderColor='#00BB9C'
        resize={resize}
      />

        </FormControl>
      </FormStyle>
    </>
  )
}

export default Step3;