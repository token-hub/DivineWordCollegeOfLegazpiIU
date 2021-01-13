import React from 'react'
import {Base} from '../../templates/web';
import {Banner, SharedGrid} from '../../../components/molecules/web'

const BaseWithBanner = ({banner, root, children}) => {

    const {img, alt} = banner;

    return (
        <Base>
            <Banner img={img} alt={alt} />
            <SharedGrid root={root}>
                {children}
            </SharedGrid>
        </Base>
    )
}

export default BaseWithBanner
