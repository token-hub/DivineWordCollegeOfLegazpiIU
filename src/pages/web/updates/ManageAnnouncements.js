import React, {useContext} from 'react'
import {useParams} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {BaseWithBannerAndUpdates} from '../../../components/templates/web';
import {UpdateContainer, Pagination} from '../../../components/molecules/web';
import {Paragraph} from '../../../components/atoms/web';
import {banners} from '../../../data/web';
import {WebContext} from '../../../contexts';
import {
  ModesOfPayment,
  Administrative,
  BasicEducation,
  Protocols
} from './announcements';

const ManageAnnouncements = () => { 

    const {announcement} = useParams();
    const {updates:{announcements}} = useContext(WebContext);

    const isAnnouncementExist = announcements
      .map(eachAnnouncement => { return eachAnnouncement.title })
      .filter(title => title === announcement)
      .length > 0;

      const setAnnouncementHeader = isAnnouncementExist ? announcement : `${announcement} (NOT FOUND)`;

    const renderSelectedAnnouncement = () => {
      return <>
          <Paragraph variant='h5' align='center' bold color='primary' >ANNOUNCEMENTS</Paragraph>
          <Paragraph variant='h6'  color='primary' align='center'>{setAnnouncementHeader}</Paragraph>
          {
            announcement.includes('PAYMENT')
              ? <ModesOfPayment /> 
              : announcement.includes('ADMINISTRATIVE')
                ? <Administrative />
                : announcement.includes('EDUCATION')
                  ? <BasicEducation />
                  : announcement.includes('PROTOCOLS')
                    ? <Protocols />
                    : ''
          }
        </>
    }

    const renderAllAnnouncements = () => {
      return <>
        <Paragraph variant='h5' align='center' bold color='primary' >ANNOUNCEMENTS</Paragraph>
            {announcements.map((data,index) => 
              <UpdateContainer color='primary' key={index} {...data} /> 
            )}
          <Grid container justify='center'>
            {/* <Pagination /> */}
          </Grid>
      </>
    }

    return (
        <BaseWithBannerAndUpdates banner={banners.UpdatesBannerObj}>
          {announcement ? renderSelectedAnnouncement() : renderAllAnnouncements()}
        </BaseWithBannerAndUpdates>
    )
}

export default ManageAnnouncements
