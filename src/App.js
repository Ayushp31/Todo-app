import './App.css';
import {TextField, Button, Paper, Grid} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import TodoCard from './Components/TodoCard/TodoCard';
import { useState,useEffect } from 'react';
import data from './Utils/Dataset'

function App() {
  const [toDos, setToDos] = useState(data)
  const btStyle = {cursor:'pointer', backgroundColor: "#F2CD5C", color:'black'}
  const paperStyle = {width: '100%'}
  useEffect(()=>{
    let data = localStorage.getItem("data")
    if(data){
      setToDos(JSON.parse(data))
    }
},[])

  const [input, setInput] = useState('')

  const AddHandler = () => {
    const todo =  {id: Math.random(), title: input}
    const items = toDos;
    items.push(todo)
    setToDos(items);
    setInput("")
    localStorage.setItem("data",JSON.stringify(toDos))
  }

  const completeHandler = (id) => {
    // let tempData = toDos
    const todo = toDos.find(e => e.id === id)
    todo.isCompleted = true
    setToDos([...toDos]) 
    localStorage.setItem("data",JSON.stringify(toDos))
  }

  const deleteHandler = (id) => {

    const todo = toDos.find(e => e.id === id)
    todo.isDeleted = true
    setToDos([...toDos]) 
    localStorage.setItem("data",JSON.stringify(toDos))
  }

  return (
    <div className="main-container">
      <div className='input-container'>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
          <box sx={{'& > :not(style)': { m: 1, width: '25ch'}}}>
            <TextField value={input} onChange={(e)=> setInput(e.target.value)} variant='outlined' label='Enter Task' placeholder='Write todo'/> 
          </box>
          <Button onClick={AddHandler} variant='contained' style={btStyle} startIcon={<AddCircleIcon />}>Add Task</Button>
          </Grid>
        </Paper>
         </div>
      <div className='output-container'>
        <div className='card-container'>
          <h4>Pending:</h4>
          <div className='card-list'>
            {
              toDos.map((e) => {
                if(!e.isCompleted) {
                  return (
                    <div>
                      {!e.isDeleted && 
                        <TodoCard key={e.id} title={e.title} id= {e.id} complete={completeHandler} delete= {deleteHandler}/>}
                     </div>
                  )
                }
                else{
                  return <></>
                }
              })
            }
          </div>
        </div>
        <div className='card-container'>
          <h4>Completed:</h4>
          <div className='card-list'>
            {
              toDos?.map((e) => {
                if(e.isCompleted) {
                   return (!e.isDeleted && <TodoCard key={e.id} id={e.id} title={e.title} isCompleted={e.isCompleted} delete={deleteHandler}/>)
                } else {
                  return <></>
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
