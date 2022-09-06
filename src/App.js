import './App.css';
import Workspace from "./modules/workspace/workspace";
import Sidebar from "./modules/sidebar/sidebar";
import AppContainer from "./utils/appContainer/app-container";
import Tasks from "./pages/tasks/tasks";
import Task from "./pages/task/task";
import Tables from "./pages/tables/tables";
import Text from "./pages/text/text";
import React, {useEffect, useReducer, useState} from "react";


export const modulesMap = {
    tasks: Tasks,
    task: Task,
    tables: Tables,
    text: Text
}

function App() {


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
            case 'setState':
                return action.payload;
            case 'removeFirstPane':
                return {
                    w1: state.w2,
                    w2: null
                }
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

    const [stepsState, setStepsState] = useState([]);

    useEffect(() => {
        setStepsState([...stepsState, state])
    }, [state]);

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

    const goBack = () => {
        console.log(stepsState);
        dispatch({
            type: 'setState',
            payload: stepsState[stepsState.length - 2]
        });

        const updatedState = [...stepsState];
        updatedState.pop();
        updatedState.pop();
        setStepsState(updatedState);
    }

    return (
        <AppContainer>
            <Sidebar dispatchRouteEvent={dispatch} state={state} onInitNewModule={onInitNewModule} goBack={goBack}/>
            <Workspace dispatchRouteEvent={dispatch} state={state} onInitNewModule={onInitNewModule}/>
        </AppContainer>
    );
}

export default App;
