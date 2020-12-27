import React, {useState, useEffect} from 'react'
import {menus} from '../data/links'; 
import {stringTransform} from '../../../helpers';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from 'material-ui-popup-state/HoverMenu'
import {
    usePopupState,
    bindHover,
    bindMenu,
} from 'material-ui-popup-state/hooks'
  
import { makeStyles } from '@material-ui/core/styles';

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
    const state = {
        about_us : usePopupState({ variant: 'popover', popupId: 'about_us' }),
        admission : usePopupState({ variant: 'popover', popupId: 'admission' }),
        academics : usePopupState({ variant:  'popover', popupId: 'academics' }),
        student_services : usePopupState({ variant: 'popover', popupId: 'student_services' }),
        updates : usePopupState({ variant: 'popover', popupId: 'updates' }),
    }

    const {linkClass,  linkText, noVerticalPadding, linkContainer, linkContainerHovered, menuItem} = useStyles();
    

    return (
        <Grid container justify='center'>
            {
                // key =  home, about_us, admission ...
                Object.keys(menus).map((key, index)=> {
            
                const { link, items } = menus[key]; // { link: {}, items:[] }
                
                const getState = items ? state[key] : '';

            return  (
                        <div key={index} className={ linkContainer }>
                            <Link
                                href={link}
                                className={linkClass}
                                {...bindHover(getState)}
                            > 
                                <Typography variant='subtitle1' className={ linkText }>
                                    {stringTransform(key)}
                                </Typography>
                            </Link>
                           
                            {
                                items !== undefined
                                    ?<Menu
                                        getContentAnchorEl={null}
                                        {...bindMenu(getState)}
                                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                                        MenuListProps={{ className: noVerticalPadding }}
                                        classes={{
                                            list: noVerticalPadding, // class name, e.g. `classes-nesting-root-x`
                                          }}
                                        >
                                        <MenuItem key="placeholder" style={{display: "none"}} />
                                        {
                                            items.map((item, index) => (
                                                <MenuItem dense={true} className={menuItem} key={index}>{item}</MenuItem>
                                            ))  
                                        }
                                    </Menu> 
                                    : ''
                            }
                        </div>
                    )
                })
            }
        </Grid>
    )
}

export default Navbar
