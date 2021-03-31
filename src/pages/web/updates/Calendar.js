import React, {useContext, useEffect} from 'react'
import {BaseWithBanner} from '../../../components/templates/web';
import {banners} from '../../../data/web';
import {RenderCalendar} from '../../../components/molecules/web';
import {makeStyles} from '@material-ui/core/styles';
import {WebContext} from '../../../contexts';
import {currentDate} from '../../../helpers';
import { Paragraph } from '../../../components/atoms/dashboard';

const useStyles = makeStyles({
    calendar: {
        Height: '100%',
        width: '100%',
    },
    root: {
		width: '100%',
        height: '100%',
        padding: '2rem'
    },
});

const Calendar = () => { 

    const {calendar, root} = useStyles();
    const {states:{updates:{newsAndEvents}}, getNewsAndEvents} = useContext(WebContext);
    const isNewsAndEventsIsEmpty = Object.keys(newsAndEvents).length < 1;
    
    const data = !isNewsAndEventsIsEmpty && newsAndEvents.data.length > 1 && newsAndEvents.data.map(({id, from, to, title}, index) => {
        const fromDate = currentDate(from);
        const toDate = currentDate(to);
        const color = '#1d17ce';
        return {id, title, start: fromDate, end: toDate, color}
    })

    useEffect(()=>{
        if(isNewsAndEventsIsEmpty) {
          getNewsAndEvents();
          
        }
      }, []);

    return (
        <BaseWithBanner root={root} banner={banners.UpdatesBannerObj}>
            <div className={calendar}>
                {!isNewsAndEventsIsEmpty && newsAndEvents.data.length > 1
                    ? <RenderCalendar data={data}/>
                    : <Paragraph variant='h6' style={{ height: '30rem' }}> There is no activities at the moment.</Paragraph>
                }
            </div>
        </BaseWithBanner>
    )
}

export default Calendar
