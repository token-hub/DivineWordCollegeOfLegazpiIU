import React from 'react'
import Hidden from '@material-ui/core/Hidden';
import {sliderImages} from '../../assets/images';
import { Slider } from '../../components/molecules/web';
import {Base} from '../../components/templates/web';

import {
    CoverPages,
    QuicklinksContainer,
    PresidentMessage,
    NewsAndEvents,
    Announcements,
} from '../../components/organisms/web';

const Home = () => {
    return (
        <Base >
            <CoverPages />
            <Hidden smDown>
                <Slider data={sliderImages} />
            </Hidden>
            <QuicklinksContainer />
            <PresidentMessage />
            <NewsAndEvents />
            <Announcements />
        </Base> 
    )
}

export default Home
