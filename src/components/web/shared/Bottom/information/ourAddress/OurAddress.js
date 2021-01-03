import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   header: {
        fontWeight: 600
    },
}));

const OurAddress = () => {

    const {header} = useStyles();

    return (
        <Fragment>
            <Typography gutterBottom variant="h6" className={header}>
                Our Campus Address
            </Typography>
            <Typography variant="subtitle1" className={header}>
                North Campus
            </Typography>
            <Typography gutterBottom variant="subtitle2">
                Capt. F. Aquende Drive, Cruzada, Legazpi City 4500 Philippines
            </Typography>
            <Typography variant="subtitle1" className={header}>
                South Campus
            </Typography>
            <Typography gutterBottom variant="subtitle2">
                cor.J.P Rizal and Fr. J.L. Bates St., Albay District, Legazpi City 4500 Philippines
            </Typography>
        </Fragment>
    )
}

export default OurAddress
