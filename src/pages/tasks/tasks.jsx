import React from 'react';
import Box from '@mui/material/Box';
import TaskCard from "./card";



const Tasks = (props) => {


    return(
        <Box component="div"
             sx={{
                 padding: '20px'
             }}
        >
            <h1>
                Задачи пользователя
            </h1>

            <Box component="div">
                <TaskCard/>
                <TaskCard title={'Поменять договор'}/>
                <TaskCard title={'Попить кофе'}/>
                <TaskCard title={'Еще задача'}/>
            </Box>
        </Box>
    )
}

export default Tasks;