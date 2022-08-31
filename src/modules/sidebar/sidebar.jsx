import React from 'react';
import Box from "@mui/material/Box";
import styled from '@emotion/styled';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WindPowerIcon from '@mui/icons-material/WindPower';
import TwitterIcon from '@mui/icons-material/Twitter';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


const Button = styled.button`
  color: white;
  background: #476bf0;
  border: none;
  padding: 20px;
  cursor: pointer;
`


const Sidebar = (props) => {

    return (
        <Box sx={{
            flex: 0,
            background: '#476bf0'
        }}>
            <Button>
                <AcUnitIcon/>
            </Button>
            <Button>
                <WindPowerIcon/>
            </Button>
            <Button>
                <TwitterIcon/>
            </Button>
            <Button>
                <ThunderstormIcon/>
            </Button>
        </Box>
    )
}

export default Sidebar;