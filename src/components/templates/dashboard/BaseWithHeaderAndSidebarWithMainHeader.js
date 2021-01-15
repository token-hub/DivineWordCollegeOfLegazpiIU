import React from 'react'
import {BaseWithHeaderAndSidebar} from './';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Paragraph} from '../../atoms/dashboard';

const BaseWithHeaderAndSidebarWithMainHeader = ({header, link, linkTitle, children }) => {
    return (
        <BaseWithHeaderAndSidebar>
            <Grid container direction='row' alignItems='flex-end'>
                <Paragraph variant='h5' style={{ flex: '1', lineHeight: 1 }}> {header} </Paragraph>
                <Button component='a' href={link} variant='contained' color='secondary'>{linkTitle}</Button>
            </Grid>
            <Divider style={{ margin: '1rem 0' }} />
            { children }
        </BaseWithHeaderAndSidebar>
    )
}

export default BaseWithHeaderAndSidebarWithMainHeader
