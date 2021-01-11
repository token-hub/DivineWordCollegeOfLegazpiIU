import React from 'react';
import RenderUpdatesLayout from '../../shared/others/renderUpdatesLayout';
import { UpdatesBannerObj } from '../../data/banners';

import { announcement } from '../../data/updates';

const Announcement = () => {
    return (
      <RenderUpdatesLayout banner={UpdatesBannerObj} data={announcement} />
    )
}

export default Announcement
