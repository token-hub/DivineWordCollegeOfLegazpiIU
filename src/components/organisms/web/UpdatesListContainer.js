import React, {useContext, useEffect} from 'react'
import {ListContainer} from '../../molecules/web';
import {updates} from '../../../data/web/Updates';
import {WebContext} from '../../../contexts';
import {getDateObj, currentDate, formatDate} from '../../../helpers';

const UpdatesListContainer = () => {

    const {categories} = updates;
    const {states:{updates:{all, newsAndEvents}}, getUpdates, getNewsAndEvents} = useContext(WebContext);
    const isUpdatesIsEmpty = Object.keys(all).length < 1;
    const isNewsAndEventsIsEmpty = Object.keys(newsAndEvents).length < 1;

    useEffect(() => {
        if (isUpdatesIsEmpty) {
            getUpdates();
        }

        if (isNewsAndEventsIsEmpty) {
            getNewsAndEvents()
        }
    }, []);

    const latestPost = !isUpdatesIsEmpty && 
        all.filter((data, index) => index < 3)
        .map(({title, created_at, category}) => {
            const link = `/updates/${category}/${title}`;
            return {title, dateAndTime: created_at, link};
        });

    const upcomingEvents = !isNewsAndEventsIsEmpty &&
        all.filter((data, index) => data.category === 'news-and-events')
        .filter((data, index) => index < 3)
        .filter(data => formatDate(data.to) >= formatDate(currentDate()))
        .map(({title, category}) => {
            const link = `/updates/${category}/${title}`;
            return {title, link};
        });

    return (
        <>
            {upcomingEvents.length > 0 && <ListContainer data={upcomingEvents} header='Upcoming Events' type='updates'/>}
            {latestPost.length > 0 && <ListContainer data={latestPost} header='Latest Post' type='updates'/>}
            <ListContainer data={categories} header='Categories' type='updates'/>
        </>
    )
}

export default UpdatesListContainer
