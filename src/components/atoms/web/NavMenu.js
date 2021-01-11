import React from 'react'
import Menu from 'material-ui-popup-state/HoverMenu'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    noVerticalPadding: {
        padding: 0,
    }
})

const NavMenu = ({ children, ...rest }) => {

    const {noVerticalPadding} = useStyles();

    return (
        <Menu
            getContentAnchorEl={null}
            {...rest}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            MenuListProps={{ className: noVerticalPadding }}
            classes={{ list: noVerticalPadding }}
            >
            {children}
        </Menu>
    )
}

export default NavMenu
