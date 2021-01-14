import React from 'react'
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {contactUs} from '../../../data/web';

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
})

const RenderUpdateForm = () => {

    const {fields} = contactUs;

    const {white, input} = useStyles();

    return (
       <>
            <Grid container justify='center' item md={9}>
                <form style={{ width: '100%' }}>    
                {fields.map( ({item, value}, index) => {
                        let extra = {};
                        if (value === 'textarea') Object.assign(extra, {rows: 10, multiline: true, style: {width: '100%'}  })
                        
                        return (
                            <TextField 
                                key={index}
                                id="outlined-basic" 
                                type={value}
                                label={item} 
                                variant="outlined"
                                required={true}
                                fullWidth={true}
                                size='small' 
                                InputProps={{ className: input }}
                                InputLabelProps={{ className: white }}
                                classes={{ root: input }}
                                {...extra}
                            />
                        )
                })}
                </form>
            </Grid>
            <Grid item md={3} />
       </>
    )
}

export default RenderUpdateForm
