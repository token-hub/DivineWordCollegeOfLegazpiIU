import React from 'react'
import {BaseWithBannerAndUpdates} from '../../components/templates/web';
import {banners} from '../../data/web';
import {Paragraph} from '../../components/atoms/web';

const Gallery = () => { 

    return (
        <BaseWithBannerAndUpdates banner={banners.GalleryBannerObj}>
            <Paragraph>
            Please visit us again as we are currently updating information on this page. <br />
            Thank you.
            </Paragraph>
        </BaseWithBannerAndUpdates>
    )
}

export default Gallery
