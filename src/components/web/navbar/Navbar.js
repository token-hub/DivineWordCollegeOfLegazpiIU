import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import ListSubheader from '@material-ui/core/ListSubheader';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    listItems: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'pink',
        padding: 0
    },
    listItem: {
        fontWeight: 600,
        display: 'flex',
        width: '100%'
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        width: 'inherit',
        cursor: 'pointer',

        "&:hover": {
            textDecoration: 'none',
            color: 'white',
            backgroundColor: theme.palette.primary.main
        }
    },
    absolute: {
        position: 'absolute',
        bottom: 0,
    },
    hidden: {
        visibility: 'hidden',
        maxHeight: 0
    }
}));

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const {listItems, listItem, link, absolute, hidden} = useStyles();

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Grid container justify='center'>
            <List className={listItems} >
                <ListItem component={Link} to="#" className={link}>
                    <ListItemText >
                        <Typography variant='subtitle1' className={listItem}>HOME</Typography>
                    </ListItemText>
                </ListItem>
                <div>
                    <ListItem  onMouseOver={handleClick} onMouseOut={handleClick} component={Link} to="#" className={link}>
                    
                    <Grid container item direction='column'>
                         <ListItemText >
                            <Typography variant='subtitle1' className={listItem}>ABOUT US</Typography>
                        </ListItemText>

                        <List component="div" disablePadding >
                            <ListItemText >
                                <Typography variant='subtitle1' className={listItem}>ABOUT US</Typography>
                            </ListItemText>
                        </List>
                    </Grid>
                        

                        {/* <div className={absolute}>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemText >
                                        <Typography variant='subtitle1' className={listItem}>ABOUT US</Typography>
                                    </ListItemText>
                                </List>
                            </Collapse>
                        </div> */}



                  </ListItem> 
                </div>
               
                
               

                <ListItem component={Link} to="#" className={link}>
                    <ListItemText >
                        <Typography variant='subtitle1' className={listItem}>ADMISSION</Typography>
                    </ListItemText>
                </ListItem>

                <ListItem component={Link} to="#" className={link}>
                    <ListItemText >
                        <Typography variant='subtitle1' className={listItem}>ACADEMICS</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem component={Link} to="#" className={link}>
                    <ListItemText >
                        <Typography variant='subtitle1' className={listItem}>STUDENT SERVICES</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem component={Link} to="#" className={link}>
                    <ListItemText >
                        <Typography variant='subtitle1' className={listItem}>CAREER</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem component={Link} to="#" className={link}>
                    <ListItemText>
                        <Typography variant='subtitle1' className={listItem}>GALLERY</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem component={Link} to="#" className={link}>
                    <ListItemText>
                        <Typography variant='subtitle1' className={listItem}>UPDATES</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem component={Link} to="#" className={link}>
                    <ListItemText>
                        <Typography variant='subtitle1' className={listItem}>CONTACT US</Typography>
                    </ListItemText>
                </ListItem>
                <ListItem component={Link} to="#" className={link}>
                    <ListItemText>
                        <Typography variant='subtitle1' className={listItem}>ALUMNI</Typography>
                    </ListItemText>
                </ListItem>
            </List>
        </Grid>
    )
}

export default Navbar
