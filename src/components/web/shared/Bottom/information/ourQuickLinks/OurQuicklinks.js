import React, {Fragment} from 'react'
import Typography from '@material-ui/core/Typography';
import clsx from  'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { quickLinks } from '../../../../data/footerQuicklinks';

const useStyles = makeStyles(theme => ({
    noPadding: {
        padding: 0
    },
    hovered: {
        "&:hover": {
            color: '#ffd877'
        }
    },
    header: {
        fontWeight: 600
    },
    listIcon: {
        minWidth: 0,
        color: 'white',
    },
}));

const OurQuicklinks = () => {

    const {header, hovered, noPadding, listIcon} = useStyles();

    return (
        <Fragment>
            <Typography gutterBottom variant="h6" className={header}>
                Quick Links
            </Typography>
            <List>
            {
                quickLinks.map(({title, link}, index) => (
                    <ListItem key={title} component='a' href={link} className={clsx(noPadding, hovered)}>
                        <ListItemIcon className={listIcon}>
                            <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={title} />
                    </ListItem>
                ))
            }
            </List>
        </Fragment>
    )
}

export default OurQuicklinks
