import React, {useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {DashboardContext} from '../../../contexts';
import {stringTransform} from '../../../helpers';

const useStyles = makeStyles({
    input: {
        marginBottom: '1.5rem',
    },
    hiddenInput: {
        display: 'none'
    }
});

const RenderTextfield = ({ data }) => {

    const {handleInputChange, states: {inputFields}, updateInitialInputState} = useContext(DashboardContext);

    const {input, hiddenInput} = useStyles();

    return (
        <>
            {
                data.map( ({name, value, type}, index) => {
                    const isTwoWordNameOrNot = name.split(' ').join('_');
                    updateInitialInputState(isTwoWordNameOrNot, value);
                    
                    const setInput = type === 'hidden' ? hiddenInput : input;

                    return <TextField 
                                key={index}
                                id={name}
                                label={name}
                                name={isTwoWordNameOrNot}
                                onChange={handleInputChange}
                                required={true}
                                type={type}
                                value={inputFields[name]} 
                                fullWidth={true}
                                className={setInput}
                                variant="outlined"
                            />
                })
            }
        </>
    )
}

export default RenderTextfield
