import React, {useEffect, useReducer} from 'react';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import 'react-reflex/styles.css'
import Tasks from "../../pages/tasks/tasks";
import styled from "@emotion/styled";

const CloseButton = styled.button`
  color: black;
  cursor: pointer;
  position: absolute;
  right: 0;
  background: transparent;
  border: none;
  opacity: 0.5;
`

const Workspace = (props) => {

    const {dispatchRouteEvent, state, onInitNewModule} = props;



    useEffect(() => {
        const tasksWindow = <Tasks onClick={onInitNewModule}/>;
        dispatchRouteEvent({
            type: 'addFirstPane',
            payload: tasksWindow
        })
    }, []);


    const removeSecondPane = () => {
        dispatchRouteEvent({
            type: 'removeSecondPane',
        })
    }

    const removeFirstPane = () => {
        dispatchRouteEvent({
            type: 'removeFirstPane',
        })
    }

    return (
        <Box sx={{
            flex: 1,
            width: '100%',
            display: 'flex'
        }}>


                {state?.w1 &&
                        <Box
                            sx={{
                                width: state?.w2 ? '30%' : '100%',
                                overflowY: 'scroll',
                                position: 'relative'
                            }}
                            component="div"
                            id="left-pane-inner" className="workspace-pane-inner">
                            {state?.w2 &&
                                <CloseButton size="small" title="Закрыть окно"
                                             onClick={removeFirstPane}><CloseIcon/></CloseButton>
                            }

                            {state.w1}
                        </Box>
                }
                {state?.w2 &&
                        <Box
                            sx={{
                                width: '70%',
                                height: '100%',
                                borderLeft: '1px solid #bbb',
                                position: 'relative'
                            }}
                            component="div"
                            id="right-pane-inner" className="workspace-pane-inner">
                            <CloseButton size="small" title="Закрыть окно"
                                         onClick={removeSecondPane}><CloseIcon/></CloseButton>
                            {state.w2}
                        </Box>
                }


        </Box>
    )
}

export default Workspace;