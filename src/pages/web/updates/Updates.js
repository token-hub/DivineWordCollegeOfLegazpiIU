import React, {useContext, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import {BaseWithBannerAndUpdates} from '../../../components/templates/web';
import {UpdateContainer, Pagination} from '../../../components/molecules/web';
import {banners} from '../../../data/web';
import {WebContext} from '../../../contexts';
import {setUpdates, getDateObj} from '../../../helpers';
import { Paragraph } from '../../../components/atoms/web';

const Updates = () => { 

    const {states:{updates:{all}}, getUpdates} = useContext(WebContext);
    const isUpdatesIsEmpty = Object.keys(all).length < 1;

    useEffect(() => {
      getUpdates();
    }, []);

    const allUpdates = !isUpdatesIsEmpty && all.data.map(({title, subtitle, created_at, updates, category}) => {
      const link = `/updates/${category}/${title}`;
      return setUpdates(getDateObj(created_at), category, title, subtitle, link, updates);
    })

    const renderUpdates = () => {
      return (
        <>
          {allUpdates.map((data,index) => 
            <UpdateContainer color='primary' key={index} {...data} /> )
          }
          <Grid container justify='center'>
            {!isUpdatesIsEmpty && <Pagination data={all} apiRequestCallback={getUpdates} /> }
          </Grid>
        </>
      )
    }
  
    return (
        <BaseWithBannerAndUpdates banner={banners.UpdatesBannerObj}>
          {!isUpdatesIsEmpty ? renderUpdates() : <Paragraph>There is no updates yet</Paragraph>}
        </BaseWithBannerAndUpdates>
    )
}

export default Updates
