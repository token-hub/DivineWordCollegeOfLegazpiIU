import React, {useContext, useEffect} from 'react'
import {ListContainer} from '../../molecules/web';
import {updates} from '../../../data/web/Updates';
import {WebContext} from '../../../contexts';
import {getDateObj} from '../../../helpers';

const UpdatesListContainer = () => {

    const {categories} = updates;
    const {states:{updates:{all}}, getUpdates} = useContext(WebContext);
    const isUpdatesIsEmpty = Object.keys(all).length < 1;

    useEffect(() => {
        if (isUpdatesIsEmpty) {
            getUpdates();
        }
    }, []);

    const latestPost = !isUpdatesIsEmpty && 
        all.filter((data, index) => index < 3)
        .map(({title, created_at, category}) => {
            const link = `/updates/${category}/${title}`;
            return {title, dateAndTime: created_at, link};
        });

    return (
        <>
            <ListContainer header='Upcoming Events' type='updates'/>
            {/* change the data property of latest post below with the real data from api */}
            {latestPost.length>0 && <ListContainer data={latestPost} header='Latest Post' type='updates'/>}
            <ListContainer data={categories} header='Categories' type='updates'/>
        </>
    )
}

export default UpdatesListContainer
