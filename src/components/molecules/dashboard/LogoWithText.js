import React from 'react'
import {Image, Paragraph} from '../../atoms/dashboard';
import {DWCLLogo} from '../../../assets/images/others';

const LogoWithText = () => {
        
    return (
        <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <Image source={DWCLLogo} alt='DWCL Logo' />
    <Paragraph variant='h6' bold style={{ paddingLeft: '1rem' }} >DWCL Panel</Paragraph>
        </div>
    )
}

export default LogoWithText
