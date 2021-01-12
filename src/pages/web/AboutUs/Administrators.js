import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {ImageWithParagraph, RenderTable} from '../../../components/molecules/web';
import {administratorsData} from '../../../data/web/AboutUs';

const Administrators = () => { 

    const {admins, otherAdmins} = administratorsData;

    return (
        <BaseWithBannerAndOverview data={navlinks.about_us.items} title='Administrators' banner={banners.AboutUsBannerObj}>
           {admins.map( (data, index) => <ImageWithParagraph key={index} {...data} /> )}
            <Paragraph bold color='primary'>
                SVD's
            </Paragraph>
            <RenderTable tableBody={otherAdmins} size='small'  />
        </BaseWithBannerAndOverview>
    )
}

export default Administrators
