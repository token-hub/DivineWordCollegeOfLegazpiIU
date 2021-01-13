import React from 'react'
import {ListContainer} from '../../molecules/web';
import {updates} from '../../../data/web/Updates';

const UpdatesListContainer = () => {

    const {categories, lastestPost} = updates;

    return (
        <>
            <ListContainer header='Upcoming Events' type='updates'/>
            <ListContainer data={lastestPost} header='Latest Post' type='updates'/>
            <ListContainer data={categories} header='Categories' type='updates'/>
        </>
    )
}

export default UpdatesListContainer
