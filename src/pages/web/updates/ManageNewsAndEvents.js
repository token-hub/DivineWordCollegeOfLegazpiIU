import React, {useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {BaseWithBannerAndUpdates} from '../../../components/templates/web';
import {EditorState, convertFromRaw, convertToRaw} from 'draft-js';
import {UpdateContainer, Pagination} from '../../../components/molecules/web';
import {Paragraph} from '../../../components/atoms/web';
import {banners} from '../../../data/web';
import {WebContext} from '../../../contexts';
import {makeStyles} from '@material-ui/core/styles';
import draftToHtml from 'draftjs-to-html';
import parse from 'html-react-parser';
import {getDateObj} from '../../../helpers';

const useStyles = makeStyles({
  selectedUpdateContainer: {
    width: '100%',
  }
});

const ManageNewsAndEvents = () => { 
    const {selectedUpdateContainer} = useStyles();
    const {newsAndEvent} = useParams();
    const {states:{updates}, getNewsAndEvents, setEditorState, editorState} = useContext(WebContext);
    const {newsAndEvents} = updates;
    const isNewsAndEventsIsEmpty = Object.keys(newsAndEvents).length < 1;

    // check if the desired announcement is within the announcements collection
    const isNewsAndEventsExist = !isNewsAndEventsIsEmpty && newsAndEvents.data
      .map(eachNewsAndEvents => eachNewsAndEvents.title)
      .filter(title => title === newsAndEvent)
      .length > 0;

    // get the selected announcement out of the announcements collecteion
    const selectedNewsAndEvents = !isNewsAndEventsIsEmpty && newsAndEvents.data
      .filter(data => data.title === newsAndEvent)[0];

    useEffect(()=>{
      if(isNewsAndEventsIsEmpty) {
        getNewsAndEvents()
      }
    }, []);

    useEffect(() => {
      if (isNewsAndEventsExist) {
          setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(selectedNewsAndEvents.updates))));
      }       
    }, [updates])

    const setNewsAndEventHeader = isNewsAndEventsExist ? newsAndEvent.toUpperCase() : `${newsAndEvent} (NOT FOUND)`;

    const renderSelectedNewsAndEvent = () => {
      if (isNewsAndEventsExist) {
        return (
          <div className={selectedUpdateContainer}>
            <Paragraph variant='h5' align='center' bold color='primary' >NEWS AND EVENTS</Paragraph>
            <Paragraph variant='h6'  color='primary' align='center'>{setNewsAndEventHeader}</Paragraph>
            <div>{parse(draftToHtml(convertToRaw(editorState.getCurrentContent())))}</div>
            <Paragraph>{`Posted : ${selectedNewsAndEvents.created_at}`}</Paragraph>
          </div>
        )
      }
    }

    const renderAllNewsAndEvents = () => {

      let newsAndEventsContent = <Paragraph variant='h6' align='center' bold color='primary'>-- There is no news and events yet --</Paragraph>
      
      if (!isNewsAndEventsIsEmpty && newsAndEvents.data.length > 0) {
        newsAndEventsContent = <>
          <Paragraph variant='h5' align='center' bold color='primary' >NEWS AND EVENTS</Paragraph>
              {newsAndEvents.data.map(({category, title, subtitle, created_at}, index) => {
                  const link = `/updates/${category}/${title}`;
                  const data = {dateAndTime: getDateObj(created_at), title, subtitle, link}
                return <UpdateContainer color='primary' key={index} {...data} /> 
              })}
            <Grid container justify='center'>
              <Pagination data={newsAndEvents} apiRequestCallback={getNewsAndEvents}/>
            </Grid>
        </>
      }

      return newsAndEventsContent;
    }

    return (
      <BaseWithBannerAndUpdates banner={banners.UpdatesBannerObj}>
        {newsAndEvent ? renderSelectedNewsAndEvent() : renderAllNewsAndEvents()}
      </BaseWithBannerAndUpdates>
    )
}

export default ManageNewsAndEvents
