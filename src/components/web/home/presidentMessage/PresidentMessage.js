import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import SharedGrid from '../../shared/others/sharedGrid';
import presidentImg from '../../../../assets/images/others/president.jpg';

const useStyles = makeStyles(theme => ({
   root: {
       backgroundColor: '#F5F5F5',
       height: 'auto',
       padding: '4rem 0'
   }, 
   title: {
       fontWeight: 600,
       color: "#1D17CE",
       paddingBottom: '1rem'
   },
   bold: {
        fontWeight: 600,
   },
   president: {
        Height: '100%',
        width: '100',
        padding: '3rem',
   },
   image: {
       maxHeight: '100%',
       width: '100%',
   },
   message: {
       [theme.breakpoints.only('sm')]: {
          padding: '0 4rem!important'
       },
       [theme.breakpoints.only('xs')]: {
        padding: '0 3rem!important'
     }
   }
}));

const PresidentMessage = () => {

    const { root, title, bold, image, president, message } = useStyles();

    return (
        <SharedGrid root={root}>
            <Grid item md={6} className={message}>
                <Typography variant='h5' align='center' className={title}>
                    A Message From The President
                </Typography>
                <Typography align='justify' paragraph>
                    Welcome to Divine Word College of Legazpi. It matters to us that you know who we are and why this institution exists and will continue to exist.
                </Typography>
                <Typography align='justify' paragraph>
                    The raison d’être of Divine Word College of Legazpi reflects the vision of Saint Arnold Janssen, the founder of the religious-missionary congregation – <span className={bold}> the Society of the Divine Word </span> (SVD). Education is among the missionary apostolates of the Society. Our Founder, a secondary school teacher himself teaching natural sciences and mathematics, understood the importance of education as a method for evangelization, and as an effective way of missionary service. He impressed upon his missionaries that an integral approach in education is critical in the faith-formation of the person. To this day, we continue to live his vision and ensure that integral formation of the human person takes place in our schools. Our aim is to inform and mold individuals into “persons of the Word”, hearers and doers of the Word – in the language of the Divine Word Educational Association, <span className={bold}>"witnesses to the Word in the world"</span>.
                </Typography>
                <Typography align='justify' paragraph>
                    To honor this commitment, here at Divine Word College of Legazpi, we value excellence, service, and professionalism. We also ascribe to the values of justice, peace and integrity of creation as an acknowledgment of our common origin as created beings, and our interrelatedness with one another through mutual respect and co-responsibility – hence, our being a family. These values are at the core of our day-to-day undertaking – a way of life, a pledge we honor and desire to render to our students and other stakeholders.
                </Typography>
                <Typography align='justify' paragraph>
                    I invite you then to learn more about us. As you move through the pages of our website you will discover that our academic programs are designed to provide life skills and competencies that enable our young people to navigate confidently in the constantly changing milieu of the 21st century. Our commitment to academic excellence and holistic development nurtured in a healthy organizational environment and permeated with a missionary paradigm, our sense of corporate social responsibility and best practices in community involvement are meant to prepare our young to succeed in life as competent professionals with a Christian missionary character – ready for the world.
                </Typography>
                <Typography align='justify' paragraph>
                    I wish you to be part of our family here at Divine Word College of Legazpi. We are here to serve. We give you our word.
                </Typography>
                <Typography align='justify' paragraph>
                    In the Divine Word,
                </Typography>
                <Typography align='justify'>
                REV. FR. NIELO M. CANTILADO, SVD
                </Typography>
                <Typography align='justify' paragraph>
                DWCL President
                </Typography>
            </Grid>
            <Grid item md={6}>
                <div className={president}>
                    <img src={presidentImg} alt="Father President" className={image} />
                </div>
            </Grid>
        </SharedGrid>
    )
}

export default PresidentMessage
