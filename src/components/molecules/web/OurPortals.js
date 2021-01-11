import React from 'react'
import Typography from '@material-ui/core/Typography';
import {LinkTextIcon} from '../../atoms/web';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {ourPortals} from '../../../data/web';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
});

const OurPortals = () => {

    const {bold} = useStyles();

    return (
       <>
           <Typography gutterBottom variant="h6" className={bold}>
                Our Portals
            </Typography>

            <List>
                {
                    ourPortals.map((data, index) => 
                        <LinkTextIcon {...data} key={index}/>
                    )
                }
            </List>
       </>
    )
}

export default OurPortals
