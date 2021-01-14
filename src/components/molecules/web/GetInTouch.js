import React from 'react'
import Grid from '@material-ui/core/Grid';
import { renderIconFromObject } from '../../../helpers';
import {Paragraph, ListItemIconWithText} from '../../../components/atoms/web';
import {contactUs} from '../../../data/web';

const GetInTouch = () => {

    const {contacts, contactIcon, contactsText} = contactUs;

    return <>
                <Grid item md={3} />
                <Grid item md={9} style={{ flexWrap: 'wrap' }}>
                    <Paragraph variant='h3' color='primary' bold>Get in Touch</Paragraph>
                    <Paragraph>Please contact us through:</Paragraph>
                    {contacts.map( (val ,index) => {
                            return <ListItemIconWithText key={index} text={contactsText[val]}>
                                {renderIconFromObject(val, contactIcon, 'primary', true)}
                            </ListItemIconWithText>
                        }) 
                    }
                </Grid>
            </>
    
}

export default GetInTouch
