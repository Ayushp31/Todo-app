import React from 'react'
import {Card, CardContent, CardActions, Typography, IconButton, Tooltip} from '@mui/material'
import  DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const TodoCard = (props) => {
  return (
    <div className='card-wrapper'>
      <Card sx={{maxWidth: 340}}>
            <CardContent>
                <Typography gutterBottom variant="h4" component='div'>
                    {props.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Tooltip title='Complete task'>
                    <IconButton variant='contained' color='success' onClick={()=>props.complete(props.id)}> 
                        <CheckCircleOutlineIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton variant='contained' color='error' onClick={()=>props.delete(props.id)}> 
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </CardActions>
      </Card>
    </div>
  )
}

export default TodoCard
