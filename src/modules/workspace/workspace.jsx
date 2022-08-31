import React from 'react';
import Box from '@mui/material/Box';
import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement
} from 'react-reflex'

import 'react-reflex/styles.css'

const Workspace = (props) => {

    return(
        <Box sx={{
            flex: 1,
            width: '100%',
        }}>
            <ReflexContainer orientation="vertical" >

                <ReflexElement className="left-pane" minSize={50}>
                    <div className="pane-content">
                        Left Pane (resizeable)
                    </div>
                </ReflexElement>

                <ReflexSplitter/>

                <ReflexElement className="right-pane" minSize={50}>
                    <div className="pane-content">
                        Right Pane (resizeable)
                    </div>
                </ReflexElement>

            </ReflexContainer>
        </Box>
    )
}

export default Workspace;