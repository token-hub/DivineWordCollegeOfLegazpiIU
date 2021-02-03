import React, {useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {contactUs} from '../../../data/web';
import {WebContext} from '../../../contexts';
import {stringTransform, updateInitialInputState, handleInputChange} from '../../../helpers';
import {initialStates} from '../../../contexts';

const useStyles = makeStyles({
    input: {
        display: 'flex',
        color: 'white',
        direction: 'row',
        marginBottom: '1rem',
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            borderColor: 'white',
            },
            '&:hover fieldset': {
            borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
            borderColor: 'white',
            },
        },
    },
    white: {
        color: 'white'
    },
    submitButton: {
        border: '1px solid white'
    }
})

const RenderUpdateForm = () => {
    const {handleContactUsForm, states, setStates} = useContext(WebContext);

    const {fields} = contactUs;

    const {white, input, submitButton} = useStyles();

    return (
       <>
            <Grid container justify='center' item md={9}>
                <form style={{ width: '100%' }} onSubmit={handleContactUsForm}>    
                {fields.map( ({item, value}, index) => {
                        const fieldName = stringTransform(item, ' ', '_').toLowerCase();
                        updateInitialInputState(initialStates.inputFields, fieldName);
                        let extra = {};
                        if (value === 'textarea') Object.assign(extra, {rows: 10, multiline: true, style: {width: '100%'}  })
                        
                        return (
                            <TextField 
                                key={index}
                                id="outlined-basic" 
                                type={value}
                                label={item}
                                name={fieldName}
                                value={states[fieldName]} 
                                onChange={handleInputChange('inputFields', setStates)}
                                variant="outlined"
                                // required={true}
                                fullWidth={true}
                                size='small' 
                                InputProps={{ className: input }}
                                InputLabelProps={{ className: white }}
                                classes={{ root: input }}
                                {...extra}
                            />
                        )
                })}
                    <Button type='submit' variant="contained" color="primary" className={submitButton}>Submit</Button>
                </form>
            </Grid>
            <Grid item md={3} />
       </>
    )
}

export default RenderUpdateForm
