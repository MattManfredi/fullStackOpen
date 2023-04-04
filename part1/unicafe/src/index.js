import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

// COMPONENT TITLE
const Title = ({text}) =>(<h2>{text}</h2>);

//COMPONENT BUTTON
const Button =({handleClick, text})=>(<button onClick={handleClick}>{text}</button>);



//COMPONENT STATISTICS
const Statistics = ({good,bad,neutral}) =>{
  const totalCount =good+bad+neutral;
  const score = ((good*1)+(bad*-1)+(neutral*0));
  const avergae = totalCount ===0 ? 0 : score/totalCount;
  const positive =good===0?0:(good*100)/totalCount;
  if(totalCount===0){
    return(
      <>
      <p>No feedback given</p>
      </>
    )
  }
  return(
    <table>
      <tbody>
        <StatisticLine text={'Good:'} value={good}/>
        <StatisticLine text={'Neutral:'} value={neutral}/>
        <StatisticLine text={'Bad:'} value={bad}/>
        <StatisticLine text={'Total:'} value={totalCount}/>
        <StatisticLine text={'Average:'} value={avergae.toFixed(2)}/>
        <StatisticLine text={'Positive:'} value={positive.toFixed(2)} percent={'%'}/>
      </tbody>
    </table>
  )
}
// COMPONENT STATISTIC
const StatisticLine = ({text, value, percent}) =>{
  return (
    <tr>
      <td>{text}</td>
      <td>{value}{percent}</td>
    </tr>
  )
}





const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title1='Give feedback', title2='Statistics';
  return (
    <div>
      <Title text={title1}/>
      <Button handleClick={()=>setGood(good+1)} text={"Good"}/>
      <Button handleClick={()=>setNeutral(neutral+1)} text={"Neutral"}/>
      <Button handleClick={()=>setBad(bad+1)} text={"Bad"}/>
      <Title text={title2}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
