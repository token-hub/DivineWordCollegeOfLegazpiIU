import React from 'react'
import {BaseWithBannerAndUpdates} from '../../components/templates/web';
import {RenderTable} from '../../components/molecules/web'
import {navlinks, banners} from '../../data/web';
import {Paragraph} from '../../components/atoms/web';
import {alumni} from '../../data/web';

const Alumni = () => { 

    const {officers} = alumni;

    return (
        <BaseWithBannerAndUpdates banner={banners.AlumniBannerObj}>
            <Paragraph variant='h6' color='primary' bold>
                LIST OF DWCL GENERAL ALUMNI ASSOCAITION INC.
            </Paragraph>

            <RenderTable header='DWCL GAA OFFICERS (SY 2018-2020)' tableBody={officers} size='small' />
        </BaseWithBannerAndUpdates>
    )
}

export default Alumni
