import React, {useEffect, useContext} from 'react'
import {useParams, useLocation} from 'react-router-dom';
import {RenderForm} from '../../../components/molecules/dashboard';
import {ShowUpdate} from '../../../components/organisms/dashboard';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../components/templates/dashboard';
import {DashboardContext} from '../../../contexts';
import {setObjects} from '../../../helpers';
import banner from '../../../assets/images/newsAndEvents/july-01-2020 college-and-graduate-school-enrollment.jpg';

const ManageUpdates = () => {

    const {update} = useParams();
    const location = useLocation();
    const isEdit = location.pathname.includes('edit');

    // const {addUpdate, updateUpdate, getSelectedUpdate, states:{updates:{selected}}} = useContext(DashboardContext);
    
    // useEffect( () => {
    //     if (role) {
    //         getSelectedUpdate(role);
    //     }
    // }, []);

    const renderAddUpdatePage = () => {
        // return 'Add Update page';
        const data = setObjects(['name', 'type', 'value'], [
            ['title', 'text', ''],
            ['category', 'select', 
                {
                    values: [
                        {id: 1, description: 'announcements'},
                        {id: 2, description: 'news-and-events'}
                    ],
                    default_value: 1,
                }
            ],
            ['from', 'date'],
            ['to', 'date'],
            ['updates', 'textarea', ''],
        ]);

        return <RenderForm buttonTitle='Submit' inputFields={data} handleSubmit={()=>{}} />
    }

    const renderShowUpdatePage = () => {
        const data = {
            title: 'this is a sample title blah blah',
            category: 'news-and-events',
            from: 'July 02, 2020',
            to: 'July 03, 2020',
            posted_at: 'July 02, 2020',
            main: <>
                <p>
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                </p>
                <p>
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                </p>
                <p>
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                </p>
                <p>
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                </p>
                <div style={{ height: '35rem', width: '35rem' }}>
                    <img src={banner} alt='hurray' style={{ width: '100%', height: '100%' }} />
                </div>
            </>
        }

        return <ShowUpdate data={data} />
    }

    const renderEditUpdatePage = () => {
        // return 'Edit Update page';
        // if (Object.keys(selected).length > 0) {
        //     const {description} = selected;

        //     const data = setObjects(['name', 'type', 'value'], [
        //         ['description', 'text', description],
        //         ['permissions', 'select', 1],
        //     ]);
        //     return <RenderForm buttonTitle='Submit' inputFields={data} handleSubmit={updateUpdate(role)} />
        // }

        const data = setObjects(['name', 'type', 'value'], [
            ['title', 'text', 'Sample text'],
            ['category', 'select', 
                {
                    values: [
                        {id: 1, description: 'announcements'},
                        {id: 2, description: 'news-and-events'}
                    ],
                    default_value: 1,
                }
            ],
            ['from', 'date'],
            ['to', 'date'],
            ['updates', 'textarea', 'Sample text area'],
        ]);

        return <RenderForm buttonTitle='Submit' inputFields={data} handleSubmit={()=>{}} />
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
