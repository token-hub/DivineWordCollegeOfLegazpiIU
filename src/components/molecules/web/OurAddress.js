import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   bold: {
        fontWeight: 600
    },
});

const OurAddress = () => {

    const {bold} = useStyles();

    return (
        <>
            <Typography gutterBottom variant="h6" className={bold}>
                Our Campus Address
            </Typography>
            <Typography variant="subtitle1" className={bold}>
                North Campus
            </Typography>
            <Typography gutterBottom variant="subtitle2">
                Capt. F. Aquende Drive, Cruzada, Legazpi City 4500 Philippines
            </Typography>
            <Typography variant="subtitle1" className={bold}>
                South Campus
            </Typography>
            <Typography gutterBottom variant="subtitle2">
                cor.J.P Rizal and Fr. J.L. Bates St., Albay District, Legazpi City 4500 Philippines
            </Typography>
        </>
    )
}

export default OurAddress
