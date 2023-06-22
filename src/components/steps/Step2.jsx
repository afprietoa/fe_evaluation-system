import React from "react";
import { Button, FormControl, RadioGroup, Spinner, HStack,Container } from "@chakra-ui/react";
import { DivForm, FormStyle, RadioStyled, LabelStyled, ContainerStyled } from "../../assets/wrappers/Evaluation";

const Step2 = ({ values, handleChange }) => {
  console.log(values, handleChange);
  return (
    <>
      <FormStyle>
        

        <FormControl  as='fieldset'>

        <LabelStyled as='legend'>¿Cuál fue el motivo fundamental por el cual inscribió las actividades académicas con este docente?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="Porque era(n) Obligatoria(s)"
          onChange={handleChange("qs8")}
        >Porque era(n) Obligatoria(s)</RadioStyled>
        <RadioStyled
          value="Porque era(n) Optativa(s)"
          onChange={handleChange("qs8")}
          >Porque era(n) Optativa(s)</RadioStyled>
        <RadioStyled
          value="Porque podían inscribirse"
          onChange={handleChange("qs8")}
          >Porque podían inscribirse</RadioStyled>
        <RadioStyled
          value="Porque no había otra(s) asignatura(s)"
          onChange={handleChange("qs8")}
          >Porque no había otra(s) asignatura(s)</RadioStyled>
        </HStack>
        </RadioGroup>
        
        <LabelStyled as='legend'>¿El docente preparó adecuadamente cada sesión o actividad?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="Siempre"
          onChange={handleChange("qs9")}
        >Siempre</RadioStyled>
        <RadioStyled
          value="Frecuentemente"
          onChange={handleChange("qs9")}
          >Frecuentemente</RadioStyled>
        <RadioStyled
          value="A veces"
          onChange={handleChange("qs9")}
          >A veces</RadioStyled>
        <RadioStyled
          value="Nunca"
          onChange={handleChange("qs9")}
          >Nunca</RadioStyled>
        </HStack>
        </RadioGroup>


        <LabelStyled as='legend'>¿El docente propició que usted encontrara conexiones de los temas tratados con otros contextos o con otros contenidos de su plan de estudios?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="Sí"
          onChange={handleChange("qs10")}
        >Sí</RadioStyled>
        <RadioStyled
          value="No"
          onChange={handleChange("qs10")}
          >No</RadioStyled>
        </HStack>
        </RadioGroup>


<LabelStyled as='legend'>¿El docente mostró agrado y entusiasmo por su labor de enseñanza?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="Siempre"
          onChange={handleChange("qs11")}
        >Siempre</RadioStyled>
        <RadioStyled
          value="Frecuentemente"
          onChange={handleChange("qs11")}
          >Frecuentemente</RadioStyled>
        <RadioStyled
          value="A veces"
          onChange={handleChange("qs11")}
          >A veces</RadioStyled>
        <RadioStyled
          value="Nunca"
          onChange={handleChange("qs11")}
          >Nunca</RadioStyled>
        </HStack>
        </RadioGroup>

        <LabelStyled as='legend'>¿El docente promovió la adquisición de diferentes herramientas para su aprendizaje autónomo?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="Sí"
          onChange={handleChange("qs12")}
        >Sí</RadioStyled>
        <RadioStyled
          value="No"
          onChange={handleChange("qs12")}
          >No</RadioStyled>
        </HStack>
        </RadioGroup> 

        <LabelStyled as='legend'>¿El docente se esforzó por su aprendizaje?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="Siempre"
          onChange={handleChange("qs13")}
        >Siempre</RadioStyled>
        <RadioStyled
          value="Frecuentemente"
          onChange={handleChange("qs13")}
          >Frecuentemente</RadioStyled>
        <RadioStyled
          value="A veces"
          onChange={handleChange("qs13")}
          >A veces</RadioStyled>
        <RadioStyled
          value="Nunca"
          onChange={handleChange("qs13")}
          >Nunca</RadioStyled>
        </HStack>
        </RadioGroup>

        <LabelStyled as='legend'>¿El docente adecuó o modificó sus métodos de enseñanza según las necesidades de los estudiantes?</LabelStyled>    
        <RadioGroup >
        <HStack spacing='24px'>
        <RadioStyled
          value="Siempre"
          onChange={handleChange("qs14")}
        >Siempre</RadioStyled>
        <RadioStyled
          value="Frecuentemente"
          onChange={handleChange("qs14")}
          >Frecuentemente</RadioStyled>
        <RadioStyled
          value="A veces"
          onChange={handleChange("qs14")}
          >A veces</RadioStyled>
        <RadioStyled
          value="Nunca"
          onChange={handleChange("qs14")}
          >Nunca</RadioStyled>
        </HStack>
        </RadioGroup>

        </FormControl>
      </FormStyle>
    </>
  );
};

export default Step2;