import React from 'react';
import Box from "@mui/material/Box";
import styled from '@emotion/styled';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WindPowerIcon from '@mui/icons-material/WindPower';
import TwitterIcon from '@mui/icons-material/Twitter';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import TableChartIcon from '@mui/icons-material/TableChart';
import {modulesMap} from "../../App";

const Button = styled.button`
  color: white;
  background: #476bf0;
  border: none;
  padding: 20px;
  cursor: pointer;
`


const Sidebar = (props) => {
    const {dispatchRouteEvent, onInitNewModule} = props;

    const onCLickMenuItem = (Component) => {
        console.log(Component)
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
            background: '#476bf0'
        }}>
            <Button onClick={() => onCLickMenuItem(modulesMap['tasks'])} title="Задачи">
                <DashboardIcon/>
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
    )
}

export default Sidebar;