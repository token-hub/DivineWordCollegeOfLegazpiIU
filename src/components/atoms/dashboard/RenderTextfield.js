import React, {useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {DashboardContext} from '../../../contexts';

const useStyles = makeStyles({
    input: {
        marginBottom: '1.5rem',
    },
});

const RenderTextfield = ({ data }) => {

    const {handleInputChange, inputState, updateInitialInputState} = useContext(DashboardContext);

    const {input} = useStyles();

    return (
        <>
            {
                data.map( ({item, value}, index) => {
                    updateInitialInputState(item.toLowerCase());

                    return <TextField 
                            key={index}
                            id={item}
                            label={item}
                            name={item.toLowerCase()}
                            onChange={handleInputChange}
                            required={true}
                            type={value}
                            value={inputState[item]} 
                            fullWidth={true}
                            className={input}
                            variant="outlined"
                        />
                })
            }
        </>
    )
}

export default RenderTextfield
