import React, {useContext} from 'react'
import {useParams} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {BaseWithBannerAndUpdates} from '../../../components/templates/web';
import {UpdateContainer, Pagination} from '../../../components/molecules/web';
import {Paragraph} from '../../../components/atoms/web';
import {banners} from '../../../data/web';
import {WebContext} from '../../../contexts';
import {
  LectureAndWorkshop,
  DigitalTools,
  Enrollment
} from './newsAndEvents';

const ManageNewsAndEvents = () => { 

    const {newsAndEvent} = useParams();
    const {updates:{newsAndEvents}} = useContext(WebContext);

    const isNewsAndEventExist = newsAndEvents
      .map(eachNewsAndEvent => { return eachNewsAndEvent.title })
      .filter(title => title === newsAndEvent)
      .length > 0;

    const setNewsAndEventHeader = isNewsAndEventExist ? newsAndEvent : `${newsAndEvent} (NOT FOUND)`;

    const renderSelectedNewsAndEvent = () => {
      return <>
          <Paragraph variant='h5' align='center' bold color='primary' >NEWS AND EVENTS</Paragraph>
          <Paragraph variant='h6' color='primary' align='center' >{setNewsAndEventHeader}</Paragraph>
          {
            newsAndEvent.includes('LECTURE')
              ? <LectureAndWorkshop />
              : newsAndEvent.includes('DIGITAL')
                ? <DigitalTools />
                : newsAndEvent.includes('ENROLLMENT')
                  ? <Enrollment />
                  : ''
          }
      </>
    }

    const renderAllNewsAndEvents = () => {
      return <>
        <Paragraph variant='h6' align='center' color='primary' >NEWS AND EVENTS</Paragraph>
        {newsAndEvents.map((data,index) => 
          <UpdateContainer color='primary' key={index} {...data} /> 
        )}
        <Grid container justify='center'>
          {/* <Pagination /> */}
        </Grid> 
      </>
    }

    return (
      <BaseWithBannerAndUpdates banner={banners.UpdatesBannerObj}>

        {newsAndEvent ? renderSelectedNewsAndEvent() : renderAllNewsAndEvents()}
      </BaseWithBannerAndUpdates>
    )
}

export default ManageNewsAndEvents
