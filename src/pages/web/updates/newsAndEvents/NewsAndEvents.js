import React from 'react';
import RenderUpdatesLayout from '../../shared/others/renderUpdatesLayout';
import { UpdatesBannerObj } from '../../data/banners';

import { newsAndEvents } from '../../data/updates';

const NewsAndEvents = () => {
    return (
      <RenderUpdatesLayout banner={UpdatesBannerObj} data={newsAndEvents} />
    )
}

export default NewsAndEvents
