import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph, LinkText} from '../../../components/atoms/web';

const TheHymn = () => { 

    return (
        <BaseWithBannerAndOverview data={navlinks.about_us.items} title='The Hymn' banner={banners.AboutUsBannerObj}>
            <Paragraph>
                Lyrics by: Dr. Rod Salazar 
            </Paragraph>
            <Paragraph>
                All hail, Divine Word College <br />
                Our Alma Mater dear,  <br />
                Pure fount of truth and knowledge  <br />
                Where God is always near.  <br />
            </Paragraph>
            <Paragraph>
                Through fair and stormy weather <br />
                Wherever we may be <br />
                We’ll do our best together <br />
                To live for eternity. <br />
            </Paragraph>
            <Paragraph bold>
                Refrain:
            </Paragraph>
            <Paragraph>
                With every breath of song we sing <br />
                We pledge thee all our love <br />
                And pray that God to thee may bring <br />
                More blessings from above. <br />
            </Paragraph>
            <Paragraph bold>
                (Repeat refrain)
            </Paragraph>
            <LinkText color='primary' text='DWC-Legazpi Hymn(Audio)' />
        </BaseWithBannerAndOverview>
    )
}

export default TheHymn
