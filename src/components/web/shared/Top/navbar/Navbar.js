import React from 'react'
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from 'material-ui-popup-state/HoverMenu'
import {menus} from '../../../data/navlinks'; 
import {
    usePopupState,
    bindHover,
    bindMenu,
} from 'material-ui-popup-state/hooks'
import { 
    stringTransform,
    isCurrentPage,
    isHomePage
} from '../../../../../helpers';
  
const useStyles = makeStyles(theme => ({
    linkClass: {
        "&:hover": {
            textDecoration: 'none'
        }
    },
    linkText: {
        fontWeight: 600,
        color: 'black',
        cursor: 'pointer',
        padding: '.8rem',
        width: 'inherit',

        "&:hover": {
            color: 'white',
        }
    },
    linkContainer: {
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            cursor: 'pointer',
        }
    },
    currentPage: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        cursor: 'pointer',
    },
    currentPageText: {
        fontWeight: 600,
        color: 'white',
        cursor: 'pointer',
        padding: '.8rem',
        width: 'inherit',
    },
    menuItem: {
      backgroundColor: theme.palette.primary.dark,
      color: 'white',
      borderRadius: '0px',
      borderBottom: '1px solid black',
      fontSize: '.8rem',
      margin: 0,

      "&:hover":{
        backgroundColor: '#252c35',
      }
    },
    noVerticalPadding: {
       padding: 0,
    }
}));

const Navbar = () => {

    const {pathname} = useLocation();

    const path = stringTransform(pathname,'-', '_').toLowerCase();

    const state = {
        about_us : usePopupState({ variant: 'popover', popupId: 'about_us' }),
        admission : usePopupState({ variant: 'popover', popupId: 'admission' }),
        academics : usePopupState({ variant:  'popover', popupId: 'academics' }),
        student_services : usePopupState({ variant: 'popover', popupId: 'student_services' }),
        updates : usePopupState({ variant: 'popover', popupId: 'updates' }),
    }

    const {linkClass,  linkText, noVerticalPadding, linkContainer, menuItem, currentPage, currentPageText} = useStyles();
    
    return (
        <Grid container justify='center'>
            {
                Object.keys(menus).map((key, index)=> {
            
                const { link, items } = menus[key];
                
                const getState = items ? state[key] : '';

                let setPage = linkContainer;
                let setLinkText = linkText;
                    
                if (isCurrentPage(key, path)) {
                   setPage =  currentPage;
                   setLinkText = currentPageText
                }

            return  (<div key={index} className={setPage}>
                            <Link
                                href={link}
                                className={linkClass}
                                {...bindHover(getState)}
                            > 
                                <Typography variant='subtitle1' className={ setLinkText }>
                                    {stringTransform(key, '_', ' ')}
                                </Typography>
                            </Link>
                           
                            {items !== undefined
                                    ?<Menu
                                        getContentAnchorEl={null}
                                        {...bindMenu(getState)}
                                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                                        MenuListProps={{ className: noVerticalPadding }}
                                        classes={{
                                            list: noVerticalPadding,
                                          }}
                                        >
                                        <MenuItem key="placeholder" style={{display: "none"}} />
                                        {
                                            items.map(({title, link}, index) => (
                                                <MenuItem dense={true} component='a' href={link} className={menuItem} key={index}>{title}</MenuItem>
                                            ))  
                                        }
                                    </Menu> 
                                    : ''}
                        </div>)
                })
            }
        </Grid>
    )
}

export default Navbar
