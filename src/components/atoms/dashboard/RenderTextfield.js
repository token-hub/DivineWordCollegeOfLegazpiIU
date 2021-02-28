import React, {useContext, useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {makeStyles} from '@material-ui/core/styles';
import {DashboardContext} from '../../../contexts';
import {initialStates} from '../../../contexts';
import {updateInitialInputState, currentDate} from '../../../helpers';
import {handleInputChange, capitalizeAllFirstLetterAndTransform} from '../../../helpers';

const useStyles = makeStyles({
    input: {
        marginBottom: '1.5rem',
        width: '100%',
    },
    hiddenInput: {
        display: 'none'
    }
});

const RenderTextfield = ({ data = [] }) => {

    let initialState = [];

    const [select, setSelect] = useState(initialState);

    const {setStates, states: {inputFields, errors}} = useContext(DashboardContext);

    const {input, hiddenInput} = useStyles();

    useEffect(()=>{
        setSelect(initialState);
    }, [])

    const handleSelectChange = e => {
        const {name, value} = e.target;

        setStates(prevState => ({
            ...prevState,
            ['inputFields']: {
                ...prevState.['inputFields'],
                [name]: value
            }
        }))

        setSelect(e.target.value);
    }
   
    const renderNonSelectTextField = (index, label, name, type, value, onChange, style, extra) => {
        return <TextField 
            key={index}
            id={label}
            label={label}
            name={name}
            onChange={onChange}
            required={true}
            type={type}
            value={value} 
            fullWidth={true}
            className={style}
            variant="outlined"
            {...extra}
        />
    }
    
    const renderSelectTextField = (index, label, value, options, onChange, style, extra) => {
        const useId = Array.isArray(options);
        return <FormControl variant='outlined' required key={index} className={style} {...extra}>
            <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
            <Select
                label={label}
                labelId={label}
                id={label}
                name={label}
                value={value}
                onChange={onChange}
                required
                {...extra}
            >
                {options.values.map(({id, description}, index) => {
                    const value = useId ? id : description;
                    return  <MenuItem key={index} value={value}>{capitalizeAllFirstLetterAndTransform(description, '-', ' ')}</MenuItem>
                })}
            </Select>    
        </FormControl>
    }
  
    return <>
            {data.map( ({name, value, type}, index) => {
                const isTwoWordNameOrNot = name.split(' ').join('_');
                let extra = {};
                const setInput = type === 'hidden' ? hiddenInput : input;
                const date = currentDate();

                if (type === 'date') extra = {...extra, InputLabelProps: {shrink: true}, inputProps: {min: date}};
                if (type === 'textarea') extra = {...extra, rows: 10, multiline: true, style: {width: '100%'}};
                if (type === 'select') {
                    if (value.multiple) extra = {...extra, multiple: true}
                    if (value.default_value) initialState = value.default_value;
                }
                    
                if (errors) {
                    Object.keys(errors).forEach(key => {
                        if (key === isTwoWordNameOrNot) {
                            extra = {...extra, error: true, helperText: errors[key][0]}
                        }
                    })
                }
                
                const getDefaultValues = type==='select'? select: value;
                updateInitialInputState(initialStates.inputFields, isTwoWordNameOrNot, getDefaultValues);

                return type === 'select'
                ? renderSelectTextField(index, name, inputFields[isTwoWordNameOrNot], value, handleSelectChange, setInput, extra)
                : renderNonSelectTextField(index, name, isTwoWordNameOrNot, type, inputFields[isTwoWordNameOrNot], handleInputChange('inputFields', setStates), setInput, extra)
            })}
        </>
}

export default RenderTextfield
