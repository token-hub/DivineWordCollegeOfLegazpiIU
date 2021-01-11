import React from 'react';
import RenderUpdatesLayout from '../../shared/others/renderUpdatesLayout';
import { StudentServicesBannerObj } from '../../data/banners';

import { research } from '../../data/studentServices/research';

const Research = () => {
    return (
      <RenderUpdatesLayout banner={StudentServicesBannerObj} data={research} />
    )
}

export default Research
