import React from 'react'
import Typography from '@material-ui/core/Typography';
import {LinkTextIcon} from '../../atoms/web';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {ourQuicklinks} from '../../../data/web';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
});

const OurQuicklinks = () => {

    const {bold} = useStyles();

    return (
       <>
           <Typography gutterBottom variant="h6" className={bold}>
                Our Quicklinks
            </Typography>

            <List>
                {
                    ourQuicklinks.map((data, index) => 
                        <LinkTextIcon {...data} key={index}/>
                    )
                }
            </List>
       </>
    )
}

export default OurQuicklinks
