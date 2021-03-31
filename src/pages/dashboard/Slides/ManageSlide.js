import React, {useContext} from 'react'
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../components/templates/dashboard';
import {RenderForm} from '../../../components/molecules/dashboard';
import {DashboardContext} from '../../../contexts';
import {setObjects} from '../../../helpers';

const Slides = () => {

    const {addSlides} = useContext(DashboardContext);

    const data = setObjects(['name', 'type', 'value'], [
        ['slides', 'file', []]
    ]);

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header='Slides' link='/dashboard/slide' linkTitle='Add slide'>
            <RenderForm  
                inputFields={data}
                buttonTitle='submit'
                handleSubmit={addSlides}
                dense={true}
                encType={true} 
            />
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default Slides
