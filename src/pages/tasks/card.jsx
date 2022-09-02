import React from 'react';
import {Button, Card, CardActions, CardContent, CardHeader, Chip, Typography} from "@mui/material";


const TaskCard = (props) => {
    const {title, onClick, type} = props;

    return (
        <Card sx={{marginY: '20px', maxWidth: '400px'}}>
            <CardHeader
                sx={{
                    background: '#476bf0',
                    color: 'white'
                }}
                title={title || 'Заголовок задачи'}
            />

            <CardContent>
                {type === '1' ? <Chip label="Срочно" color="error"/> : <Chip label="Не срочно" color="success"/>}
                <Typography variant="body2" component="div">
                    Описание задачи какой то небольшой текст
                </Typography>


            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClick}>Открыть задачу</Button>
            </CardActions>
        </Card>
    )
}

export default TaskCard;