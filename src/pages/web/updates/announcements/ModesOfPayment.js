import React from 'react'
import {Image} from '../../../../components/atoms/web';
import {Paragraph} from '../../../../components/atoms/web';
import image from '../../../../assets/images/announcements/june-30-2020 mode-of-payment.jpg';

const ModesOfPayment = () => {
    return <>
        <Paragraph>PAY YOUR FEES HASSLE-FREE!</Paragraph>
        <Paragraph>
            DWCLegazpi offers different modes of payment for your convenience! It can be made not only through physical transactions but also through mobile banking and transfers.
        </Paragraph>
        <Paragraph>
            For inquiries, kindly message this page, send an email to inquiries.cashier@dwc-legazpi.edu, or contact mobile no. 0925-826-1308.
        </Paragraph>
        <Paragraph>We hope to see you soon!</Paragraph>
        <Image source={image} style={{ marginBottom: '1rem' }} alt='Modes of Payment' />
    </>
}

export default ModesOfPayment
