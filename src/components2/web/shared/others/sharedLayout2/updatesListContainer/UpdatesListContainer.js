import React from 'react'
import ListContainer from '../../listContainer';
import {categories, lastestPost} from '../../../../data/updates';

const UpdatesListContainer = () => {
    return (
        <>
            <ListContainer header='Upcoming Events' type='updates'/>
            <ListContainer data={lastestPost} header='Latest Post' type='updates'/>
            <ListContainer data={categories} header='Categories' type='updates'/>
        </>
    )
}

export default UpdatesListContainer
