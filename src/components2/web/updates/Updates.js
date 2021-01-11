import React from 'react';
import RenderUpdatesLayout from '../shared/others/renderUpdatesLayout';
import { UpdatesBannerObj } from '../data/banners';

import { updates } from '../data/updates';

const Updates = () => {
    return (
      <RenderUpdatesLayout banner={UpdatesBannerObj} data={updates} />
    )
}

export default Updates
