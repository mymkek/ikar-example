import React, {useEffect, useReducer} from 'react';
import Box from '@mui/material/Box';
import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement
} from 'react-reflex'
import CloseIcon from '@mui/icons-material/Close';
import 'react-reflex/styles.css'
import Tasks from "../../pages/tasks/tasks";
import Task from "../../pages/task/task";
import Tables from "../../pages/tables/tables";
import Text from "../../pages/text/text";
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

    const modulesMap = {
        tasks: Tasks,
        task: Task,
        tables: Tables,
        text: Text
    }

    const panes = {
        w1: null,
        w2: null,
    };


    const reducer = (state, action) => {
        switch (action.type) {
            case 'addFirstPane':
                return {
                    ...state,
                    w1: action.payload,
                };
            case 'addSecondPane':
                return {
                    ...state,
                    w2: action.payload,
                };
            case 'removeSecondPane':
                return {
                    ...state,
                    w2: null
                }
            case 'movePaneToLeft':
                return {
                    ...state,
                    w1: state.w2,
                    w2: action.payload,
                }
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, panes);

    const onInitNewModule = (moduleName, e) => {
        const isCtrlKeyPressed = e.ctrlKey;
        const Component = modulesMap[moduleName];
        const currentPane = e.target.closest('.workspace-pane-inner').id;

        if (isCtrlKeyPressed) {
            dispatch({
                type: currentPane === 'right-pane-inner' ? 'movePaneToLeft' : 'addSecondPane',
                payload: <Component onClick={onInitNewModule}/>
            })
        } else {
            dispatch({
                type: currentPane === 'right-pane-inner' ? 'addSecondPane' : 'addFirstPane',
                payload: <Component onClick={onInitNewModule}/>
            })
        }
    }

    useEffect(() => {
        const tasksWindow = <Tasks onClick={onInitNewModule}/>;
        dispatch({
            type: 'addFirstPane',
            payload: tasksWindow
        })
    }, []);


    const removeSecondPane = () => {
        dispatch({
            type: 'removeSecondPane',
        })
    }

    return (
        <Box sx={{
            flex: 1,
            width: '100%',
        }}>
            <ReflexContainer orientation="vertical">

                {state?.w1 &&
                    <ReflexElement className="left-pane" minSize={50}>
                        <Box id="left-pane-inner" className="workspace-pane-inner">
                            {state.w1}
                        </Box>
                    </ReflexElement>
                }
                {state?.w2 &&
                    <ReflexSplitter propagate={true}/>
                }
                {state?.w2 &&
                    <ReflexElement className="right-pane" minSize={50}>
                        <Box id="right-pane-inner" className="workspace-pane-inner">
                            <CloseButton size="small" title="Закрыть окно"
                                         onClick={removeSecondPane}><CloseIcon/></CloseButton>
                            {state.w2}
                        </Box>
                    </ReflexElement>
                }


            </ReflexContainer>
        </Box>
    )
}

export default Workspace;