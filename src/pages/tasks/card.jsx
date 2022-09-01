import React from 'react';
import {Button, Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material";
import Box from "@mui/material/Box";


const TaskCard = (props) => {
    const {title, onClick} = props;

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
                <Typography variant="h5" component="div">
                    Описание задачи
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br/>
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClick}>Открыть задачу</Button>
            </CardActions>
        </Card>
    )
}

export default TaskCard;