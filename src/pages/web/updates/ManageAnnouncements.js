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

const ManageAnnouncements = () => { 
    const {selectedUpdateContainer} = useStyles();
    const {announcement} = useParams();
    const {states:{updates}, getAnnouncements, setEditorState, editorState} = useContext(WebContext);
    const {announcements} = updates;
    const isAnnouncementIsEmpty = Object.keys(announcements).length < 1;


    // check if the desired announcement is within the announcements collection
    const isAnnouncementExist = !isAnnouncementIsEmpty && announcements.data
    .map(eachAnnouncement => eachAnnouncement.title)
    .filter(title => title === announcement)
    .length > 0;

    // get the selected announcement out of the announcements collecteion
    const selectedAnnouncement = !isAnnouncementIsEmpty && announcements.data
    .filter(data => data.title === announcement)[0];

    useEffect(()=>{
      if(isAnnouncementIsEmpty) {
        getAnnouncements()
      }
    }, []);

    useEffect(() => {
      if (isAnnouncementExist) {
          setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(selectedAnnouncement.updates))));
      }       
    }, [updates])

    const setAnnouncementHeader = isAnnouncementExist ? announcement.toUpperCase() : `${announcement} (NOT FOUND)`;

    const renderSelectedAnnouncement = () => {
      if (isAnnouncementExist) {
        return (
          <div className={selectedUpdateContainer}>
            <Paragraph variant='h5' align='center' bold color='primary' >ANNOUNCEMENTS</Paragraph>
            <Paragraph variant='h6'  color='primary' align='center'>{setAnnouncementHeader}</Paragraph>
            <div>{parse(draftToHtml(convertToRaw(editorState.getCurrentContent())))}</div>
            <Paragraph>{`Posted : ${selectedAnnouncement.created_at}`}</Paragraph>
          </div>
        )
      }
    }

    const renderAllAnnouncements = () => {
      let announcementsContent = <Paragraph variant='h6' align='center' bold color='primary'>-- There is no announcements yet --</Paragraph>

      if (!isAnnouncementIsEmpty && announcements.data.length > 0) {
        announcementsContent = <>
          <Paragraph variant='h5' align='center' bold color='primary' >ANNOUNCEMENTS</Paragraph>
              {announcements.data.map(({category, title, subtitle, created_at}, index) => {
                  const link = `/updates/${category}/${title}`;
                  const data = {dateAndTime: getDateObj(created_at), title, subtitle, link}
                return <UpdateContainer color='primary' key={index} {...data} /> 
              })}
            <Grid container justify='center'>
              <Pagination data={announcements} apiRequestCallback={getAnnouncements}/>
            </Grid>
        </>
      }

      return announcementsContent;
    }

    return (
        <BaseWithBannerAndUpdates banner={banners.UpdatesBannerObj}>
          {announcement ? renderSelectedAnnouncement() : renderAllAnnouncements()}
        </BaseWithBannerAndUpdates>
    )
}

export default ManageAnnouncements
