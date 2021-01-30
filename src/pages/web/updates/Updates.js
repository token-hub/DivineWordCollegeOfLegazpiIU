import React from 'react'
import Grid from '@material-ui/core/Grid';
import {BaseWithBannerAndUpdates} from '../../../components/templates/web';
import {UpdateContainer, Pagination} from '../../../components/molecules/web';
import {updates} from '../../../data/web/Updates';
import {banners} from '../../../data/web';

const Updates = () => { 

    const {updatesData} = updates;

    return (
        <BaseWithBannerAndUpdates banner={banners.UpdatesBannerObj}>
          {updatesData.map((data,index) => 
            <UpdateContainer color='primary' key={index} {...data} /> 
          )}
          <Grid container justify='center'>
            {/* <Pagination /> */}
          </Grid>
        </BaseWithBannerAndUpdates>
    )
}

export default Updates
