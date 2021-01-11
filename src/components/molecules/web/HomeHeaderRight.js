import React from 'react'
import {Image} from '../../atoms/web/index';
import {makeStyles} from '@material-ui/core/styles';
import dwclLogoWithText from '../../../assets/images/others/logo-with-text.png';

const useStyles = makeStyles({
    img: {
        maxWidth: '100%',
        maxHeight: '100%',
        backgroundSize: 'cover',
    },
});

const HomeHeaderRight = () => {

    const {img} = useStyles();

    return <Image className={img} source={dwclLogoWithText} alt='DWCL logo with text'/>
}

export default HomeHeaderRight
