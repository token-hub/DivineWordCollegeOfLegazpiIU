import React, {useContext} from 'react'
import {Authentication} from '../../../components/templates/dashboard';
import {RenderForm} from '../../../components/molecules/dashboard';
import {DashboardContext} from '../../../contexts';
import {Paragraph} from '../../../components/atoms/dashboard';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        padding: "1rem 1.5rem 0",
    }
});

const EmailVerification = () => {

    const {container} = useStyles();

    const {handleResendVerificationLink} = useContext(DashboardContext);

    return (
        <Authentication topTitle='Login'  topLink='/dashboard/login'>
            <div className={container}>
                <Paragraph variant='h6'><strong>Before proceeding, please check your email for a verification link</strong>. If you did not receive an email, please click the button below.</Paragraph>
            </div>

            <RenderForm buttonTitle='Request another' handleSubmit={handleResendVerificationLink} />
        </Authentication>
    )
}

export default EmailVerification
