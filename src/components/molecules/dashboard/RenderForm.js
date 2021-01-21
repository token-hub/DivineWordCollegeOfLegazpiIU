import React from 'react'
import Button from '@material-ui/core/Button';
import {RenderTextfield} from '../../atoms/dashboard';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    fields: {
        alignItems: 'center',
        height: '40%',
        width: '100%',
        padding: '1rem',
    },
    button: {
        height: '20%',
        width: '100%',
    },
})

const RenderForm = ({ inputFields, buttonTitle, handleSubmit }) => {

    const {fields, button} = useStyles();

    return (
        <form onSubmit={handleSubmit}>
            <div className={fields}>
                <RenderTextfield data={inputFields} />
            </div>

            <div className={button}>
                <Button type='submit' variant="contained" fullWidth size='large' color='secondary'>{buttonTitle}</Button>
            </div>
        </form>
    )
}

export default RenderForm
