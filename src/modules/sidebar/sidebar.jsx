import React from 'react';
import Box from "@mui/material/Box";
import styled from '@emotion/styled';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import TableChartIcon from '@mui/icons-material/TableChart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {modulesMap} from "../../App";
import {Badge} from "@mui/material";

const Button = styled.button`
  color: white;
  background: #476bf0;
  border: none;
  padding: 20px;
  cursor: pointer;
`


const Sidebar = (props) => {
    const {dispatchRouteEvent, onInitNewModule, goBack} = props;

    const onCLickMenuItem = (Component) => {
        dispatchRouteEvent({
            type: 'removeSecondPane',
        })
        dispatchRouteEvent({
            type: 'addFirstPane',
            payload: <Component onClick={onInitNewModule}/>
        })
    }

    return (
        <Box component="nav" sx={{
            flex: 0,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            background: '#476bf0'
        }}>
            <Box component="nav">
                <Button onClick={() => onCLickMenuItem(modulesMap['tasks'])} title="Задачи">
                    <Badge badgeContent={4} color="error">
                        <DashboardIcon/>
                    </Badge>
                </Button>
                <Button onClick={() => onCLickMenuItem(modulesMap['task'])} title="Задача">
                    <CheckBoxIcon/>
                </Button>
                <Button onClick={() => onCLickMenuItem(modulesMap['tables'])} title="Таблицы">
                    <TableChartIcon/>
                </Button>
                <Button onClick={() => onCLickMenuItem(modulesMap['text'])} title="Текст">
                    <ThunderstormIcon/>
                </Button>
            </Box>

            <Box component="div">
                <Button onClick={goBack} title="Вернуться назад">
                    <ArrowBackIcon/>
                </Button>
            </Box>
        </Box>
    )
}

export default Sidebar;