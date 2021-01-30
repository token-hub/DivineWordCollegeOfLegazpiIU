import React, {useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import {BaseWithBannerAndUpdates} from '../../../components/templates/web';
import {UpdateContainer, Pagination} from '../../../components/molecules/web';
import {updates} from '../../../data/web/Updates';
import {banners} from '../../../data/web';
import {WebContext} from '../../../contexts';


const Updates = () => { 

    const {updatesData} = updates;
    const {updates:{newsAndEvents}} = useContext(WebContext);

    return (
        <BaseWithBannerAndUpdates banner={banners.UpdatesBannerObj}>
          {newsAndEvents.map((data,index) => 
            <UpdateContainer color='primary' key={index} {...data} /> 
          )}
          <Grid container justify='center'>
            {/* <Pagination /> */}
          </Grid>
        </BaseWithBannerAndUpdates>
    )
}

export default Updates
