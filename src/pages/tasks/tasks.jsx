import React from 'react';
import Box from '@mui/material/Box';
import TaskCard from "./card";
import {moduleNames} from "../../utils/moduleNames";



const Tasks = (props) => {

    const {onClick} = props;

    const onTaskClick = (e) => {
        onClick(moduleNames.task, e);
    }

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
                <TaskCard onClick={onTaskClick} type="1"/>
                <TaskCard onClick={onTaskClick} type="1" title={'Поменять договор'}/>
                <TaskCard onClick={onTaskClick} title={'Попить кофе'}/>
                <TaskCard onClick={onTaskClick} title={'Еще задача'}/>
            </Box>
        </Box>
    )
}

export default Tasks;