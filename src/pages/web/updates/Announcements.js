import React from 'react'
import Grid from '@material-ui/core/Grid';
import {BaseWithBannerAndUpdates} from '../../../components/templates/web';
import {UpdateContainer, Pagination} from '../../../components/molecules/web';
import {Paragraph} from '../../../components/atoms/web';
import {updates} from '../../../data/web/Updates';
import {banners} from '../../../data/web';

const Announcements = () => { 

    const {announcement} = updates;

    return (
        <BaseWithBannerAndUpdates banner={banners.UpdatesBannerObj}>
          <Paragraph variant='h5' align='center' color='primary' >ANNOUNCEMENTS</Paragraph>
          {announcement.map((data,index) => 
            <UpdateContainer color='primary' key={index} {...data} /> 
          )}
          <Grid container justify='center'>
            <Pagination />
          </Grid>
        </BaseWithBannerAndUpdates>
    )
}

export default Announcements
