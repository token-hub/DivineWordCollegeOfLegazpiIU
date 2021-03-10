import React, {useContext, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {SharedGrid, CardComp} from '../../molecules/web';
import {WebContext} from '../../../contexts';
import {EditorState, convertFromRaw, convertToRaw} from 'draft-js';

const useStyles = makeStyles(theme =>({
    root: {
        backgroundColor: 'white',
        height: 'auto',
        padding: '4rem 0',
        [theme.breakpoints.down('sm')]: {
            padding: '3rem 0'
        }
    },
    title: {
        marginBottom: '3rem',
        fontWeight: 600,
        color: '#1D17CE'
    },
}))

const NewsAndEvents = () => {

    const {root, title} = useStyles();
    const {states:{updates:{newsAndEvents}}, getNewsAndEvents} = useContext(WebContext);
    const isNewsAndEventsIsEmpty = Object.keys(newsAndEvents).length < 1;

    useEffect(()=>{
        if(isNewsAndEventsIsEmpty) {
          getNewsAndEvents()
        }
      }, []);
    return (
        <SharedGrid root={root}>
              <Grid item>
                <Typography gutterBottom variant="h4" align='center' classes={{root:title}}>
                    NEWS AND EVENTS
                </Typography>
            </Grid>
            <Grid container item>
                {!isNewsAndEventsIsEmpty && 
                    newsAndEvents.filter((data, index) => index < 3)
                        .map(({title, category, updates, subtitle}, index) => {
                            const editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(updates))).getCurrentContent();
                            const firstEntityKey = editorState._map._root.entries[1][1][0];
                            const lastImageSrc = firstEntityKey ? editorState.getEntity(firstEntityKey).getData()['src'] : null;

                            const link = `/updates/${category}/${title}`;
                            const data = {link, title, image: lastImageSrc};
                            return <CardComp {...data} key={index} />
                    })
                }
            </Grid>
        </SharedGrid>
    )
}

export default NewsAndEvents
