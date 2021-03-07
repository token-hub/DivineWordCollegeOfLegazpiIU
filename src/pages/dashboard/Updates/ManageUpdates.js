import React, {useEffect, useContext} from 'react'
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import {useParams, useLocation} from 'react-router-dom';
import {RenderForm} from '../../../components/molecules/dashboard';
import {ShowUpdate} from '../../../components/organisms/dashboard';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../components/templates/dashboard';
import {DashboardContext} from '../../../contexts';
import {setObjects} from '../../../helpers';

const ManageUpdates = () => {
    const {states:{updates}, getSelectedUpdate, updateUpdate, addUpdate, editorState, editorInitialState, setEditorState} = useContext(DashboardContext);
    const {update} = useParams();
    const location = useLocation();
    const isEdit = location.pathname.includes('edit');
    const isSelectedUpdateEmpty = Object.keys(updates.selected).length < 1;
    const {title, id, category, from, to, created_at, updates:content} = updates.selected;

    useEffect( () => {
        if (update) {
            getSelectedUpdate(update);
        }
    }, []);

    useEffect(()=>{
        if (!isSelectedUpdateEmpty) {
            setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(content))));
        }       
    }, [updates])

    const renderAddUpdatePage = () => {

        const values = [
            {id: 1, description: 'announcements'},
            {id: 2, description: 'news-and-events'}
        ];

        const default_value = category | null;

        const data = setObjects(['name', 'type', 'value'], [
            ['title', 'text', ''],
            ['category', 'select', {values, default_value}],
            ['from', 'date'],
            ['to', 'date'],
            ['updates', 'textarea', ''],
        ]);

        return <RenderForm buttonTitle='Submit' inputFields={data} handleSubmit={addUpdate} />
    }

    const renderShowUpdatePage = () => {
        if (!isSelectedUpdateEmpty) {
            
            const data = {
                title,
                category,
                from,
                to,
                posted_at: created_at,
            }
    
            return <ShowUpdate data={data} />
        }
    }

    const renderEditUpdatePage = () => {
        if (!isSelectedUpdateEmpty) {

            const values = [
                {id: 1, description: 'announcements'},
                {id: 2, description: 'news-and-events'}
            ];

            const default_value = category === 'announcements' ? 1 : 2;

            const data = setObjects(['name', 'type', 'value'], [
                ['id', 'hidden', id],
                ['title', 'text', title],
                ['category', 'select', {values, default_value}],
                ['from', 'date', from],
                ['to', 'date', to],
                ['updates', 'textarea', content],
            ]);
            
            return <RenderForm buttonTitle='Submit' inputFields={data} handleSubmit={updateUpdate(update)} />
        } 
    }

    const renderHeaderTitle = () => {
        return updateConditions('Add new update', 'Show update', 'Edit update');
    }

    const updateConditions = (isAddPage, isShowPage, isEditPage) => {
        return !update && !isEdit 
                ? isAddPage
                : update && !isEdit
                    ? isShowPage
                    : isEditPage
    }

    return (
        <div>
            <BaseWithHeaderAndSidebarWithMainHeader header={renderHeaderTitle()} link='/dashboard/updates' linkTitle='All updates'>
                {updateConditions(renderAddUpdatePage(), renderShowUpdatePage(), renderEditUpdatePage())}
            </BaseWithHeaderAndSidebarWithMainHeader>
        </div>
    )
}

export default ManageUpdates
