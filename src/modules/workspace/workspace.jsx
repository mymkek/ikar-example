import React, {useEffect, useReducer} from 'react';
import Box from '@mui/material/Box';
import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement
} from 'react-reflex'

import 'react-reflex/styles.css'
import Tasks from "../../pages/tasks/tasks";
import Task from "../../pages/task/task";
import Tables from "../../pages/tables/tables";
import Text from "../../pages/text/text";

const Workspace = (props) => {

    const modulesMap = {
        tasks: Tasks,
        task: Task,
        tables: Tables,
        text: Text
    }

    const windows = {
        w1: null,
        w2: null,
        windowClicked: null
    };


    const reducer = (state, action) => {
        switch (action.type) {
            case 'addFirstWindow':
                return {
                    ...state,
                    w1: action.payload,
                };
            case 'addSecondWindow':
                return {
                    ...state,
                    w2: action.payload,
                };
            case 'setWindowClicked':
                return {
                    ...state,
                    windowClicked: action.payload,
                }
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, windows);

    const onInitNewModule = (moduleName, e) => {
        const isCtrlKeyPressed = e.ctrlKey;
        const Component = modulesMap[moduleName];


        if (isCtrlKeyPressed) {
            dispatch({
                type: 'addSecondWindow',
                payload: <Component onClick={onInitNewModule}/>
            })
        } else {
            dispatch({
                type: 'addFirstWindow',
                payload: <Component onClick={onInitNewModule}/>
            })
        }
    }

    useEffect(() => {
        const tasksWindow = <Tasks onClick={onInitNewModule}/>;
        dispatch({
            type: 'addFirstWindow',
            payload: tasksWindow
        })
    }, []);

    const onWindowClick = (window) => {
        dispatch({
            type: 'setWindowClicked',
            payload: window
        })
    }

    return (
        <Box sx={{
            flex: 1,
            width: '100%',
        }}>
            <ReflexContainer orientation="vertical">

                {state?.w1 &&
                    <ReflexElement className="left-pane" minSize={50} >
                        <Box onClick={() => onWindowClick('w1')}>
                            {state.w1}
                        </Box>
                    </ReflexElement>
                }
                {state?.w2 &&
                    <ReflexSplitter propagate={true}/>
                }
                {state?.w2 &&
                    <ReflexElement className="right-pane" minSize={50}>
                        <Box onClick={() => onWindowClick('w2')}>
                            {state.w2}
                        </Box>
                    </ReflexElement>
                }


            </ReflexContainer>
        </Box>
    )
}

export default Workspace;