import React from 'react'
import {BaseWithBannerAndUpdates} from '../../../components/templates/web';
import {UpdateContainer} from '../../../components/molecules/web';
import {research} from '../../../data/web/StudentServices';
import {banners} from '../../../data/web';

const Research = () => { 

    const {researchData} = research;

    return (
        <BaseWithBannerAndUpdates banner={banners.StudentServicesBannerObj}>
          {researchData.map((data,index) => 
            <UpdateContainer color='primary' key={index} {...data} /> 
          )}
        </BaseWithBannerAndUpdates>
    )
}

export default Research
