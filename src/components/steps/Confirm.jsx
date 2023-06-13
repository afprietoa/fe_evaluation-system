import React,{useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
// import firebase from '../config/firebase'



const Confirm = ({values}) => {

  const {qs1, qs2, qs3, qs4, qs5, qs6} = values



  return (
    <div>
      <h4>Usted a completado la evaluación docente exitosamente! </h4>
      <ListGroup style={{maxWidth:'600px', margin:'auto'}}>
        <ListGroup.Item variant="secondary">¿El docente dedicó tiempo suficiente o adecuado para asesorar, orientar y aclarar dudas?: {qs1} </ListGroup.Item>
        <ListGroup.Item variant="success">¿El docente dedicó tiempo suficiente o adecuado para asesorar, orientar y aclarar dudas?: {qs2}</ListGroup.Item>
        <ListGroup.Item variant="danger">¿El docente fue justo e imparcial durante las actividades académicas y en las evaluaciones?: {qs3}</ListGroup.Item>
        <ListGroup.Item variant="info">¿El docente fue respetuoso con usted y tolerante con sus puntos de vista?: {qs4} </ListGroup.Item>
        <ListGroup.Item variant="light">¿El docente inspiró o motivó su interés por los temas tratados?: {qs5}</ListGroup.Item>
        <ListGroup.Item variant="dark">¿El docente promovió en usted la argumentación o la reflexión crítica?: {qs6} </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Confirm;