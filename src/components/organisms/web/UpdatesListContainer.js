import React, {useContext} from 'react'
import {ListContainer} from '../../molecules/web';
import {updates} from '../../../data/web/Updates';
import {WebContext} from '../../../contexts';

const UpdatesListContainer = () => {

    const {categories} = updates;
    const {updates:{newsAndEvents}} = useContext(WebContext);

    return (
        <>
            <ListContainer header='Upcoming Events' type='updates'/>
            {/* change the data property of latest post below with the real data from api */}
            <ListContainer data={newsAndEvents} header='Latest Post' type='updates'/>
            <ListContainer data={categories} header='Categories' type='updates'/>
        </>
    )
}

export default UpdatesListContainer
