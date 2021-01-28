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

const RenderTextfield = ({ data = [] }) => {

    const {handleInputChange, states: {inputFields, errors}, updateInitialInputState} = useContext(DashboardContext);

    const {input, hiddenInput} = useStyles();

    return (
        <>
            {
                data.map( ({name, value, type}, index) => {
                    const isTwoWordNameOrNot = name.split(' ').join('_');
                    updateInitialInputState(isTwoWordNameOrNot, value);
                    
                    let extra = {};
                   if (errors) {
                    Object.keys(errors).forEach(key => {
                        if (key === isTwoWordNameOrNot) {
                            extra = {...extra, error: true, helperText: errors[key][0]}
                        }
                    })
                   }
                   
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
                                {...extra}
                            />
                })
            }
        </>
    )
}

export default RenderTextfield
