import React,{useEffect} from 'react'
import { Box } from '@chakra-ui/react'
import { DivForm } from '../../assets/wrappers/Evaluation'
import { Stack, HStack, VStack, StackDivider } from '@chakra-ui/react'



const Confirm = ({values}) => {
  const {qs1, qs2, qs3, qs4, qs5, qs6, qs7, qs8, qs9, qs10, qs11, qs12, qs13, qs14, qs15, qs16, qs17, qs18, qs19, qs20, qs21} = values
  return (
    <>
    <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={2}
  align='stretch'
>
      <h4>Usted Ha completado la evaluación docente exitosamente! </h4>
      
        <Box bg='tomato' w='100%' p={3} color='gray.700'>El desempeño global de este docente fue: {qs1} </Box>
        <Box bg='yellow.200' w='100%' p={3} color='gray.700'>¿El docente dedicó tiempo suficiente o adecuado para asesorar, orientar y aclarar dudas?: {qs2}</Box>
        <Box bg='pink.100' w='100%' p={3} color='gray.700'>¿El docente fue justo e imparcial durante las actividades académicas y en las evaluaciones?: {qs3}</Box>
        <Box bg='tomato' w='100%' p={3} color='gray.700'>¿El docente fue respetuoso con usted y tolerante con sus puntos de vista?: {qs4} </Box>
        <Box bg='yellow.200' w='100%' p={3} color='gray.700'>¿El docente inspiró o motivó su interés por los temas tratados?: {qs5}</Box>
        <Box bg='pink.100' w='100%' p={3} color='gray.700'>¿El docente promovió en usted la argumentación o la reflexión crítica?: {qs6} </Box>
        <Box bg='tomato' w='100%' p={3} color='gray.700'>Estime el rango de horas en las que estuvo en contacto en este semestre con este docente: {qs7} </Box>

              
        <Box bg='yellow.200' w='100%' p={3} color='gray.700'>¿Cuál fue el motivo fundamental por el cual inscribió las actividades académicas con este docente?: {qs8}</Box>
        <Box bg='pink.100' w='100%' p={3} color='gray.700'>¿El docente preparó adecuadamente cada sesión o actividad?: {qs9}</Box>
        <Box bg='tomato' w='100%' p={3} color='gray.700'>¿El docente propició que usted encontrara conexiones de los temas tratados con otros contextos o con otros contenidos de su plan de estudios?: {qs10} </Box>
        <Box bg='yellow.200' w='100%' p={3} color='gray.700'>¿El docente mostró agrado y entusiasmo por su labor de enseñanza?: {qs11}</Box>
        <Box bg='pink.100' w='100%' p={3} color='gray.700'>¿El docente promovió la adquisición de diferentes herramientas para su aprendizaje autónomo?: {qs12} </Box>
        <Box bg='tomato' w='100%' p={3} color='gray.700'>¿El docente se esforzó por su aprendizaje?: {qs13} </Box>
        <Box bg='yellow.200' w='100%' p={3} color='gray.700'>¿El docente adecuó o modificó sus métodos de enseñanza según las necesidades de los estudiantes?: {qs14}</Box>

              
        <Box bg='pink.100' w='100%' p={3} color='gray.700'>¿El docente respetó las reglas y fechas acordadas para las actividades académicas, incluidas las evaluaciones?: {qs15}</Box>
        <Box bg='tomato' w='100%' p={3} color='gray.700'>¿Las evaluaciones hechas por el docente lo condujeron a mejorar su aprendizaje?: {qs16} </Box>
        <Box bg='yellow.200' w='100%' p={3} color='gray.700'>¿Con este docente aprendió con suficiencia y a profundidad lo tratado en las actividades académicas?: {qs17}</Box>
        <Box bg='pink.100' w='100%' p={3} color='gray.700'>¿Este docente transformó su manera de pensar, sentir o actuar en relación con la(s) asignatura(s) o las actividades tomada(s) con él?: {qs18} </Box>
        <Box bg='tomato' w='100%' p={3} color='gray.700'>¿Inscribiría con gusto otra actividad académica con este docente?: {qs19} </Box>
        <Box bg='yellow.200' w='100%' p={3} color='gray.700'>¿Cuál fue el aspecto que más lo impactó o la principal fortaleza del docente que le ayudó a aprender en las actividades académicas?: {qs20}</Box>
        <Box bg='pink.100' w='100%' p={3} color='gray.700'>¿Qué podría haber hecho adicionalmente el docente para mejorar su aprendizaje o cuál es el aspecto en el que el docente debería mejorar su proceso de enseñanza?: {qs21} </Box>

        </VStack>
    </>
  )
}

export default Confirm

