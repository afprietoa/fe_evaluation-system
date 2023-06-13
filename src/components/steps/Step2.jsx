import React from 'react'
import {Form} from 'react-bootstrap'

const Step2 = ({values, handleChange}) => {
  return (
    <div>
      <Form className="mt-5">
        <h4>Enter your Step2</h4>

        <Form.Group className="mt-5" controlId="qs4">
        <Form.Label>¿El docente fue respetuoso con usted y tolerante con sus puntos de vista?</Form.Label>    
        <Form.Check
          value="Siempre"
          type="radio"
          aria-label="radio 1"
          label="Siempre"
          onChange={handleChange("qs4")}
          checked={values.qs4 === "Siempre"}
        />
        <Form.Check
          value="Frecuentemente"
          type="radio"
          aria-label="radio 2"
          label="Frecuentemente"
          onChange={handleChange("qs4")}
          checked={values.qs4 === "Frecuentemente"}
        />
       <Form.Check
          value="A veces"
          type="radio"
          aria-label="radio 2"
          label="A veces"
          onChange={handleChange("qs4")}
          checked={values.qs4 === "A veces"}
        />
       <Form.Check
          value="Nunca"
          type="radio"
          aria-label="radio 2"
          label="Nunca"
          onChange={handleChange("qs4")}
          checked={values.qs4 === "Nunca"}
        />
      <Form.Check
          value="No se aplica"
          type="radio"
          aria-label="radio 2"
          label="No se aplica"
          onChange={handleChange("qs4")}
          checked={values.qs4 === "No se aplica"}
        />
        </Form.Group>

      
        <Form.Group className="mt-5" controlId="qs5">
        <Form.Label>¿El docente inspiró o motivó su interés por los temas tratados?</Form.Label>    
        <Form.Check
          value="Sí"
          type="radio"
          aria-label="radio 1"
          label="Sí"
          onChange={handleChange("qs5")}
          checked={values.qs5 === "Sí"}
        />
        <Form.Check
          value="No"
          type="radio"
          aria-label="radio 2"
          label="No"
          onChange={handleChange("qs5")}
          checked={values.qs5 === "No"}
        />
        </Form.Group>


        <Form.Group className="mt-5" controlId="qs6">
        <Form.Label>¿El docente promovió en usted la argumentación o la reflexión crítica?</Form.Label>    
        <Form.Check
          value="Sí"
          type="radio"
          aria-label="radio 1"
          label="Sí"
          onChange={handleChange("qs6")}
          checked={values.qs6 === "Sí"}
        />
        <Form.Check
          value="No"
          type="radio"
          aria-label="radio 2"
          label="No"
          onChange={handleChange("qs6")}
          checked={values.qs6 === "No"}
        />
        </Form.Group>



      </Form>
    </div>
  )
}

export default Step2