import React from 'react'
import {BaseWithBannerAndUpdates} from '../../../components/templates/web';
import {UpdateContainer, ResearchPdf} from '../../../components/molecules/web';
import {research} from '../../../data/web/StudentServices';
import {banners} from '../../../data/web';
import {useParams} from 'react-router-dom';

const ManageResearch = () => { 
    const {pdf} = useParams();
    const {researchData} = research;
    
    return (
      <BaseWithBannerAndUpdates banner={banners.StudentServicesBannerObj}>
        { pdf 
            ? <ResearchPdf pdf={pdf} />
            : researchData.map((data,index) => 
                <UpdateContainer color='primary' key={index} {...data} /> 
              )
        }
      </BaseWithBannerAndUpdates>
    )
}

export default ManageResearch
