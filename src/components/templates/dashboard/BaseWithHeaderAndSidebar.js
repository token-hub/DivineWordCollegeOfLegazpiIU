import React from 'react'
import {Base} from './';
import {Header} from '../../organisms/dashboard';

const BaseWithHeaderAndSidebar = ({ children }) => {
    return (
        <Base>
            <Header />
            { children }
        </Base>
    )
}

export default BaseWithHeaderAndSidebar
