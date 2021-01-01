import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    input: {
        marginBottom: '1.5rem',
    },
});

const RenderTextfield = ({ data }) => {

    const {input} = useStyles();

    return (
        <>
            {
                data.map( ({item, value}, index) => (
                    <TextField 
                        key={index}
                        id={item}
                        label={item}
                        required={true}
                        type={value} 
                        fullWidth={true}
                        className={input}
                        variant="outlined"
                    />
                ))
            }
        </>
    )
}

export default RenderTextfield
