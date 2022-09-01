import React from 'react';
import Box from '@mui/material/Box';
import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement
} from 'react-reflex'

import 'react-reflex/styles.css'
import Tasks from "../../pages/tasks/tasks";
import Task from "../../pages/task/task";

const Workspace = (props) => {

    return(
        <Box sx={{
            flex: 1,
            width: '100%',
        }}>
            <ReflexContainer orientation="vertical" >

                <ReflexElement className="left-pane" minSize={50}>
                    <Tasks/>
                </ReflexElement>

                <ReflexSplitter/>

                <ReflexElement className="right-pane" minSize={50}>
                    <Task/>
                </ReflexElement>

            </ReflexContainer>
        </Box>
    )
}

export default Workspace;