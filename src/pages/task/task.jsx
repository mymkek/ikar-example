import React from 'react';
import Box from '@mui/material/Box';
import {Button, Typography} from "@mui/material";
import {moduleNames} from "../../utils/moduleNames";



const Task = (props) => {
    const {onClick} = props;

    const onTableInit = (e) => {
        onClick(moduleNames.tables, e);
    }

    const onTextInit = (e) => {
        onClick(moduleNames.text, e);
    }

    return(
        <Box component="div"
             sx={{
                 padding: '20px'
             }}
        >
            <h1>
                Задача что нибудь сделать
            </h1>

            <Box component="main" sx={{ py: 2 }}>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
                    fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
                    aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
                    cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
                    at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
                    Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et.
                </Typography>
            </Box>
            <Box component="div" sx={{ pb: 2 }}>
                <Button size="small" onClick={onTableInit}>Перейти к таблицам</Button>
            </Box>
            <Box component="main" sx={{ py: 2 }}>
                <Typography>
                    Qui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
                    Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
                    reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
                    cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
                    consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
                    Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
                    dolores sunt inventore perferendis, aut sapiente modi nesciunt.
                </Typography>
            </Box>
            <Box component="div" sx={{ pb: 2 }}>
                <Button size="small" onClick={onTextInit}>Перейти к тексту</Button>
            </Box>
        </Box>
    )
}

export default Task;