import React, {useContext, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import {BaseWithBannerAndUpdates} from '../../../components/templates/web';
import {UpdateContainer, Pagination} from '../../../components/molecules/web';
import {banners} from '../../../data/web';
import {WebContext} from '../../../contexts';
import {setUpdates, getDateObj} from '../../../helpers';
import workshop from '../../../assets/images/newsAndEvents/july-16-2020 lecture-and-workshop-on-technology-01.jpg';
import digital from '../../../assets/images/newsAndEvents/july-12-2020 training-online-class-01.jpg';
import enrollment from '../../../assets/images/newsAndEvents/july-01-2020 college-and-graduate-school-enrollment.jpg';

const Updates = () => { 

    const {states:{updates:{all}}, getUpdates} = useContext(WebContext);
    const isUpdatesIsEmpty = Object.keys(all).length < 1;

    useEffect(() => {
      if (isUpdatesIsEmpty) {
        getUpdates();
      }
    }, []);

    const newsAndEvents = !isUpdatesIsEmpty && all.map(({title, subtitle, created_at, from, to, updates, category}) => {
      const link = `/updates/${category}/${title}`;
      return setUpdates(getDateObj(created_at), category, title, subtitle, link, updates);
    })
  
    return (
        <BaseWithBannerAndUpdates banner={banners.UpdatesBannerObj}>
          {!isUpdatesIsEmpty && newsAndEvents.map((data,index) => 
            <UpdateContainer color='primary' key={index} {...data} /> 
          )}
          <Grid container justify='center'>
            <Pagination />
          </Grid>
        </BaseWithBannerAndUpdates>
    )
}

export default Updates
