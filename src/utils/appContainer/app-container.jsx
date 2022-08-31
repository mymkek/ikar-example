import React from 'react';
import Box from '@mui/material/Box';



const AppContainer = (props) => {

    const {children} = props;

    return(
        <Box
            sx={{
                bgcolor: 'background.paper',
                height: '100vh',
                width: '100vw',
                display: 'flex',
                minWidth: 300,
            }}
        >
            {children}
        </Box>
    )
}

export default AppContainer;