import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';



// Componente Header
const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}
// Componente CONTENT 
const Content = (props) => {
  //Recorro el array de objetos, extraigo cada uno y lo muestro en un componente
  const parts = props.parts.map((part)=>
    <Part name={part.name} exercise={part.exercises} />
  );
  return <>{parts}</>
}

//Componente PART
const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercise}
      </p>
    </>
  )
}

//Componente TOTAL
const Total = (props) =>{
  let total=0;
  const parts = props.parts.map(part => part.exercises)
  for (let i=0;i<parts.length;i++){
    total+=parts[i];
  }
  return(
    <>
    <p>Number of exercises {total}</p>
    </>
  )
}

//Componente APP 
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts:[
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      < Header title={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))