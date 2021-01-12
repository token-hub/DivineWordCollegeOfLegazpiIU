import React from 'react'
import { useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {LinkTextNavlink, NavMenu, NavMenuItem} from '../../atoms/web/index';
import {navlinks} from '../../../data/web/index';
import { 
    stringTransform,
    isCurrentPage,
} from '../../../helpers';
 
import {
    usePopupState,
    bindHover,
    bindMenu,
} from 'material-ui-popup-state/hooks'

const useStyles = makeStyles(theme => ({
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
}))


const Navbar = () => {

    const {linkContainer, currentPage, currentPageText, linkText} = useStyles();
    
    const {pathname} = useLocation();

    const path = stringTransform(pathname,'-', '_').toLowerCase();

    const state = {
        about_us : usePopupState({ variant: 'popover', popupId: 'about_us' }),
        admission : usePopupState({ variant: 'popover', popupId: 'admission' }),
        academics : usePopupState({ variant:  'popover', popupId: 'academics' }),
        student_services : usePopupState({ variant: 'popover', popupId: 'student_services' }),
        updates : usePopupState({ variant: 'popover', popupId: 'updates' }),
    }

    return (
        <Grid container justify='center'>
            {
                Object.keys(navlinks).map((key, index)=> {
                   
                    const { link, items } = navlinks[key];
                        
                    const getState = items ? state[key] : '';
    
                    let setPage = linkContainer;
                    let setLinkText = linkText;
                        
                    if (isCurrentPage(key, path)) {
                       setPage =  currentPage;
                       setLinkText = currentPageText
                    }

                    return (
                        <Grid item key={index} className={setPage}>
                            <LinkTextNavlink link={link} setLinkText={setLinkText} {...bindHover(getState)}>
                                {stringTransform(key, '_', ' ')}
                            </LinkTextNavlink>

                            {items !== undefined &&
                                    <NavMenu {...bindMenu(getState)} >
                                        <NavMenuItem key="placeholder" style={{display: "none"}} />
                                        {
                                            items.map(({title, link}, index) => (
                                                <NavMenuItem link={link} key={index}title={title}></NavMenuItem>
                                            ))  
                                        }
                                    </NavMenu> 
                                }
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default Navbar
