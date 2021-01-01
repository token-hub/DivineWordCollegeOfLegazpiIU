import React from 'react'
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Base from '../base';
import Header from '../../shared/header';
// import Appbar from '../../../web/shared/Top/appbar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#5F5AEF',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
        top: 'initial',
      },
      drawerContainer: {
        overflow: 'auto',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      disableMinHeight: {
          minHeight: '0'
      }
}));

const drawerWidth = 240;

const DashboardLayout = ({ children }) => {

    const {bold, root, drawer, drawerPaper, drawerContainer, disableMinHeight} = useStyles();

    return (
        <Base root={root}>
            <Header />
            <Grid md={4}>
            <Drawer
                className={drawer}
                variant="permanent"
                classes={{
                paper: drawerPaper,
                }}
            >
                <Toolbar classes={{ root: disableMinHeight }} />
                <div className={drawerContainer}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                </div>
            </Drawer>
            </Grid>
            <Grid md={8}>
                {children}
            </Grid>
        </Base>
    )
}

export default DashboardLayout
