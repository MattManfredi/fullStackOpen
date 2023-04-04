import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = ({anecdotes}) => {
  //state for selected anecdote
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length));
  //randomizer for selected anecdote
  const setRandom =()=>{
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }
  //state array objets of anecdotes and his votes
  const [anedoteVotes, setAnecdoteVotes] = useState(anecdotes.map((anecdota)=>({anecdote:anecdota,votes:0})));
  //function to handle the votes
  const handleVote =(selected,maxVoted)=>()=> {
    // creates a copy of the actual array
    const auxArray = anedoteVotes.slice();
    // modify the property votes of the actual object
    auxArray[selected].votes += 1;
    // updates the states with the new array
    setAnecdoteVotes(auxArray);
    if(auxArray[selected].votes>maxVoted.votes){
      setMaxVoted(auxArray[selected])
    }

  };
  //state for the max voted
  const [maxVoted, setMaxVoted] = useState({anecdote:anedoteVotes[0].anecdote,votes:0})
  return (
    <div>
      <Anecdote object={anedoteVotes[selected]}/>
      <Buttons setRandom={setRandom} handleVote={handleVote} selected={selected} maxVoted={maxVoted}/>
      <Anecdote object={maxVoted}/>
    </div>
  )
}

//Button
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
//Buttons
const Buttons =({setRandom,handleVote,selected,maxVoted})=>{
  return(
    <div>
      <Button handleClick={handleVote(selected,maxVoted)} text={'Vote'}/>
      <Button handleClick={setRandom} text={'Next anecdote'}/>
    </div>
  )
}
//Anecdote
const Anecdote=({object})=>{
  return(
    <>
      <p>{object.anecdote}</p>
      <p>Has {object.votes} votes</p>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)