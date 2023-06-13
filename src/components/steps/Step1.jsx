import React from "react";
import { Form } from "react-bootstrap";

const Step1 = ({ values, handleChange }) => {
  console.log(values, handleChange);
  return (
    <div>
      <Form className="mt-5">
        <h4>Enter your Details</h4>

        <Form.Group className="mt-5" controlId="qs1">
        <Form.Label>El desempeño global de este docente fue:</Form.Label>    
        <Form.Check
          value="'Muy alto"
          type="radio"
          aria-label="radio 1"
          label="'Muy alto"
          onChange={handleChange("qs1")}
          checked={values.qs1 === "'Muy alto"}
        />
        <Form.Check
          value="Alto"
          type="radio"
          aria-label="radio 2"
          label="Alto"
          onChange={handleChange("qs1")}
          checked={values.qs1 === "Alto"}
        />
        <Form.Check
          value="Bajo"
          type="radio"
          aria-label="radio 3"
          label="Bajo"
          onChange={handleChange("qs1")}
          checked={values.qs1 === "Bajo"}
        />
       <Form.Check
          value="Muy bajo"
          type="radio"
          aria-label="radio 4"
          label="Muy bajo"
          onChange={handleChange("qs1")}
          checked={values.qs1 === "Muy bajo"}
        />
        </Form.Group>
        

      
        <Form.Group className="mt-5" controlId="qs2">
        <Form.Label>¿El docente dedicó tiempo suficiente o adecuado para asesorar, orientar y aclarar dudas?</Form.Label>    
        <Form.Check
          value="Siempre"
          type="radio"
          aria-label="radio 1"
          label="Siempre"
          onChange={handleChange("qs2")}
          checked={values.qs2 === "Siempre"}
        />
        <Form.Check
          value="Frecuentemente"
          type="radio"
          aria-label="radio 2"
          label="Frecuentemente"
          onChange={handleChange("qs2")}
          checked={values.qs2 === "Frecuentemente"}
        />
       <Form.Check
          value="A veces"
          type="radio"
          aria-label="radio 2"
          label="A veces"
          onChange={handleChange("qs2")}
          checked={values.qs2 === "A veces"}
        />
       <Form.Check
          value="Nunca"
          type="radio"
          aria-label="radio 2"
          label="Nunca"
          onChange={handleChange("qs2")}
          checked={values.qs2 === "Nunca"}
        />
      <Form.Check
          value="No se aplica"
          type="radio"
          aria-label="radio 2"
          label="No se aplica"
          onChange={handleChange("qs2")}
          checked={values.qs2 === "No se aplica"}
        />
        </Form.Group>


        <Form.Group className="mt-5" controlId="qs3">
        <Form.Label>¿El docente fue justo e imparcial durante las actividades académicas y en las evaluaciones?</Form.Label>    
        <Form.Check
          value="Siempre"
          type="radio"
          aria-label="radio 1"
          label="Siempre"
          onChange={handleChange("qs3")}
          checked={values.qs3 === "Siempre"}
        />
        <Form.Check
          value="Frecuentemente"
          type="radio"
          aria-label="radio 2"
          label="Frecuentemente"
          onChange={handleChange("qs3")}
          checked={values.qs3 === "Frecuentemente"}
        />
       <Form.Check
          value="A veces"
          type="radio"
          aria-label="radio 2"
          label="A veces"
          onChange={handleChange("qs3")}
          checked={values.qs3 === "A veces"}
        />
       <Form.Check
          value="Nunca"
          type="radio"
          aria-label="radio 2"
          label="Nunca"
          onChange={handleChange("qs3")}
          checked={values.qs3 === "Nunca"}
        />
      <Form.Check
          value="No se aplica"
          type="radio"
          aria-label="radio 2"
          label="No se aplica"
          onChange={handleChange("qs3")}
          checked={values.qs3 === "No se aplica"}
        />
        </Form.Group>

      </Form>
    </div>
  );
};

export default Step1;