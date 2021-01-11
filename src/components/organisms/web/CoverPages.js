import React from 'react'
import Hidden from '@material-ui/core/Hidden';
import {others} from '../../../assets/images';
import {CoverPage} from '../../molecules/web';

const CoverPages = () => {
    return (
       <>
            <Hidden only={['xs','md','lg','xl']}>
                <CoverPage source={others[0].img} alt={others[0].alt} />
            </Hidden>
            <Hidden only={['sm','md','lg','xl']}>
                <CoverPage source={others[1].img} alt={others[1].alt} />
            </Hidden>
       </>
    )
}

export default CoverPages
