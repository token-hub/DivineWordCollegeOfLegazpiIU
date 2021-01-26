import {useSnackbar} from 'notistack';

const useSnackbarHandler = () => {
    const {enqueueSnackbar} = useSnackbar();

    // variant could be success, error, warning, info, or default
    return (message, variant='default') => {
        enqueueSnackbar(message, {variant});
    } 
}

export {useSnackbarHandler}